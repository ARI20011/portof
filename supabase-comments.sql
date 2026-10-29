-- ============================================
-- SUPABASE: KOMENTAR GLOBAL + LIKE
-- ============================================

create extension if not exists pgcrypto;

-- ============================================
-- TABLE COMMENTS
-- ============================================

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 40),
  text text not null check (char_length(text) between 1 and 1000),
  created_at timestamptz not null default now()
);

-- ============================================
-- TABLE COMMENT LIKES
-- ============================================

create table if not exists public.comment_likes (
  comment_id uuid not null
    references public.comments(id)
    on delete cascade,

  user_id uuid not null
    references auth.users(id)
    on delete cascade,

  created_at timestamptz not null default now(),

  primary key (comment_id, user_id)
);

-- ============================================
-- INDEX
-- ============================================

create index if not exists comments_created_at_idx
on public.comments(created_at desc);

create index if not exists comment_likes_comment_id_idx
on public.comment_likes(comment_id);

-- ============================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================

alter table public.comments enable row level security;
alter table public.comment_likes enable row level security;

-- ============================================
-- COMMENTS: READ
-- ============================================

drop policy if exists "Anyone can read comments"
on public.comments;

create policy "Anyone can read comments"
on public.comments
for select
to anon, authenticated
using (true);

-- ============================================
-- COMMENTS: INSERT
-- ============================================

drop policy if exists "Authenticated users can create comments"
on public.comments;

create policy "Authenticated users can create comments"
on public.comments
for insert
to authenticated
with check (auth.uid() = user_id);

-- ============================================
-- COMMENTS: UPDATE
-- ============================================

drop policy if exists "Users can update own comments"
on public.comments;

create policy "Users can update own comments"
on public.comments
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- ============================================
-- COMMENTS: DELETE
-- ============================================

drop policy if exists "Users can delete own comments"
on public.comments;

create policy "Users can delete own comments"
on public.comments
for delete
to authenticated
using (auth.uid() = user_id);

-- ============================================
-- LIKES: READ
-- ============================================

drop policy if exists "Anyone can read comment likes"
on public.comment_likes;

create policy "Anyone can read comment likes"
on public.comment_likes
for select
to anon, authenticated
using (true);

-- ============================================
-- LIKES: INSERT
-- ============================================

drop policy if exists "Users can like comments"
on public.comment_likes;

create policy "Users can like comments"
on public.comment_likes
for insert
to authenticated
with check (auth.uid() = user_id);

-- ============================================
-- LIKES: DELETE
-- ============================================

drop policy if exists "Users can remove own likes"
on public.comment_likes;

create policy "Users can remove own likes"
on public.comment_likes
for delete
to authenticated
using (auth.uid() = user_id);