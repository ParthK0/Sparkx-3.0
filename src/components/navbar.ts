import { appState } from '../state';
import { EVENT_DETAILS } from '../data/content';

export function renderNavbar(): HTMLElement {
  const nav = document.createElement('header');
  nav.className = 'site-header';
  nav.id = 'navbar';
  nav.setAttribute('aria-hidden', 'true');

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
          <a href="#pro-novel" class="nav-link" data-section="pro-novel">Pro & Novel</a>
          <a href="#thirty-day-challenge" class="nav-link" data-section="thirty-day-challenge">30-Day Challenge</a>
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
          <a href="#pro-novel" class="mob-link" style="--delay: 2">Pro & Novel</a>
          <a href="#thirty-day-challenge" class="mob-link" style="--delay: 3">30-Day Challenge</a>
          <a href="#timeline" class="mob-link" style="--delay: 4">Important Dates</a>
          <a href="#faq" class="mob-link" style="--delay: 5">Frequently Asked Questions</a>
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

  const brandLogo = nav.querySelector('.brand-logo-link') as HTMLAnchorElement;
  brandLogo?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile Drawer Toggle
  function openMobileMenu() {
    mobileToggle?.classList.add('open');
    mobileDrawer?.classList.add('open');
    nav.classList.add('is-visible', 'menu-open');
    nav.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    mobileToggle?.classList.remove('open');
    mobileDrawer?.classList.remove('open');
    nav.classList.remove('menu-open');
    document.body.classList.remove('no-scroll');
    onScroll();
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

  // Scroll reveal threshold (px from top before navbar slides in)
  const SCROLL_THRESHOLD = 70;

  // Scroll spy effect & scroll progress bar
  const onScroll = () => {
    const scrollY = window.scrollY;
    const isMobileMenuOpen = mobileDrawer?.classList.contains('open');

    const heroFloatingNav = document.getElementById('hero-floating-nav');

    // 1. Reveal or hide navbar & merge floating hero bar smoothly
    if (scrollY > SCROLL_THRESHOLD || isMobileMenuOpen) {
      nav.classList.add('is-visible', 'scrolled');
      nav.setAttribute('aria-hidden', 'false');
      heroFloatingNav?.classList.add('merged');
    } else {
      nav.classList.remove('is-visible', 'scrolled');
      nav.setAttribute('aria-hidden', 'true');
      heroFloatingNav?.classList.remove('merged');
    }

    // 2. Scroll Progress Bar
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
      progressBar.style.width = `${progress}%`;
    }

    // 3. Active Nav Link Scrollspy
    const sections = ['about', 'pro-novel', 'thirty-day-challenge', 'timeline', 'faq'];
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

    const floatLinks = heroFloatingNav?.querySelectorAll<HTMLAnchorElement>('.hero-float-link');
    floatLinks?.forEach((link) => {
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
