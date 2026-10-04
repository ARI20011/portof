// Sample manga data (replace with your actual manga data)
const sampleManga = [
    {
        id: 1,
        title: 'One Piece',
        cover: 'images.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Action', 'Adventure', 'Comedy'],
        description: 'Follow Monkey D. Luffy and his pirate crew in their search for the ultimate treasure, the One Piece.'
    },
    {
        id: 2,
        title: 'Naruto',
        cover: 'p.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Action', 'Adventure', 'Fantasy'],
        description: 'Follow Naruto Uzumaki, a young ninja with a sealed demon within him, on his journey to become the leader of his village.'
    },
    {
        id: 3,
        title: 'Demon Slayer',
        cover: 'dm.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Action', 'Drama', 'Fantasy'],
        description: 'Tanjiro Kamado sets out to become a demon slayer after his family is slaughtered and his sister turned into a demon.'
    },
    {
        id: 4,
        title: 'Jujutsu Kaisen',
        cover: 'jjk.webp',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Action', 'Shounen', 'Supernatural'],
        description: 'Jujutsu Kaisen is an anime and manga about Yuji Itadori, a student who becomes the host of a powerful curse named Sukuna. He joins Jujutsu High to fight dangerous curses and protect people.'    
    },
     {
        id: 5,
        title: 'Jujika No Rokunin',
        cover: 'jnk.webp',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Action', 'Drama', 'Horror'],
        description: 'Jujika no Rokunin is a dark revenge manga about Shun Uruma, a boy who hunts down the six people who ruined his life after being brutally bullied. It focuses on trauma, violence, and psychological horror.'    
    },
      {
        id: 6,
        title: 'The Fragrant Flower Blooms with Dignity',
        cover: 'Mks.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['School life', 'Romance', 'Comedy'],
        description: 'The Fragrant Flower Blooms with Dignity is a school romance manga about Rintaro, a misunderstood boy, and Kaoruko, a gentle girl from an elite school, as they slowly grow closer despite their different worlds.'    
    },
    {
        id: 7,
        title: 'Bleach',
        cover: 'bleach.webp',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'],
        genre: ['Action', 'Supernatural', 'Shounen'],
        description: 'Ichigo Kurosaki becomes a Soul Reaper to fight hollows and protect the living.'
    },
    {
        id: 8,
        title: 'Attack on Titan',
        cover: 'aot.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'],
        genre: ['Action', 'Drama', 'Dark fantasy'],
        description: 'Humanity fights for survival against giant humanoid Titans.'
    },
    {
        id: 9,
        title: 'My Hero Academia',
        cover: 'mha.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Action', 'Superhero', 'Shounen'],
        description: 'Young heroes train at U.A. High to become pro heroes.'
    },
    {
        id: 10,
        title: 'Fullmetal Alchemist',
        cover: 'fma.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Adventure', 'Fantasy', 'Drama'],
        description: 'Two brothers use alchemy in a quest to restore their bodies.'
    },
    {
        id: 11,
        title: 'Death Note',
        cover: 'deathnote.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Mystery', 'Thriller', 'Supernatural'],
        description: 'A high school student finds a notebook that can kill anyone whose name is written in it.'
    },
    {
        id: 12,
        title: 'Dragon Ball',
        cover: 'dragonball.png',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Action', 'Adventure', 'Comedy'],
        description: 'Goku trains and fights to protect Earth while searching for the Dragon Balls.'
    },
    {
        id: 13,
        title: 'Hunter x Hunter',
        cover: 'hxH.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Adventure', 'Fantasy', 'Shounen'],
        description: 'Gon Freecss becomes a Hunter to find his father.'
    },
    {
        id: 14,
        title: 'Chainsaw Man',
        cover: 'chainsawman.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Action', 'Horror', 'Supernatural'],
        description: 'Denji fights demons using a chainsaw devil fused to his body.'
    },
    {
        id: 15,
        title: 'Spy x Family',
        cover: 'spyxfamily.webp',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Comedy', 'Action', 'Slice of Life'],
        description: 'A spy forms a fake family that hides secrets of its own.'
    },
    {
        id: 16,
        title: 'Tokyo Revengers',
        cover: 'tokyorevengers.jpg',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Action', 'Drama', 'Time Travel'],
        description: 'Takemichi travels back in time to save his friends and change the future.'
    },
    {
        id: 17,
        title: 'Berserk',
        cover: 'berserk.webp',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Dark fantasy', 'Action', 'Drama'],
        description: 'Guts battles demons and fate in a dark medieval world.'
    },
    {
        id: 18,
        title: 'Vagabond',
        cover: 'vagabond.webp',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
        genre: ['Historical', 'Action', 'Drama'],
        description: 'A fictionalized account of legendary swordsman Miyamoto Musashi.'
    }
];

