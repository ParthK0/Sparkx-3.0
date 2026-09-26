/* ==========================================================================
   SparkX 3.0 — In-Page Audience Selector Section ("Choose Your SparkX Journey")
   Positioned immediately below the Hero section.
   Allows students to quickly identify which pathway applies to them:
   - Indian Students: Campus-based innovation tracks (Pro, Novel, Sprint)
   - International Students: Global 30-Day Innovation Challenge (Online)
   Interacts dynamically with AppState to update all components.
   ========================================================================== */

import { appState } from '../state';
import { Audience } from '../types';

export function renderAudienceSelector(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'audience-selector-section';
  section.id = 'choose-journey';

  section.innerHTML = `
    <div class="container">
      <div class="selector-banner-wrapper">
        <div class="selector-banner-header text-center">
          <span class="selector-eyebrow">Participation Pathways</span>
          <h2 class="selector-main-title">Choose Your SparkX Journey</h2>
          <p class="selector-main-subtitle">
            Your participation path depends on where you study. Select your track to tailor all dates, challenges, prizes, and submission guidelines.
          </p>
        </div>

        <div class="selector-cards-container">
          <!-- Card 1: Indian Students -->
          <div class="selector-path-card" id="selector-card-india" role="button" tabindex="0" aria-label="Select Indian Student Track">
            <div class="path-card-badge-row">
              <span class="path-flag">🇮🇳</span>
              <span class="path-status-badge badge-india">National Campus Track</span>
              <span class="path-active-indicator">Selected Mode ✓</span>
            </div>

            <h3 class="path-card-title">Indian Students</h3>
            <p class="path-card-subtitle">Campus-based innovation tracks for universities across India</p>

            <ul class="path-highlights">
              <li>
                <span class="path-dot"></span>
                <span><strong>Tracks:</strong> SparkX Pro (7th Sem), SparkX Novel (3rd/5th Sem), 30-Day Sprint</span>
              </li>
              <li>
                <span class="path-dot"></span>
                <span><strong>Format:</strong> In-person Grand Showcase at Galgotias University campus</span>
              </li>
              <li>
                <span class="path-dot"></span>
                <span><strong>Prize Pool:</strong> ₹10,000 (1st) • ₹8,000 (2nd) • ₹5,000 (3rd) + Incubation & Patents</span>
              </li>
            </ul>

            <div class="path-card-action">
              <span class="action-btn-text">Explore Indian Tracks</span>
              <span class="action-btn-arrow">&rarr;</span>
            </div>
          </div>

          <!-- Card 2: International Students -->
          <div class="selector-path-card" id="selector-card-intl" role="button" tabindex="0" aria-label="Select International Student Track">
            <div class="path-card-badge-row">
              <span class="path-flag">🌍</span>
              <span class="path-status-badge badge-intl">Global Virtual Track</span>
              <span class="path-active-indicator">Selected Mode ✓</span>
            </div>

            <h3 class="path-card-title">International Students</h3>
            <p class="path-card-subtitle">Global 30-Day Innovation Challenge for foreign university teams</p>

            <ul class="path-highlights">
              <li>
                <span class="path-dot"></span>
                <span><strong>Tracks:</strong> 4 Predefined High-Impact AI Problem Domains</span>
              </li>
              <li>
                <span class="path-dot"></span>
                <span><strong>Format:</strong> 100% Online Virtual Demo & Global Jury Defense</span>
              </li>
              <li>
                <span class="path-dot"></span>
                <span><strong>Prize Pool:</strong> USD 150 (1st) • USD 100 (2nd) • USD 80 (3rd) + Silicon Valley Mentors</span>
              </li>
            </ul>

            <div class="path-card-action">
              <span class="action-btn-text">Explore International Challenge</span>
              <span class="action-btn-arrow">&rarr;</span>
            </div>
          </div>
        </div>

        <div class="selector-banner-footer text-center">
          <p class="selector-switch-note">
            💡 Content throughout this website automatically adapts based on your chosen track.
          </p>
        </div>
      </div>
    </div>
  `;

  setupAudienceSelectorInteractivity(section);

  return section;
}

function setupAudienceSelectorInteractivity(section: HTMLElement): void {
  const cardIndia = section.querySelector('#selector-card-india') as HTMLElement;
  const cardIntl = section.querySelector('#selector-card-intl') as HTMLElement;

  const updateSelectedState = (audience: Audience) => {
    if (audience === 'india') {
      cardIndia.classList.add('is-active');
      cardIntl.classList.remove('is-active');
    } else {
      cardIntl.classList.add('is-active');
      cardIndia.classList.remove('is-active');
    }
  };

  const handleSelection = (audience: Audience) => {
    appState.setAudience(audience);
    updateSelectedState(audience);

    // Smooth scroll to tracks after a momentary visual feedback
    setTimeout(() => {
      const tracksSection = document.getElementById('tracks');
      if (tracksSection) {
        tracksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  cardIndia?.addEventListener('click', (e) => {
    e.preventDefault();
    handleSelection('india');
  });

  cardIntl?.addEventListener('click', (e) => {
    e.preventDefault();
    handleSelection('international');
  });

  cardIndia?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelection('india');
    }
  });

  cardIntl?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelection('international');
    }
  });

  // Subscribe to external state changes (e.g. from navbar)
  appState.subscribe(updateSelectedState);
}
