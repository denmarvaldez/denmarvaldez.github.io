/**
 * Application Controller for Denmar Valdez Portfolio
 * Theme: Pitch Black • 8-Bit Retro Aesthetic • Ultra Readability • Sisyphus Canvas
 */

document.addEventListener('DOMContentLoaded', () => {
  initSisyphus8BitCanvas();
  initHeaderNav();
  initQuotes();
  initSocialLinks();
  initProjects();
  initBlogs();
  initTimeline();
  initSanctum();
  initContactHub();
  initArticleModal();
});

/* ==========================================================================
   1. 8-Bit Animated Sisyphus Canvas Engine
   ========================================================================== */
function initSisyphus8BitCanvas() {
  const canvas = document.getElementById('sisyphus-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const width = canvas.width;
  const height = canvas.height;

  const stars = [];
  for (let i = 0; i < 35; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * (height * 0.65),
      size: Math.random() > 0.8 ? 2 : 1,
      blinkRate: Math.random() * 0.05 + 0.01,
      alpha: Math.random()
    });
  }

  // State machine: 'PUSHING' | 'ROLLING_BACK' | 'WALKING_DOWN'
  let animState = 'PUSHING';
  let sisyphusProgress = 0.10;
  let boulderProgress = 0.10;
  let walkCycle = 0;
  let boulderAngle = 0;

  // Mountain slope geometry
  const startX = 10;
  const startY = height - 40;
  const endX = width - 30;
  const endY = 40;

  const dx = endX - startX;
  const dy = endY - startY;
  const slopeAngle = Math.atan2(dy, dx);

  // Perpendicular unit vector pointing UP above mountain slope into sky
  const nx = Math.sin(slopeAngle);   // negative
  const ny = -Math.cos(slopeAngle);  // negative (upward in canvas coordinates)

  // Tangent unit vector pointing ALONG mountain slope
  const tx = Math.cos(slopeAngle);   // positive
  const ty = Math.sin(slopeAngle);   // negative

  function drawPixelRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(x), Math.floor(y), Math.floor(w), Math.floor(h));
  }

  function renderFrame() {
    ctx.clearRect(0, 0, width, height);

    // 1. Dark sky background
    drawPixelRect(0, 0, width, height, '#050505');

    // 2. Pixel stars
    stars.forEach(s => {
      s.alpha += s.blinkRate;
      if (s.alpha > 1 || s.alpha < 0.2) s.blinkRate = -s.blinkRate;
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(s.alpha)})`;
      ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.size, s.size);
    });

    // 3. Mountain Body under slope
    ctx.fillStyle = '#0d0d0d';
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();

    // Mountain slope crisp pixel surface line
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, startY);
    ctx.lineTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // Greek meander base detail
    for (let x = 0; x < width; x += 16) {
      drawPixelRect(x, height - 10, 16, 2, '#222222');
    }

    // 4. Update State Machine
    if (animState === 'PUSHING') {
      sisyphusProgress += 0.0008;
      boulderProgress = sisyphusProgress;
      walkCycle += 0.06;
      boulderAngle += 0.015;

      if (sisyphusProgress >= 0.80) {
        animState = 'ROLLING_BACK';
      }
    } 
    else if (animState === 'ROLLING_BACK') {
      // Boulder rolls down fast
      boulderProgress -= 0.006;
      boulderAngle -= 0.08;
      sisyphusProgress = 0.80;

      if (boulderProgress <= 0.10) {
        boulderProgress = 0.10;
        animState = 'WALKING_DOWN';
      }
    } 
    else if (animState === 'WALKING_DOWN') {
      // Sisyphus walks back down the mountain to meet the boulder
      sisyphusProgress -= 0.002;
      walkCycle += 0.08;

      if (sisyphusProgress <= 0.10) {
        sisyphusProgress = 0.10;
        animState = 'PUSHING';
      }
    }

    // Feet contact point of Sisyphus on the mountain slope line
    const sisyphusFeetX = startX + dx * sisyphusProgress;
    const sisyphusFeetY = startY + dy * sisyphusProgress;

    // Boulder contact point on the mountain slope
    const boulderRadius = 20;
    const boulderContactX = startX + dx * boulderProgress + (animState === 'PUSHING' ? 34 * tx : 0);
    const boulderContactY = startY + dy * boulderProgress + (animState === 'PUSHING' ? 34 * ty : 0);

    const boulderCenterX = boulderContactX + boulderRadius * nx;
    const boulderCenterY = boulderContactY + boulderRadius * ny;

    // 5. Draw Human 8-Bit Sisyphus Figure
    if (animState === 'PUSHING') {
      ctx.save();
      ctx.translate(sisyphusFeetX, sisyphusFeetY);
      ctx.rotate(slopeAngle);

      // In local coordinates:
      // x > 0 is up the hill (towards boulder)
      // y = 0 is the mountain slope line
      // y < 0 is the sky above the mountain slope
      const legStep = Math.sin(walkCycle) * 3;

      // 1. FEET & SANDALS (Planted firmly on mountain line y = 0)
      // Rear Foot & Leg
      drawPixelRect(-8 + legStep, -8, 4, 8, '#aaaaaa');
      drawPixelRect(-9 + legStep, -2, 5, 2, '#333333'); // Sandal sole

      // Front Foot & Leg (braced pushing)
      drawPixelRect(2 - legStep, -8, 4, 8, '#ffffff');
      drawPixelRect(1 - legStep, -2, 5, 2, '#333333'); // Sandal sole

      // 2. HIPS & TUNIC CLOTH
      drawPixelRect(-4, -13, 10, 5, '#333333');
      drawPixelRect(-3, -12, 8, 3, '#666666'); // Belt

      // 3. MUSCULAR TORSO (Leaning 35° forward pushing rock)
      drawPixelRect(-2, -21, 9, 9, '#dddddd'); // Back & spine
      drawPixelRect(2, -20, 7, 7, '#ffffff');  // Chest

      // 4. NECK & HEAD (Tilted forward with hair & beard)
      drawPixelRect(6, -26, 6, 6, '#ffffff');  // Face
      drawPixelRect(4, -27, 5, 5, '#111111');  // Hair
      drawPixelRect(10, -24, 3, 3, '#333333'); // Beard

      // 5. ARMS & HANDS (Extending forward & pushing boulder)
      drawPixelRect(4, -20, 5, 5, '#cccccc');  // Shoulder
      drawPixelRect(8, -19, 14, 4, '#ffffff'); // Extended arm
      drawPixelRect(21, -21, 3, 8, '#ffffff'); // Hands gripping rock

      ctx.restore();
    } 
    else if (animState === 'ROLLING_BACK') {
      ctx.save();
      ctx.translate(sisyphusFeetX, sisyphusFeetY);
      ctx.rotate(slopeAngle);

      // Standing tall watching boulder roll down
      drawPixelRect(-4, -12, 3, 12, '#cccccc');
      drawPixelRect(1, -12, 3, 12, '#ffffff');
      drawPixelRect(-5, -17, 9, 5, '#333333');
      drawPixelRect(-4, -25, 8, 9, '#ffffff');
      drawPixelRect(-4, -31, 6, 6, '#ffffff'); // Face
      drawPixelRect(-6, -32, 5, 5, '#111111'); // Hair
      drawPixelRect(-6, -22, 3, 7, '#cccccc'); // Hands on hips
      drawPixelRect(3, -22, 3, 7, '#cccccc');

      ctx.restore();
    } 
    else if (animState === 'WALKING_DOWN') {
      ctx.save();
      ctx.translate(sisyphusFeetX, sisyphusFeetY);
      ctx.rotate(slopeAngle);

      const legAnim = Math.sin(walkCycle) * 3;
      // Walking down mountain calmly
      drawPixelRect(-4 + legAnim, -12, 4, 12, '#ffffff');
      drawPixelRect(2 - legAnim, -12, 4, 12, '#aaaaaa');
      drawPixelRect(-4, -17, 8, 5, '#333333');
      drawPixelRect(-4, -25, 8, 9, '#dddddd');
      drawPixelRect(-4, -31, 6, 6, '#ffffff'); // Face
      drawPixelRect(-2, -33, 5, 4, '#111111'); // Hair
      drawPixelRect(-7 + legAnim, -20, 3, 7, '#cccccc'); // Arms swinging
      drawPixelRect(4 - legAnim, -20, 3, 7, '#cccccc');

      ctx.restore();
    }

    // 6. Draw 8-Bit Pixel Boulder
    ctx.save();
    ctx.translate(boulderCenterX, boulderCenterY);
    ctx.rotate(boulderAngle);

    // Boulder body
    drawPixelRect(-boulderRadius, -boulderRadius, boulderRadius * 2, boulderRadius * 2, '#181818');
    drawPixelRect(-boulderRadius + 3, -boulderRadius + 3, boulderRadius * 2 - 6, boulderRadius * 2 - 6, '#ffffff');

    // Internal pixel textures
    drawPixelRect(-9, -9, 7, 7, '#000000');
    drawPixelRect(3, 2, 6, 9, '#333333');
    drawPixelRect(-4, 5, 9, 4, '#000000');
    drawPixelRect(2, -10, 6, 5, '#777777');

    ctx.restore();

    requestAnimationFrame(renderFrame);
  }

  renderFrame();
}

/* ==========================================================================
   2. Navigation Controller
   ========================================================================== */
function initHeaderNav() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('active');
      if (mobileToggle) mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(s => observer.observe(s));
}

/* ==========================================================================
   3. Absurdism Quote Engine
   ========================================================================== */
let currentQuoteIndex = 0;

function initQuotes() {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const refreshBtn = document.getElementById('refresh-quote-btn');

  if (!quoteText || !DATA.quotes.length) return;

  function displayQuote(index) {
    const q = DATA.quotes[index];
    if (!q) return;

    quoteText.textContent = `"${q.text}"`;
    quoteAuthor.textContent = `— ${q.author} ${q.source ? `(${q.source})` : ''}`;
  }

  displayQuote(0);

  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      currentQuoteIndex = (currentQuoteIndex + 1) % DATA.quotes.length;
      displayQuote(currentQuoteIndex);
    });
  }

  setInterval(() => {
    currentQuoteIndex = (currentQuoteIndex + 1) % DATA.quotes.length;
    displayQuote(currentQuoteIndex);
  }, 12000);
}

/* ==========================================================================
   4. Render Social Icons
   ========================================================================== */
function initSocialLinks() {
  const container = document.getElementById('social-links-hero');
  if (!container) return;

  const h = DATA.profile.handles;

  container.innerHTML = `
    <a href="${h.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-pixel-outline" aria-label="LinkedIn">
      <i class="fa-brands fa-linkedin-in"></i> LINKEDIN
    </a>
    <a href="${h.github}" target="_blank" rel="noopener noreferrer" class="btn-pixel-outline" aria-label="GitHub">
      <i class="fa-brands fa-github"></i> GITHUB
    </a>
    <a href="${h.instagram}" target="_blank" rel="noopener noreferrer" class="btn-pixel-outline" aria-label="Instagram">
      <i class="fa-brands fa-instagram"></i> INSTAGRAM
    </a>
  `;
}

/* ==========================================================================
   5. Projects Gallery
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('#project-filters .filter-btn');

  if (!grid) return;

  function renderProjects(filter = 'all') {
    const filtered = filter === 'all' 
      ? DATA.projects 
      : DATA.projects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(p => `
      <div class="pixel-card">
        <div>
          <span class="pixel-badge">${p.badge}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="pixel-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="pixel-card-footer">
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="pixel-link">
            <i class="fa-brands fa-github"></i> GITHUB REPO
          </a>
          ${p.liveUrl && p.liveUrl !== '#' ? `
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="pixel-link" style="color: var(--accent-crimson);">
              LIVE DEMO <i class="fa-solid fa-play" style="font-size: 0.65rem;"></i>
            </a>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });
}

/* ==========================================================================
   6. Blogs & Absurdism Reader
   ========================================================================== */
function initBlogs() {
  const grid = document.getElementById('blog-grid');
  const searchInput = document.getElementById('blog-search');

  if (!grid) return;

  function renderBlogs(query = '') {
    const q = query.toLowerCase().trim();
    const filtered = DATA.blogs.filter(b => {
      return b.title.toLowerCase().includes(q) ||
             b.snippet.toLowerCase().includes(q) ||
             b.tags.some(t => t.toLowerCase().includes(q));
    });

    grid.innerHTML = filtered.map(b => `
      <div class="blog-pixel-card" onclick="openArticleModal('${b.id}')">
        <div class="blog-meta-pixel">
          <span>${b.category}</span>
          <span>${b.readTime}</span>
        </div>
        <h3 class="blog-title-pixel">${b.title}</h3>
        <p class="blog-snippet-pixel">${b.snippet}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div class="project-tags">
            ${b.tags.map(t => `<span class="pixel-tag">${t}</span>`).join('')}
          </div>
          <span style="font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; color: var(--accent-crimson);">
            READ ESSAY >
          </span>
        </div>
      </div>
    `).join('');
  }

  renderBlogs();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderBlogs(e.target.value));
  }
}

/* ==========================================================================
   7. Timeline Controller
   ========================================================================== */
function initTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = DATA.timeline.map(item => `
    <div class="timeline-retro-item">
      <div class="timeline-retro-dot"></div>
      <div class="timeline-retro-card">
        <span class="timeline-retro-year">${item.year} // ${item.category}</span>
        <h3 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; margin-bottom: 8px;">${item.title}</h3>
        <p style="font-family: var(--font-body); font-size: 0.95rem; color: var(--text-secondary);">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. Sanctum (Music, Gaming, Anime) Controller
   ========================================================================== */
function initSanctum() {
  const spotifyBox = document.getElementById('spotify-embed-box');
  if (spotifyBox && DATA.profile.spotifyPlaylist) {
    spotifyBox.innerHTML = `
      <iframe src="${DATA.profile.spotifyPlaylist}" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
      </iframe>
    `;
  }

  const trackList = document.getElementById('track-list');
  if (trackList && DATA.hobbies.music.recommendedTracks) {
    trackList.innerHTML = DATA.hobbies.music.recommendedTracks.map(t => `
      <div class="retro-list-item">
        <div style="font-family: var(--font-heading); font-size: 0.92rem; font-weight: 700; color: var(--text-primary);">${t.title}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">${t.artist} • <span style="color: var(--accent-cyan); font-weight: 600;">${t.vibe}</span></div>
      </div>
    `).join('');
  }

  const gamingList = document.getElementById('gaming-list');
  if (gamingList && DATA.hobbies.gaming) {
    gamingList.innerHTML = DATA.hobbies.gaming.map(g => `
      <div class="retro-list-item">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700;">${g.title}</span>
          <span class="pixel-badge" style="margin: 0; font-size: 0.65rem;">${g.badge}</span>
        </div>
        <div style="font-style: italic; font-size: 0.88rem; color: var(--text-secondary);">"${g.quote}"</div>
      </div>
    `).join('');
  }

  const animeList = document.getElementById('anime-list');
  if (animeList && DATA.hobbies.anime) {
    animeList.innerHTML = DATA.hobbies.anime.map(a => `
      <div class="retro-list-item">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700;">${a.title}</span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: var(--accent-crimson);">${a.tag}</span>
        </div>
        <div style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 2px;">${a.note}</div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   9. Contact Hub & Email Copy Logic
   ========================================================================== */
function initContactHub() {
  const handlesList = document.getElementById('contact-handles-list');
  const copyBtn = document.getElementById('copy-email-btn');
  const contactForm = document.getElementById('contact-form');
  const h = DATA.profile.handles;

  if (handlesList) {
    handlesList.innerHTML = `
      <a href="${h.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-item-pixel">
        <i class="fa-brands fa-linkedin-in" style="color: var(--text-primary); font-size: 1.1rem;"></i>
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">LINKEDIN</div>
          <div style="font-family: var(--font-heading); font-size: 0.88rem; font-weight: 700;">/in/denmarvaldez</div>
        </div>
      </a>

      <a href="${h.github}" target="_blank" rel="noopener noreferrer" class="contact-item-pixel">
        <i class="fa-brands fa-github" style="color: var(--text-primary); font-size: 1.1rem;"></i>
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">GITHUB</div>
          <div style="font-family: var(--font-heading); font-size: 0.88rem; font-weight: 700;">@denmarvaldez</div>
        </div>
      </a>

      <a href="${h.instagram}" target="_blank" rel="noopener noreferrer" class="contact-item-pixel">
        <i class="fa-brands fa-instagram" style="color: var(--text-primary); font-size: 1.1rem;"></i>
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">INSTAGRAM</div>
          <div style="font-family: var(--font-heading); font-size: 0.88rem; font-weight: 700;">@komorebi.den</div>
        </div>
      </a>

      <a href="mailto:${h.email}" class="contact-item-pixel">
        <i class="fa-regular fa-envelope" style="color: var(--text-primary); font-size: 1.1rem;"></i>
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">PRIMARY EMAIL</div>
          <div style="font-family: var(--font-heading); font-size: 0.88rem; font-weight: 700;">${h.email}</div>
        </div>
      </a>
    `;
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(h.email).then(() => {
        showToast('EMAIL COPIED TO CLIPBOARD!');
      }).catch(() => {
        showToast(`EMAIL: ${h.email}`);
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const message = document.getElementById('form-message').value;

      const mailtoUrl = `mailto:${h.email}?subject=${encodeURIComponent('Portfolio Contract Request from ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      window.location.href = mailtoUrl;

      showToast('TRANSMITTING MESSAGE...');
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   10. Article Reader Modal Controller
   ========================================================================== */
function initArticleModal() {
  const modal = document.getElementById('article-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

function openArticleModal(blogId) {
  const blog = DATA.blogs.find(b => b.id === blogId);
  const modal = document.getElementById('article-modal');
  const content = document.getElementById('modal-content');

  if (!blog || !modal || !content) return;

  content.innerHTML = `
    <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--accent-crimson); margin-bottom: 12px;">
      ${blog.category} // ${blog.date} // ${blog.readTime}
    </div>
    <h2 style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; margin-bottom: 20px; color: var(--text-primary); line-height: 1.35;">
      ${blog.title}
    </h2>
    <div style="font-family: var(--font-body); font-size: 1rem; color: var(--text-secondary); line-height: 1.75;">
      ${blog.content}
    </div>
    <div style="margin-top: 24px; padding-top: 16px; border-top: 2px solid var(--border-pixel-muted); display: flex; gap: 8px;">
      ${blog.tags.map(t => `<span class="pixel-tag">${t}</span>`).join('')}
    </div>
  `;

  modal.classList.add('active');
}

/* Toast Helper */
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