// DOM Elements
const mangaGrid = document.getElementById('mangaGrid');
const mangaViewer = document.getElementById('mangaViewer');
const searchInput = document.getElementById('searchInput');
const homeBtn = document.getElementById('homeBtn');
const bookmarksBtn = document.getElementById('bookmarksBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');
const mangaPage = document.getElementById('mangaPage');
const loadingOverlay = document.getElementById('loadingOverlay');
const mangaTitle = document.getElementById('mangaTitle');
const chapterSelect = document.getElementById('chapterSelect');
const bookmarkBtn = document.getElementById('bookmarkBtn');
const viewButtons = document.querySelectorAll('.view-btn');
const categoryTags = document.querySelectorAll('.category-tag');

// State
let currentManga = null;
let currentChapter = null;
let currentPage = 1;
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
let currentView = 'grid';
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Accent color options (pengaturan warna)
const accentColors = [
    '#1e90ff', // biru (default)
    '#e63946', // merah
    '#2a9d8f', // hijau kebiruan
    '#006400', // hijau gelap
    '#f4a261', // oranye
    '#8d99ae'  // abu-abu kebiruan
];
let currentAccentColor = localStorage.getItem('accentColor') || accentColors[0];

function setAccentColor(color) {
    currentAccentColor = color;
    localStorage.setItem('accentColor', color);
    // compute darker and lighter variants for gradients
    function shadeHex(hex, percent) {
        const r = Math.min(255, Math.max(0, Math.round(parseInt(hex.slice(1,3),16) * (1 + percent))));
        const g = Math.min(255, Math.max(0, Math.round(parseInt(hex.slice(3,5),16) * (1 + percent))));
        const b = Math.min(255, Math.max(0, Math.round(parseInt(hex.slice(5,7),16) * (1 + percent))));
        return '#' + [r,g,b].map(n => n.toString(16).padStart(2,'0')).join('');
    }
    const accentDark = shadeHex(color, -0.18);
    const accentLight = shadeHex(color, 0.12);
    document.documentElement.style.setProperty('--accent-color', color);
    document.documentElement.style.setProperty('--accent-color-2', accentDark);
    document.documentElement.style.setProperty('--accent-color-light', accentLight);
    applyAccentToUI();
}

function loadAccentColor() {
    // Use setAccentColor to also compute secondary colors and apply UI
    setAccentColor(currentAccentColor);
}

function applyAccentToUI() {
    // Update bookmark active buttons
    document.querySelectorAll('.bookmark-btn.active').forEach(b => {
        b.style.backgroundColor = currentAccentColor;
        b.style.borderColor = currentAccentColor;
        b.style.color = '#fff';
    });
    // Update active view buttons
    document.querySelectorAll('.view-btn.active').forEach(b => {
        b.style.backgroundColor = currentAccentColor;
        b.style.color = '#fff';
        b.style.borderColor = currentAccentColor;
    });
    // Update darkMode/settings icons color
    const sBtn = document.getElementById('settingsBtn');
    if (sBtn) sBtn.style.color = currentAccentColor;
    if (darkModeBtn) darkModeBtn.style.color = currentAccentColor;
    // loading spinner
    const loading = document.querySelector('.loading');
    if (loading) loading.style.borderTopColor = currentAccentColor;
}

