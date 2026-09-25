/* ==========================================================================
   SparkX 3.0 — Audience Selection Gateway (Modal / Screen)
   Provides two distinct blocks for Indian & International registration.
   Uses official Galgotias University & SparkX 3.0 logos in clean solid theme.
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

      <div class="gateway-header">
        <h2 class="gateway-heading">Where will you be participating from?</h2>
        <p class="gateway-subheading">
          Select your origin to load your customized track schedule, evaluation format, and prize pool.
          Only your relevant category details will be shown.
        </p>
      </div>

      <div class="gateway-blocks-grid">
        <!-- Block 1: Indian Student -->
        <div class="gateway-option-block block-india" id="gateway-choose-india" role="button" tabindex="0">
          <div class="block-icon-header">
            <span class="block-flag">🇮🇳</span>
            <span class="block-badge">National Track</span>
          </div>

          <h3 class="block-title">Indian Students</h3>
          <p class="block-target">For students studying at Galgotias University & colleges across India</p>

          <ul class="block-features-list">
            <li><span class="block-check-icon">✓</span> <strong>Presentation Mode:</strong> Physical on-campus expo at Galgotias University</li>
            <li><span class="block-check-icon">✓</span> <strong>Academic Tracks:</strong> SparkX Pro (7th Sem), SparkX Novel (3rd/5th Sem)</li>
            <li><span class="block-check-icon">✓</span> <strong>30-Day Sprint:</strong> National UG & PG Innovation Challenge</li>
            <li><span class="block-check-icon">✓</span> <strong>Prize Pool (INR):</strong> 1st: ₹10,000 • 2nd: ₹8,000 • 3rd: ₹5,000</li>
          </ul>

          <button type="button" class="gateway-btn" id="btn-enter-india">
            <span>Enter as Indian Student</span>
            <span>&rarr;</span>
          </button>
        </div>

        <!-- Block 2: International Student -->
        <div class="gateway-option-block block-intl" id="gateway-choose-intl" role="button" tabindex="0">
          <div class="block-icon-header">
            <span class="block-flag">🌍</span>
            <span class="block-badge">Global Track</span>
          </div>

          <h3 class="block-title">International Students</h3>
          <p class="block-target">For students participating from universities outside India</p>

          <ul class="block-features-list">
            <li><span class="block-check-icon">✓</span> <strong>Presentation Mode:</strong> 100% Online Virtual Demo & Jury Defense</li>
            <li><span class="block-check-icon">✓</span> <strong>Challenges:</strong> 4 Predefined High-Impact AI Problem Tracks</li>
            <li><span class="block-check-icon">✓</span> <strong>Review Panel:</strong> Silicon Valley & International Faculty Mentors</li>
            <li><span class="block-check-icon">✓</span> <strong>Prize Pool (USD):</strong> 1st: USD 150 • 2nd: USD 100 • 3rd: USD 80</li>
          </ul>

          <button type="button" class="gateway-btn" id="btn-enter-intl">
            <span>Enter as International Student</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>

      <p class="gateway-footer-note">
        You can change your category at any time using the audience switchers in the navigation bar.
      </p>
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
}

export function openAudienceGateway(): void {
  if (gatewayOverlayElement) {
    gatewayOverlayElement.classList.remove('hidden');
  }
}

export function closeAudienceGateway(): void {
  if (gatewayOverlayElement) {
    gatewayOverlayElement.classList.add('hidden');
  }
}
