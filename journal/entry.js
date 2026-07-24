/**
 * Standalone Journal Entry Reader Controller for Denmar Valdez Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initJournalEntryReader();
  initMobileToggle();
});

async function initJournalEntryReader() {
  const urlParams = new URLSearchParams(window.location.search);
  const entryId = urlParams.get('id');

  const headerBox = document.getElementById('entry-header-container');
  const bodyBox = document.getElementById('entry-body-container');
  const tagsBox = document.getElementById('entry-tags-container');
  const footerNav = document.getElementById('entry-footer-nav');

  if (!entryId) {
    if (bodyBox) {
      bodyBox.innerHTML = `
        <div class="text-center py-5">
          <p style="color: var(--accent-crimson); font-family: var(--font-mono);">
            <i class="fa-solid fa-triangle-exclamation mb-2" style="font-size: 2rem; display: block;"></i>
            INVALID JOURNAL ENTRY PARAMETER.
          </p>
          <a href="../journal.html" class="btn-pixel-outline mt-3">RETURN TO JOURNAL</a>
        </div>
      `;
    }
    return;
  }

  let indexData = [];
  try {
    const res = await fetch('index.json');
    if (res.ok) {
      indexData = await res.json();
    }
  } catch (err) {
    console.error('Failed to load journal/index.json:', err);
  }

  const entryIndex = indexData.findIndex(item => item.id === entryId);
  const entry = indexData[entryIndex];

  if (!entry) {
    if (bodyBox) {
      bodyBox.innerHTML = `
        <div class="text-center py-5">
          <p style="color: var(--text-muted); font-family: var(--font-mono);">
            <i class="fa-solid fa-file-circle-xmark mb-2" style="font-size: 2rem; display: block;"></i>
            Journal note "${entryId}" not found.
          </p>
          <a href="../journal.html" class="btn-pixel-outline mt-3">RETURN TO JOURNAL</a>
        </div>
      `;
    }
    return;
  }

  // Update Page Title
  document.title = `${entry.title} | Denmar Valdez Learning Journal`;

  let statusClass = 'status-in-progress';
  if (entry.status === 'Mastered') statusClass = 'status-mastered';
  if (entry.status === 'Core Concept') statusClass = 'status-core-concept';

  // Render Header
  if (headerBox) {
    headerBox.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="pixel-badge">${entry.category}</span>
        <span class="journal-status-badge ${statusClass}">
          <i class="fa-solid fa-circle" style="font-size: 0.4rem;"></i> ${entry.status}
        </span>
      </div>

      <h1 class="hero-title mb-3" style="font-size: 2rem; line-height: 1.3;">
        ${entry.title}
      </h1>

      <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted); padding-bottom: 16px; border-bottom: 2px solid var(--border-pixel-muted);">
        <i class="fa-regular fa-calendar"></i> Logged on ${entry.date} &nbsp;•&nbsp; <i class="fa-regular fa-clock"></i> Estimated Read: ${entry.readTime}
      </div>
    `;
  }

  // Fetch Markdown Content
  let mdHtml = '';
  try {
    const mdRes = await fetch(entry.file);
    if (mdRes.ok) {
      const mdText = await mdRes.text();
      if (window.marked) {
        mdHtml = window.marked.parse(mdText);
      } else {
        mdHtml = `<pre>${mdText}</pre>`;
      }
    } else {
      mdHtml = `<p style="color: var(--text-muted);">Failed to load markdown content file (${entry.file}).</p>`;
    }
  } catch (err) {
    console.error('Error fetching markdown:', err);
    mdHtml = `<p style="color: var(--text-muted);">Error loading journal markdown note.</p>`;
  }

  if (bodyBox) {
    bodyBox.innerHTML = mdHtml;

    // Render KaTeX Math Equations
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(bodyBox, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.error('KaTeX rendering error:', e);
      }
    }
  }

  // Render Tags
  if (tagsBox && entry.tags) {
    tagsBox.innerHTML = entry.tags.map(t => `<span class="pixel-tag">${t}</span>`).join('');
  }

  // Render Prev/Next Navigation Bar
  if (footerNav && indexData.length > 1) {
    const prevEntry = entryIndex > 0 ? indexData[entryIndex - 1] : null;
    const nextEntry = entryIndex < indexData.length - 1 ? indexData[entryIndex + 1] : null;

    footerNav.innerHTML = `
      <div>
        ${prevEntry ? `
          <a href="entry.html?id=${prevEntry.id}" class="pixel-link d-flex flex-column align-items-start text-decoration-none">
            <span style="font-size: 0.72rem; color: var(--text-muted);"><i class="fa-solid fa-arrow-left"></i> PREVIOUS NOTE</span>
            <span style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-top: 4px;">${prevEntry.title}</span>
          </a>
        ` : ''}
      </div>
      <div>
        ${nextEntry ? `
          <a href="entry.html?id=${nextEntry.id}" class="pixel-link d-flex flex-column align-items-end text-align-end text-decoration-none">
            <span style="font-size: 0.72rem; color: var(--text-muted);">NEXT NOTE <i class="fa-solid fa-arrow-right"></i></span>
            <span style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-top: 4px;">${nextEntry.title}</span>
          </a>
        ` : ''}
      </div>
    `;
  }
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
