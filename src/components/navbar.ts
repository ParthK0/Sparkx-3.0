import { appState } from '../state';
import { EVENT_DETAILS } from '../data/content';

export function renderNavbar(): HTMLElement {
  const nav = document.createElement('header');
  nav.className = 'site-header';
  nav.id = 'navbar';

  nav.innerHTML = `
    <div class="main-nav-bar">
      <div class="container nav-content">
        <a href="#hero" class="brand-logo-link" aria-label="SparkX 3.0 Home">
          <div class="brand-logo-box">
            <img src="/images/galgotias%20univeristy.png" alt="Galgotias University" class="navbar-uni-logo" />
            <div class="brand-logo-divider"></div>
            <img src="/images/sparkx.png" alt="SparkX 3.0" class="navbar-sparkx-logo" />
          </div>
        </a>

        <nav class="desktop-menu" aria-label="Main Navigation">
          <a href="#about" class="nav-link">About</a>
          <a href="#journey" class="nav-link">Journey</a>
          <a href="#tracks" class="nav-link">Tracks</a>
          <a href="#prizes" class="nav-link">Prizes</a>
          <a href="#timeline" class="nav-link">Timeline</a>
          <a href="#committee" class="nav-link">Leadership</a>
          <a href="#faq" class="nav-link">FAQ</a>
        </nav>

        <div class="nav-actions">
          <div class="audience-toggle-pill" role="group" aria-label="Select Audience">
            <button type="button" class="pill-btn" id="nav-btn-india" data-target="india" title="Switch to Indian Student View">
              <span class="flag">🇮🇳</span>
              <span class="label">India</span>
            </button>
            <button type="button" class="pill-btn" id="nav-btn-intl" data-target="international" title="Switch to International Student View">
              <span class="flag">🌍</span>
              <span class="label">International</span>
            </button>
          </div>

          <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm register-btn-nav">
            <span>Register Now</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
          </a>

          <button type="button" class="mobile-toggle" id="mobile-menu-btn" aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <div class="mobile-drawer-inner">
        <div class="mobile-audience-block">
          <p class="mobile-label">Participation Track:</p>
          <div class="audience-toggle-pill w-full">
            <button type="button" class="pill-btn" id="mob-btn-india" data-target="india">
              <span class="flag">🇮🇳</span> Indian Student
            </button>
            <button type="button" class="pill-btn" id="mob-btn-intl" data-target="international">
              <span class="flag">🌍</span> International
            </button>
          </div>
        </div>

        <nav class="mobile-nav-links">
          <a href="#about" class="mob-link">About SparkX</a>
          <a href="#journey" class="mob-link">Innovation Journey</a>
          <a href="#tracks" class="mob-link">Program Tracks</a>
          <a href="#prizes" class="mob-link">Prize Pools</a>
          <a href="#timeline" class="mob-link">Important Dates</a>
          <a href="#committee" class="mob-link">Organizing Leadership</a>
          <a href="#faq" class="mob-link">Frequently Asked Questions</a>
        </nav>

        <div class="mobile-drawer-cta">
          <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full">
            Register Now
          </a>
        </div>
      </div>
    </div>
  `;

  // Attach event handlers
  setupNavbarInteractivity(nav);

  return nav;
}

function setupNavbarInteractivity(nav: HTMLElement): void {
  const indiaBtn = nav.querySelector('#nav-btn-india') as HTMLButtonElement;
  const intlBtn = nav.querySelector('#nav-btn-intl') as HTMLButtonElement;
  const mobIndiaBtn = nav.querySelector('#mob-btn-india') as HTMLButtonElement;
  const mobIntlBtn = nav.querySelector('#mob-btn-intl') as HTMLButtonElement;
  const mobileToggle = nav.querySelector('#mobile-menu-btn') as HTMLButtonElement;
  const drawer = nav.querySelector('#mobile-drawer') as HTMLElement;
  const mobLinks = nav.querySelectorAll('.mob-link');

  const updateButtons = (audience: 'india' | 'international') => {
    if (audience === 'india') {
      indiaBtn?.classList.add('active');
      intlBtn?.classList.remove('active');
      mobIndiaBtn?.classList.add('active');
      mobIntlBtn?.classList.remove('active');
    } else {
      intlBtn?.classList.add('active');
      indiaBtn?.classList.remove('active');
      mobIntlBtn?.classList.add('active');
      mobIndiaBtn?.classList.remove('active');
    }
  };

  indiaBtn?.addEventListener('click', () => appState.setAudience('india'));
  intlBtn?.addEventListener('click', () => appState.setAudience('international'));
  mobIndiaBtn?.addEventListener('click', () => {
    appState.setAudience('india');
    drawer.classList.remove('open');
    mobileToggle.classList.remove('active');
  });
  mobIntlBtn?.addEventListener('click', () => {
    appState.setAudience('international');
    drawer.classList.remove('open');
    mobileToggle.classList.remove('active');
  });

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    drawer.classList.toggle('open');
  });

  mobLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      mobileToggle.classList.remove('active');
    });
  });

  // Scroll listener for sticky blur & elevation
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Scroll spy for desktop menu active link highlighting
  setupScrollSpy(nav);

  // Subscribe to app state
  appState.subscribe(updateButtons);
}

function setupScrollSpy(nav: HTMLElement): void {
  const links = nav.querySelectorAll<HTMLAnchorElement>('.desktop-menu .nav-link');

  function updateActiveLink(): void {
    const scrollPos = window.scrollY + 140;
    let currentId = '';

    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector<HTMLElement>(href);
      if (target) {
        const top = target.offsetTop;
        const height = target.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = href;
        }
      }
    });

    links.forEach((link) => {
      if (link.getAttribute('href') === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  setTimeout(updateActiveLink, 250);
}
