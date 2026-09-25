import { appState } from '../state';
import { EVENT_DETAILS } from '../data/content';
import { Audience } from '../types';

export function renderHero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero-section';
  section.id = 'hero';

  section.innerHTML = `
    <!-- Ambient glowing backdrop orbs -->
    <div class="hero-bg-fx">
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="container hero-container">
      <!-- Official Galgotias University SparkX 3.0 Hero Banner: Responsive Desktop & Mobile -->
      <div class="hero-home-poster-container">
        <picture class="hero-home-picture">
          <source media="(max-width: 768px)" srcset="/images/mobile.png" />
          <source media="(min-width: 769px)" srcset="/images/desktop.png" />
          <img 
            src="/images/desktop.png" 
            alt="Galgotias University SparkX 3.0 Beyond Boundaries — 30-Day Innovation Challenge" 
            class="hero-home-banner-img"
            loading="eager"
          />
        </picture>
        <div class="hero-banner-quick-actions">
          <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg banner-register-btn">
            <span>Register on Official Form</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#audience-selector" class="btn btn-secondary btn-lg banner-choose-path-btn">
            <span>Choose Indian / International Path</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>
          </a>
        </div>
      </div>

      <!-- Interactive Path Selection matching Open For graphic from home page image -->
      <div class="participation-selector-wrapper" id="audience-selector">
        <div class="open-for-graphic-bar">
          <div class="open-for-divider-line"></div>
          <span class="open-for-title-badge">OPEN FOR</span>
          <div class="open-for-divider-line"></div>
        </div>

        <div class="selector-header">
          <h2 class="selector-title">Select Your Participation Path</h2>
          <p class="selector-subtitle">Customizes track eligibility, presentation mode (Offline at Galgotias vs Online Virtual), and prize currencies.</p>
        </div>

        <div class="participation-cards-grid">
          <!-- Indian Student Option -->
          <div class="participation-card" id="card-india" role="button" tabindex="0">
            <div class="card-indicator">
              <span class="indicator-radio"></span>
              <span class="status-badge">Recommended for India</span>
            </div>
            <div class="card-top-icon">🇮🇳</div>
            <div class="card-body-content">
              <h3 class="card-heading">Indian Students</h3>
              <p class="card-eligibility">For students studying in universities across India</p>
              <ul class="card-features">
                <li><span class="check-icon">✓</span> SparkX Pro (7th Sem Capstone & Research)</li>
                <li><span class="check-icon">✓</span> SparkX Novel (3rd & 5th Sem Product Innovation)</li>
                <li><span class="check-icon">✓</span> 30-Day Innovation Challenge (UG & PG)</li>
                <li><span class="check-icon">✓</span> Grand On-Campus Showcase at Galgotias University</li>
                <li><span class="check-icon">✓</span> Prizes in INR (₹10,000 / ₹8,000 / ₹5,000)</li>
              </ul>
            </div>
            <button type="button" class="btn btn-select-path" id="btn-select-india">
              <span class="btn-text">Continue as Indian Student</span>
              <span class="btn-arrow">&rarr;</span>
            </button>
          </div>

          <!-- International Student Option -->
          <div class="participation-card" id="card-international" role="button" tabindex="0">
            <div class="card-indicator">
              <span class="indicator-radio"></span>
              <span class="status-badge badge-blue">Global Participation</span>
            </div>
            <div class="card-top-icon">🌍</div>
            <div class="card-body-content">
              <h3 class="card-heading">International Students</h3>
              <p class="card-eligibility">For students participating from outside India</p>
              <ul class="card-features">
                <li><span class="check-icon">✓</span> Global 30-Day Innovation Challenge</li>
                <li><span class="check-icon">✓</span> 4 Predefined High-Impact AI Problem Tracks</li>
                <li><span class="check-icon">✓</span> 100% Online Participation & Virtual Demo</li>
                <li><span class="check-icon">✓</span> Global Mentors & Silicon Valley Industry Review</li>
                <li><span class="check-icon">✓</span> Cash Prizes in USD (USD 150 / USD 100 / USD 80)</li>
              </ul>
            </div>
            <button type="button" class="btn btn-select-path" id="btn-select-intl">
              <span class="btn-text">Continue as International Student</span>
              <span class="btn-arrow">&rarr;</span>
            </button>
          </div>
        </div>

        <div class="showcase-tagline-strip">
          <span>SHOWCASE</span>
          <span class="dot-sep">•</span>
          <span>COLLABORATE</span>
          <span class="dot-sep">•</span>
          <span>INNOVATE</span>
          <span class="dot-sep">•</span>
          <span>CREATE GLOBAL IMPACT</span>
        </div>

        <div class="path-notice-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <span>You can switch your audience view at any time using the toggle in the navigation bar.</span>
        </div>
      </div>
    </div>
  `;

  setupHeroInteractivity(section);

  return section;
}

function setupHeroInteractivity(section: HTMLElement): void {
  const cardIndia = section.querySelector('#card-india') as HTMLElement;
  const cardIntl = section.querySelector('#card-international') as HTMLElement;
  const btnIndia = section.querySelector('#btn-select-india') as HTMLButtonElement;
  const btnIntl = section.querySelector('#btn-select-intl') as HTMLButtonElement;

  const updateCardSelection = (audience: Audience) => {
    if (audience === 'india') {
      cardIndia?.classList.add('selected');
      cardIntl?.classList.remove('selected');
      if (btnIndia) btnIndia.querySelector('.btn-text')!.textContent = 'Active: Indian Student View';
      if (btnIntl) btnIntl.querySelector('.btn-text')!.textContent = 'Switch to International View';
    } else {
      cardIntl?.classList.add('selected');
      cardIndia?.classList.remove('selected');
      if (btnIntl) btnIntl.querySelector('.btn-text')!.textContent = 'Active: International View';
      if (btnIndia) btnIndia.querySelector('.btn-text')!.textContent = 'Switch to Indian Student View';
    }
  };

  cardIndia?.addEventListener('click', (e) => {
    e.preventDefault();
    appState.setAudience('india');
  });

  cardIntl?.addEventListener('click', (e) => {
    e.preventDefault();
    appState.setAudience('international');
  });

  btnIndia?.addEventListener('click', (e) => {
    e.stopPropagation();
    appState.setAudience('india');
  });

  btnIntl?.addEventListener('click', (e) => {
    e.stopPropagation();
    appState.setAudience('international');
  });

  appState.subscribe(updateCardSelection);
}