// Setup settings button and color panel
function setupSettings() {
    if (!darkModeBtn || !darkModeBtn.parentNode) return;

    const settingsBtn = document.createElement('button');
    settingsBtn.id = 'settingsBtn';
    settingsBtn.className = 'settings-btn';
    settingsBtn.title = 'Pengaturan';
    settingsBtn.style.marginLeft = '8px';
    settingsBtn.style.cursor = 'pointer';
    settingsBtn.style.background = 'transparent';
    settingsBtn.style.border = 'none';
    settingsBtn.style.fontSize = '18px';
    settingsBtn.textContent = '⚙️';
    darkModeBtn.parentNode.insertBefore(settingsBtn, darkModeBtn.nextSibling);

    const panel = document.createElement('div');
    panel.id = 'settingsPanel';
    panel.style.position = 'absolute';
    panel.style.background = 'var(--panel-bg, #fff)';
    panel.style.padding = '8px';
    panel.style.border = '1px solid #ccc';
    panel.style.borderRadius = '6px';
    panel.style.display = 'none';
    panel.style.gap = '8px';
    panel.style.zIndex = '999';
    panel.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';

    const title = document.createElement('div');
    title.textContent = 'Warna tema';
    title.style.fontSize = '13px';
    title.style.marginBottom = '6px';
    panel.appendChild(title);

    const swatchRow = document.createElement('div');
    swatchRow.style.display = 'flex';
    swatchRow.style.gap = '6px';
    accentColors.forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'color-swatch';
        btn.title = color;
        btn.style.width = '20px';
        btn.style.height = '20px';
        btn.style.borderRadius = '4px';
        btn.style.border = '2px solid #fff';
        btn.style.boxSizing = 'border-box';
        btn.style.cursor = 'pointer';
        btn.style.background = color;
        btn.addEventListener('click', () => setAccentColor(color));
        swatchRow.appendChild(btn);
    });
    panel.appendChild(swatchRow);

    const reset = document.createElement('button');
    reset.textContent = 'Reset';
    reset.style.display = 'block';
    reset.style.marginTop = '8px';
    reset.style.fontSize = '13px';
    reset.addEventListener('click', () => setAccentColor(accentColors[0]));
    panel.appendChild(reset);

    settingsBtn.parentNode.insertBefore(panel, settingsBtn.nextSibling);

    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
        const rect = settingsBtn.getBoundingClientRect();
        panel.style.top = (rect.bottom + window.scrollY + 6) + 'px';
        panel.style.left = (rect.left + window.scrollX - 10) + 'px';
        panel.style.flexDirection = 'column';
    });

    document.addEventListener('click', (ev) => {
        if (!panel.contains(ev.target) && ev.target !== settingsBtn) {
            panel.style.display = 'none';
        }
    });
}

// Typing Animation Text
const typingTexts = [
    "Manga Reader",
    "Best Manga Site",
    "Your Manga Library",
    "読み放題"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;

function typeText() {
    const dynamicText = document.querySelector('.dynamic-text');
    const currentText = typingTexts[textIndex];
    const waitTime = isWaiting ? 2000 : isDeleting ? 50 : 100;

    if (!isDeleting && !isWaiting && charIndex < currentText.length) {
        // Typing
        dynamicText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, waitTime);
    } else if (!isDeleting && !isWaiting && charIndex === currentText.length) {
        // Finished typing, wait before deleting
        isWaiting = true;
        setTimeout(typeText, waitTime);
    } else if (isWaiting) {
        // Start deleting
        isWaiting = false;
        isDeleting = true;
        setTimeout(typeText, waitTime);
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        dynamicText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeText, waitTime);
    } else if (isDeleting && charIndex === 0) {
        // Move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(typeText, waitTime);
    }
}

// Initialize the app
function init() {
    displayMangaGrid(sampleManga);
    setupEventListeners();
    setupDarkMode();
    setupSettings();
    loadAccentColor();
    typeText(); // Start the typing animation
}

// Setup dark mode
function setupDarkMode() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
    }
}

// Toggle dark mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    darkModeBtn.innerHTML = isDarkMode ? 
        '<i class="fas fa-sun"></i><span>Light Mode</span>' : 
        '<i class="fas fa-moon"></i><span>Dark Mode</span>';
}

// Display manga grid
function displayMangaGrid(mangaList) {
    showLoading();
    mangaGrid.innerHTML = '';
    mangaList.forEach(manga => {
        const card = createMangaCard(manga);
        mangaGrid.appendChild(card);
    });
    hideLoading();
}

