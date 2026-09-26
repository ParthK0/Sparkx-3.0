import { appState } from '../state';
import { EVENT_DETAILS } from '../data/content';

export function renderNavbar(): HTMLElement {
  const nav = document.createElement('header');
  nav.className = 'site-header';
  nav.id = 'navbar';

  nav.innerHTML = `
    <!-- Top-level Scroll Progress Indicator -->
    <div class="scroll-progress-bar" id="scroll-progress" aria-hidden="true"></div>

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
          <a href="#about" class="nav-link" data-section="about">About</a>
          <a href="#journey" class="nav-link" data-section="journey">How It Works</a>
          <a href="#tracks" class="nav-link" data-section="tracks">Tracks</a>
          <a href="#prizes" class="nav-link" data-section="prizes">Prizes</a>
          <a href="#timeline" class="nav-link" data-section="timeline">Timeline</a>
          <a href="#faq" class="nav-link" data-section="faq">FAQ</a>
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
          <a href="#about" class="mob-link" style="--delay: 1">About SparkX</a>
          <a href="#journey" class="mob-link" style="--delay: 2">How It Works</a>
          <a href="#tracks" class="mob-link" style="--delay: 3">Program Tracks</a>
          <a href="#prizes" class="mob-link" style="--delay: 4">Prize Pools</a>
          <a href="#timeline" class="mob-link" style="--delay: 5">Important Dates</a>
          <a href="#faq" class="mob-link" style="--delay: 6">Frequently Asked Questions</a>
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
  const mobileDrawer = nav.querySelector('#mobile-drawer') as HTMLElement;
  const mobLinks = nav.querySelectorAll('.mob-link');
  const desktopLinks = nav.querySelectorAll<HTMLAnchorElement>('.desktop-menu .nav-link');
  const progressBar = nav.querySelector('#scroll-progress') as HTMLElement;

  // Handle Pill Switchers
  const updateButtons = (audience: string) => {
    const isIndia = audience === 'india';

    indiaBtn?.classList.toggle('active', isIndia);
    intlBtn?.classList.toggle('active', !isIndia);

    mobIndiaBtn?.classList.toggle('active', isIndia);
    mobIntlBtn?.classList.toggle('active', !isIndia);
  };

  indiaBtn?.addEventListener('click', () => appState.setAudience('india'));
  intlBtn?.addEventListener('click', () => appState.setAudience('international'));

  mobIndiaBtn?.addEventListener('click', () => {
    appState.setAudience('india');
    closeMobileMenu();
  });

  mobIntlBtn?.addEventListener('click', () => {
    appState.setAudience('international');
    closeMobileMenu();
  });

  // Mobile Drawer Toggle
  function openMobileMenu() {
    mobileToggle?.classList.add('open');
    mobileDrawer?.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    mobileToggle?.classList.remove('open');
    mobileDrawer?.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  mobileToggle?.addEventListener('click', () => {
    const isOpen = mobileDrawer?.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close drawer on link click
  mobLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close drawer on click outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (
      mobileDrawer?.classList.contains('open') &&
      !mobileDrawer.contains(target) &&
      !mobileToggle?.contains(target)
    ) {
      closeMobileMenu();
    }
  });

  // Subscribe to state changes
  appState.subscribe(updateButtons);

  // Scroll spy effect & scroll progress bar
  const onScroll = () => {
    const scrollY = window.scrollY;

    // 1. Scrolled shadow & backdrop elevation
    if (scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // 2. Scroll Progress Bar
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
      progressBar.style.width = `${progress}%`;
    }

    // 3. Active Nav Link Scrollspy
    const sections = ['about', 'journey', 'tracks', 'prizes', 'timeline', 'faq'];
    let currentActive = '';
    const buffer = 160;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - buffer;
        const height = el.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentActive = id;
          break;
        }
      }
    }

    desktopLinks.forEach((link) => {
      const section = link.getAttribute('data-section');
      if (section && section === currentActive) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
