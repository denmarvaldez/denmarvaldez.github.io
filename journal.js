/**
 * Learning Journal Controller for Denmar Valdez Portfolio
 * Theme: 8-Bit Dark Minimalist • Standalone Article Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initLearningJournal();
  initMobileToggle();
});

let journalEntriesStore = [];
let activeCategoryFilter = 'ALL';

async function initLearningJournal() {
  const grid = document.getElementById('journal-grid');
  const searchInput = document.getElementById('journal-search');
  const categoryContainer = document.getElementById('journal-categories');

  if (!grid) return;

  try {
    const res = await fetch('journal/index.json');
    if (res.ok) {
      journalEntriesStore = await res.json();
    }
  } catch (e) {
    console.error('Failed to load journal/index.json:', e);
    journalEntriesStore = [];
  }

  updateJournalMetrics();
  renderJournalCards();

  if (searchInput) {
    searchInput.addEventListener('input', () => renderJournalCards());
  }

  if (categoryContainer) {
    categoryContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.journal-filter-btn');
      if (!btn) return;

      categoryContainer.querySelectorAll('.journal-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeCategoryFilter = btn.getAttribute('data-category') || 'ALL';
      renderJournalCards();
    });
  }
}

function updateJournalMetrics() {
  const totalEl = document.getElementById('stat-total-notes');
  const topicsEl = document.getElementById('stat-active-topics');
  const masteredEl = document.getElementById('stat-mastered');

  if (totalEl) totalEl.textContent = journalEntriesStore.length;

  if (topicsEl) {
    const categories = new Set(journalEntriesStore.map(item => item.category));
    topicsEl.textContent = categories.size;
  }

  if (masteredEl) {
    const masteredCount = journalEntriesStore.filter(item => item.status === 'Mastered').length;
    masteredEl.textContent = masteredCount;
  }
}

function renderJournalCards() {
  const grid = document.getElementById('journal-grid');
  const searchInput = document.getElementById('journal-search');
  if (!grid) return;

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = journalEntriesStore.filter(entry => {
    const matchesCategory = (activeCategoryFilter === 'ALL') ||
      (entry.category.toLowerCase() === activeCategoryFilter.toLowerCase());

    const matchesQuery = !query ||
      entry.title.toLowerCase().includes(query) ||
      entry.snippet.toLowerCase().includes(query) ||
      entry.category.toLowerCase().includes(query) ||
      (entry.tags && entry.tags.some(t => t.toLowerCase().includes(query)));

    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <p style="color: var(--text-muted); font-family: var(--font-mono);">
          <i class="fa-solid fa-folder-open mb-2" style="font-size: 2rem; display: block;"></i>
          No journal notes found matching "${query || activeCategoryFilter}".
        </p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(entry => {
    let statusClass = 'status-in-progress';
    if (entry.status === 'Mastered') statusClass = 'status-mastered';
    if (entry.status === 'Core Concept') statusClass = 'status-core-concept';

    return `
      <div class="col-12 col-md-6 col-lg-6 mb-4">
        <a href="journal/entry.html?id=${entry.id}" class="text-decoration-none text-reset">
          <div class="blog-pixel-card h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="pixel-badge">${entry.category}</span>
                <span class="journal-status-badge ${statusClass}">
                  <i class="fa-solid fa-circle" style="font-size: 0.4rem;"></i> ${entry.status}
                </span>
              </div>

              <h3 class="blog-title-pixel mb-2" style="font-size: 1.15rem;">${entry.title}</h3>
              
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 12px;">
                <i class="fa-regular fa-calendar"></i> ${entry.date} &nbsp;•&nbsp; <i class="fa-regular fa-clock"></i> ${entry.readTime}
              </div>

              <p class="blog-snippet-pixel">${entry.snippet}</p>
            </div>

            <div class="d-flex justify-content-between align-items-center mt-3 pt-3" style="border-top: 1px dashed var(--border-pixel-muted);">
              <div class="project-tags">
                ${(entry.tags || []).slice(0, 3).map(t => `<span class="pixel-tag">${t}</span>`).join('')}
              </div>
              <span style="font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; color: var(--text-primary);">
                READ NOTE >
              </span>
            </div>
          </div>
        </a>
      </div>
    `;
  }).join('');
}

function initMobileToggle() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}
