/* ==========================================================================
   SparkX 3.0 — Audience Selection Gateway ("Choose Your SparkX Journey")
   Shown immediately after the loading screen so students choose their track.
   Once selected, the tailored Indian or International home page is displayed.
   On the home page, switching is available only via the navbar and footer.
   ========================================================================== */

import { appState } from '../state';
import { Audience } from '../types';

let gatewayOverlayElement: HTMLElement | null = null;

export function renderAudienceGateway(): HTMLElement {
  const overlay = document.createElement('div');
  overlay.className = 'sparkx-gateway-overlay hidden';
  overlay.id = 'audience-gateway';

  overlay.innerHTML = `
    <div class="gateway-modal-card">
      <div class="gateway-top-branding">
        <img src="/images/galgotias%20univeristy.png" alt="Galgotias University" class="gateway-uni-logo" />
        <div class="loader-divider"></div>
        <img src="/images/sparkx.png" alt="SparkX 3.0" class="gateway-sparkx-logo" />
      </div>

      <div class="selector-banner-header text-center">
        <span class="selector-eyebrow">PARTICIPATION PATHWAYS</span>
        <h2 class="selector-main-title">Choose Your SparkX Journey</h2>
        <p class="selector-main-subtitle">
          Your participation path depends on where you study. Select your track to tailor all dates, challenges, prizes, and submission guidelines.
        </p>
      </div>

      <div class="selector-cards-container">
        <!-- Card 1: Indian Students -->
        <div class="selector-path-card" id="gateway-choose-india" role="button" tabindex="0" aria-label="Select Indian Student Track">
          <div class="path-card-badge-row">
            <span class="path-flag">🇮🇳</span>
            <span class="path-status-badge badge-india">NATIONAL CAMPUS TRACK</span>
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
        <div class="selector-path-card" id="gateway-choose-intl" role="button" tabindex="0" aria-label="Select International Student Track">
          <div class="path-card-badge-row">
            <span class="path-flag">🌍</span>
            <span class="path-status-badge badge-intl">GLOBAL VIRTUAL TRACK</span>
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
  `;

  gatewayOverlayElement = overlay;
  setupGatewayInteractivity(overlay);

  return overlay;
}

function setupGatewayInteractivity(overlay: HTMLElement): void {
  const chooseIndia = overlay.querySelector('#gateway-choose-india');
  const chooseIntl = overlay.querySelector('#gateway-choose-intl');

  const selectAudience = (audience: Audience) => {
    sessionStorage.setItem('sparkx_audience_chosen', 'true');
    appState.setAudience(audience);
    closeAudienceGateway();
  };

  chooseIndia?.addEventListener('click', (e) => {
    e.preventDefault();
    selectAudience('india');
  });

  chooseIntl?.addEventListener('click', (e) => {
    e.preventDefault();
    selectAudience('international');
  });

  chooseIndia?.addEventListener('keydown', (e) => {
    const keyEvent = e as KeyboardEvent;
    if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
      e.preventDefault();
      selectAudience('india');
    }
  });

  chooseIntl?.addEventListener('keydown', (e) => {
    const keyEvent = e as KeyboardEvent;
    if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
      e.preventDefault();
      selectAudience('international');
    }
  });
}

export function openAudienceGateway(): void {
  if (gatewayOverlayElement) {
    gatewayOverlayElement.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  }
}

export function closeAudienceGateway(): void {
  if (gatewayOverlayElement) {
    gatewayOverlayElement.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  }
}