// Create manga card
function createMangaCard(manga) {
    const card = document.createElement('div');
    card.className = `manga-card ${currentView === 'list' ? 'list-view' : ''}`;
    const isBookmarked = bookmarks.includes(manga.id);
    
    card.innerHTML = `
        <img src="${manga.cover}" alt="${manga.title}" onerror="this.src='placeholder.jpg'">
        <div class="manga-info">
            <h3>${manga.title}</h3>
            <p>${manga.chapters.length} Chapters</p>
            <p class="manga-genres">${manga.genre.join(', ')}</p>
            <p class="manga-description">${manga.description}</p>
            <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark(event, ${manga.id})">
                <i class="fa${isBookmarked ? 's' : 'r'} fa-bookmark"></i>
            </button>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.bookmark-btn')) {
            openManga(manga);
        }
    });
    
    return card;
}

// Toggle bookmark
function toggleBookmark(event, mangaId) {
    event.stopPropagation();
    const index = bookmarks.indexOf(mangaId);
    
    if (index === -1) {
        bookmarks.push(mangaId);
    } else {
        bookmarks.splice(index, 1);
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    displayMangaGrid(currentView === 'bookmarks' ? getBookmarkedManga() : sampleManga);
    applyAccentToUI();
}

// Get bookmarked manga
function getBookmarkedManga() {
    return sampleManga.filter(manga => bookmarks.includes(manga.id));
}

// Open manga viewer
function openManga(manga) {
    showLoading();
    currentManga = manga;
    currentChapter = manga.chapters[0];
    currentPage = 1;
    
    // Update chapter select
    chapterSelect.innerHTML = `
        <option value="">Pilih Chapter</option>
        ${manga.chapters.map((chapter, index) => `
            <option value="${index}">${chapter}</option>
        `).join('')}
    `;
    
    mangaTitle.textContent = manga.title;
    updateViewer();
    mangaGrid.style.display = 'none';
    mangaViewer.style.display = 'block';
    hideLoading();
}

// Update viewer
function updateViewer() {
    showLoading();
    // In a real app, you would load the actual manga page image here
    mangaPage.src = `placeholder.jpg`;
    pageInfo.textContent = `Chapter ${currentChapter} - Page ${currentPage}`;
    
    // Update bookmark button
    const isBookmarked = bookmarks.includes(currentManga.id);
    bookmarkBtn.innerHTML = `<i class="fa${isBookmarked ? 's' : 'r'} fa-bookmark"></i>`;
    bookmarkBtn.classList.toggle('active', isBookmarked);
    applyAccentToUI();
    hideLoading();
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    homeBtn.addEventListener('click', showHome);
    bookmarksBtn.addEventListener('click', showBookmarks);
    darkModeBtn.addEventListener('click', toggleDarkMode);
    prevPageBtn.addEventListener('click', previousPage);
    nextPageBtn.addEventListener('click', nextPage);
    chapterSelect.addEventListener('change', handleChapterChange);
    bookmarkBtn.addEventListener('click', (ev) => { if (currentManga) toggleBookmark(ev, currentManga.id); });
    
    // View buttons
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            displayMangaGrid(currentView === 'bookmarks' ? getBookmarkedManga() : sampleManga);
        });
    });
    
    // Category tags
    categoryTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const genre = tag.textContent;
            const filteredManga = sampleManga.filter(manga => 
                manga.genre.includes(genre)
            );
            displayMangaGrid(filteredManga);
        });
    });
}

// Handle chapter change
function handleChapterChange(e) {
    const chapterIndex = parseInt(e.target.value);
    if (!isNaN(chapterIndex)) {
        currentChapter = currentManga.chapters[chapterIndex];
        currentPage = 1;
        updateViewer();
    }
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredManga = sampleManga.filter(manga => 
        manga.title.toLowerCase().includes(searchTerm) ||
        manga.genre.some(g => g.toLowerCase().includes(searchTerm)) ||
        manga.description.toLowerCase().includes(searchTerm)
    );
    displayMangaGrid(filteredManga);
}

// Navigation functions
function showHome() {
    showLoading();
    mangaViewer.style.display = 'none';
    mangaGrid.style.display = 'grid';
    displayMangaGrid(sampleManga);
    hideLoading();
}

function showBookmarks() {
    showLoading();
    displayMangaGrid(getBookmarkedManga());
    hideLoading();
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updateViewer();
    }
}

function nextPage() {
    // In a real app, you would check against actual page count
    currentPage++;
    updateViewer();
}

// Loading functions
function showLoading() {
    loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 500); // Add a small delay to make the loading state visible
}

// Initialize the app when the page loads
window.addEventListener('load', init); 
console.log("By:Alif Firmansya Prendje");
alert("Hai")
