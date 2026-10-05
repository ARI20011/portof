-- Supabase SQL untuk sistem komentar global + like
-- Jalankan di Supabase Dashboard > SQL Editor

create extension if not exists pgcrypto;

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 40),
  text text not null check (char_length(text) between 1 and 1000),
  created_at timestamptz not null default now()
);

create table if not exists public.comment_likes (
  comment_id uuid not null references public.comments(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (comment_id, user_id)
);

create index if not exists comments_created_at_idx
  on public.comments(created_at desc);

create index if not exists comment_likes_comment_id_idx
  on public.comment_likes(comment_id);

alter table public.comments enable row level security;
alter table public.comment_likes enable row level security;

-- Semua pengunjung boleh membaca komentar.
drop policy if exists "Anyone can read comments" on public.comments;
create policy "Anyone can read comments"
on public.comments for select
to anon, authenticated
using (true);

-- Pengunjung yang sudah mendapat anonymous account boleh membuat komentar.
drop policy if exists "Authenticated users can create comments" on public.comments;
create policy "Authenticated users can create comments"
on public.comments for insert
to authenticated
with check (auth.uid() = user_id);

-- User hanya boleh mengubah komentar miliknya.
drop policy if exists "Users can update own comments" on public.comments;
create policy "Users can update own comments"
on public.comments for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- User hanya boleh menghapus komentar miliknya.
drop policy if exists "Users can delete own comments" on public.comments;
create policy "Users can delete own comments"
on public.comments for delete
to authenticated
using (auth.uid() = user_id);

-- Semua pengunjung boleh melihat like.
drop policy if exists "Anyone can read comment likes" on public.comment_likes;
create policy "Anyone can read comment likes"
on public.comment_likes for select
to anon, authenticated
using (true);

-- Satu user hanya bisa memberikan satu like pada satu komentar.
drop policy if exists "Users can like comments" on public.comment_likes;
create policy "Users can like comments"
on public.comment_likes for insert
to authenticated
with check (auth.uid() = user_id);

-- User dapat menghapus like miliknya sendiri.
drop policy if exists "Users can remove own likes" on public.comment_likes;
create policy "Users can remove own likes"
on public.comment_likes for delete
to authenticated
using (auth.uid() = user_id);
