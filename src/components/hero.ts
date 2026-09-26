/* ==========================================================================
   SparkX 3.0 — Hero Component (High-Clarity, High-Conversion UX)
   Answers the 5 core questions immediately:
   1. What: SparkX 3.0 (featuring the official SparkX logo)
   2. What is it: International Project Innovation Challenge
   3. When: 25–26 November 2026
   4. Who: Indian & International Students
   5. Action: Register Now
   ========================================================================== */

import { EVENT_DETAILS } from '../data/content';
import { appState } from '../state';
import { Audience } from '../types';

export function renderHero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero-section';
  section.id = 'hero';

  section.innerHTML = `
    <!-- Ambient subtle background accents -->
    <div class="hero-bg-fx">
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <!-- Complete Full Right-Side Campus Graphic Stage (h1.webp) -->
    <div class="hero-right-full-stage" aria-hidden="true">
      <div class="hero-right-stage-wrapper">
        <picture class="hero-right-picture">
          <source srcset="/images/elements/h1.webp" type="image/webp" />
          <img 
            src="/images/elements/h1.png" 
            alt="Galgotias University Artificial Intelligence & Data Science Block" 
            class="hero-right-full-img"
            loading="eager"
            fetchpriority="high"
            width="1672"
            height="941"
          />
        </picture>
        <div class="hero-right-stage-blend"></div>
      </div>

      <!-- Floating Campus Highlight Accents on the Complete Right Stage -->
      <div class="hero-stage-badge badge-campus-info">
        <span class="badge-icon-pill">🏛️</span>
        <div class="badge-text-cluster">
          <span class="badge-accent-title">Galgotias University</span>
          <span class="badge-accent-subtitle">Department of AI & Data Science</span>
        </div>
      </div>

      <div class="hero-stage-badge badge-prize-info" id="hero-floating-prize">
        <!-- Injected strictly based on active audience -->
      </div>
    </div>

    <!-- Foreground Website Content Layer (Built Over & Alongside the Right Graphic) -->
    <div class="container hero-container">
      <div class="hero-content-stage">
        <!-- Institutional & Partner Eyebrow with Official Logos -->
        <div class="hero-top-eyebrow">
          <img 
            src="/images/galgotias%20univeristy.png" 
            alt="Galgotias University" 
            class="hero-eyebrow-uni-logo" 
            loading="eager"
          />
          <span class="eyebrow-cross">×</span>
          <img 
            src="/images/quanta.png" 
            alt="Quanta" 
            class="hero-eyebrow-quanta-logo" 
            loading="eager"
          />
        </div>


        <!-- Main Title with Official SparkX Logo -->
        <div class="hero-title-block">
          <div class="hero-logo-lockup">
            <img 
              src="/images/sparkx.png" 
              alt="SparkX 3.0" 
              class="hero-actual-sparkx-logo" 
              loading="eager"
            />
            <span class="hero-intl-tag" id="hero-title-tag">BEYOND BOUNDARIES</span>
          </div>
          <h1 class="sr-only">SparkX 3.0 International — International Project Innovation Challenge</h1>
          <p class="hero-nature-title">International Project Innovation Challenge</p>
        </div>

        <!-- Pillars Sub-tagline (Common) -->
        <div class="hero-pillars-strip">
          <span>Innovation</span>
          <span class="strip-bullet">•</span>
          <span>Product Development</span>
          <span class="strip-bullet">•</span>
          <span>Research</span>
          <span class="strip-bullet">•</span>
          <span>Entrepreneurship</span>
        </div>

        <!-- Hero Element 1: 30-Day Innovation Challenge Banner -->
        <div class="hero-challenge-banner-wrap">
          <img 
            src="/images/elements/Screenshot_2026-09-26_144435-removebg-preview.png" 
            alt="30-Day Innovation Challenge — From Intelligent Software to Real-World AI Systems" 
            class="hero-challenge-banner-img"
            loading="eager"
          />
        </div>

        <!-- Hero Element 2: Open for Indian & International Students Strip -->
        <div class="hero-audience-strip-wrap">
          <img 
            src="/images/elements/Screenshot_2026-09-26_144427-removebg-preview.png" 
            alt="Open for Indian Students & International Students — Showcase • Collaborate • Innovate • Create Global Impact" 
            class="hero-audience-strip-img"
            loading="eager"
          />
        </div>

        <!-- Event Schedule & Location Highlight Bar -->
        <div class="hero-date-venue-bar" id="hero-date-venue-bar">
          <!-- Injected strictly based on active audience -->
        </div>

        <!-- Call to Action Area -->
        <div class="hero-cta-group">
          <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-hero-dominant" id="hero-main-register-btn" aria-label="Register Now for SparkX 3.0">
            <span class="btn-text" id="hero-register-btn-text">REGISTER NOW</span>
            <span class="btn-arrow-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
            </span>
          </a>

          <a href="#tracks" class="btn btn-hero-secondary" id="hero-explore-btn">
            <span id="hero-explore-btn-text">EXPLORE TRACKS</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;

  setupHeroSegregation(section);

  return section;
}

function setupHeroSegregation(section: HTMLElement): void {
  const floatingPrize = section.querySelector('#hero-floating-prize') as HTMLElement;
  const dvBar = section.querySelector('#hero-date-venue-bar') as HTMLElement;
  const registerBtnText = section.querySelector('#hero-register-btn-text') as HTMLElement;
  const exploreBtnText = section.querySelector('#hero-explore-btn-text') as HTMLElement;

  const update = (audience: Audience) => {
    const isIndian = audience === 'india';

    if (isIndian) {
      floatingPrize.innerHTML = `
        <span class="badge-icon-pill">🏆</span>
        <div class="badge-text-cluster">
          <span class="badge-accent-title">INR 1.5+ Lakhs</span>
          <span class="badge-accent-subtitle">Total Prize Pool Across Indian Tracks</span>
        </div>
      `;

      dvBar.innerHTML = `
        <div class="hero-date-venue-item">
          <span class="dv-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="18" y2="10"/></svg>
          </span>
          <div class="dv-info">
            <strong>25–26 NOVEMBER 2026</strong>
            <span>Galgotias University, Greater Noida (On-Campus)</span>
          </div>
        </div>
        <div class="hero-date-venue-divider"></div>
        <div class="hero-date-venue-item prize-quick-item">
          <span class="dv-icon gold-dv-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          </span>
          <div class="dv-info">
            <strong>INR 1.5+ LAKHS</strong>
            <span>1st: ₹10,000 • 2nd: ₹8,000 • 3rd: ₹5,000</span>
          </div>
        </div>
      `;

      if (registerBtnText) registerBtnText.textContent = 'REGISTER FOR INDIAN TRACKS';
      if (exploreBtnText) exploreBtnText.textContent = 'EXPLORE INDIAN TRACKS';
    } else {
      floatingPrize.innerHTML = `
        <span class="badge-icon-pill">🏆</span>
        <div class="badge-text-cluster">
          <span class="badge-accent-title">USD 330+ Cash</span>
          <span class="badge-accent-subtitle">Global Cash Awards & Silicon Valley Mentors</span>
        </div>
      `;

      dvBar.innerHTML = `
        <div class="hero-date-venue-item">
          <span class="dv-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="18" y2="10"/></svg>
          </span>
          <div class="dv-info">
            <strong>26 NOVEMBER 2026</strong>
            <span>100% Virtual Showcase (Zero Travel Required)</span>
          </div>
        </div>
        <div class="hero-date-venue-divider"></div>
        <div class="hero-date-venue-item prize-quick-item">
          <span class="dv-icon gold-dv-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          </span>
          <div class="dv-info">
            <strong>USD 330+ PRIZE POOL</strong>
            <span>1st: $150 • 2nd: $100 • 3rd: $80</span>
          </div>
        </div>
      `;

      if (registerBtnText) registerBtnText.textContent = 'REGISTER FOR GLOBAL CHALLENGE';
      if (exploreBtnText) exploreBtnText.textContent = 'EXPLORE 4 AI CHALLENGES';
    }
  };

  appState.subscribe(update);
}

export function startHeroTypewriter(): void {
  // Optional hero enhancements
}
