/* ==========================================================================
   SparkX 3.0 — Dedicated Registration Portal & Fallback Route
   Provides direct Google Form link, eligibility checklist, and offline fallback.
   ========================================================================== */

import { EVENT_DETAILS, INQUIRY_CONTACTS } from '../data/content';
import { analytics } from '../utils/analytics';

export function renderRegisterPage(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'sparkx-register-page';
  container.id = 'register-portal-view';

  analytics.track('Navigation', 'Registration Portal Viewed');

  container.innerHTML = `
    <div class="register-portal-container">
      <!-- Top Brand Header -->
      <div class="register-portal-header">
        <a href="#" class="portal-brand-link" id="reg-back-home-top">
          <div class="brand-logo-box">
            <img src="/images/galgotias%20univeristy.png" alt="Galgotias University" class="navbar-uni-logo" />
            <div class="brand-logo-divider"></div>
            <img src="/images/sparkx.png" alt="SparkX 3.0" class="navbar-sparkx-logo" />
          </div>
        </a>
        <a href="#" class="portal-return-link" id="reg-back-home-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Back to SparkX Site</span>
        </a>
      </div>

      <!-- Main Portal Card -->
      <div class="register-portal-card">
        <div class="portal-badge-row">
          <span class="portal-badge badge-active">Official Registration Portal</span>
          <span class="portal-badge badge-dates">Event Dates: ${EVENT_DETAILS.dates}</span>
        </div>

        <h1 class="portal-title">Register for SparkX 3.0 Beyond Boundaries</h1>
        <p class="portal-subtitle">
          Submit your team and project proposal to compete in the International Project Innovation Challenge at Galgotias University.
        </p>

        <!-- Primary Action Box -->
        <div class="portal-cta-box">
          <div class="cta-box-text">
            <h3>Ready to submit your application?</h3>
            <p>Registration is managed via the official Galgotias University SparkX 3.0 application system.</p>
          </div>
          <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg portal-main-cta" id="reg-direct-link">
            <span>Proceed to Official Registration Form</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
          </a>
        </div>

        <!-- Registration Essentials Grid -->
        <div class="portal-info-grid">
          <div class="portal-info-item">
            <div class="info-icon">👥</div>
            <div class="info-content">
              <h4>Team Composition</h4>
              <p>Teams can consist of 1 to 4 members. Interdisciplinary combinations are warmly welcomed.</p>
            </div>
          </div>

          <div class="portal-info-item">
            <div class="info-icon">🇮🇳</div>
            <div class="info-content">
              <h4>Indian Participants</h4>
              <p>Both SparkX Pro (Final Year Capstone) and NextGen (Pre-Final Year) tracks available with on-campus presentation.</p>
            </div>
          </div>

          <div class="portal-info-item">
            <div class="info-icon">🌍</div>
            <div class="info-content">
              <h4>International Participants</h4>
              <p>Hybrid / Online track available with international jury review and zero mandatory travel requirement.</p>
            </div>
          </div>

          <div class="portal-info-item">
            <div class="info-icon">🏆</div>
            <div class="info-content">
              <h4>Prizes & Benefits</h4>
              <p>INR 1.5+ Lakhs total prize pool, certificates endorsed by Galgotias University & IEEE, and incubation support.</p>
            </div>
          </div>
        </div>

        <!-- Direct Form URL Fallback (For firewalls / restrictions) -->
        <div class="portal-fallback-box">
          <h4>Having trouble with the button?</h4>
          <p>Copy and paste this direct form link into your browser:</p>
          <div class="portal-url-copy">
            <input type="text" readonly value="${EVENT_DETAILS.registrationUrl}" id="copy-url-input" class="portal-copy-input" />
            <button type="button" class="btn btn-secondary btn-sm" id="copy-url-btn">Copy Link</button>
          </div>
        </div>

        <!-- Inquiries Block -->
        <div class="portal-inquiry-row">
          <p class="inquiry-title">Need registration support or have team questions?</p>
          <div class="inquiry-contacts-list">
            ${INQUIRY_CONTACTS.map(c => `
              <div class="inquiry-contact-chip">
                <strong>${c.name}</strong> (${c.role.split(',')[0]}):
                <a href="mailto:${c.email}">${c.email}</a>
                ${c.phone ? ` • <span>📱 ${c.phone}</span>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach event handlers
  const backButtons = container.querySelectorAll('#reg-back-home-top, #reg-back-home-btn');
  backButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  const directLink = container.querySelector('#reg-direct-link');
  directLink?.addEventListener('click', () => {
    analytics.track('Conversion', 'Direct Register Link Clicked', 'Registration Portal');
  });

  const copyBtn = container.querySelector('#copy-url-btn') as HTMLButtonElement;
  const copyInput = container.querySelector('#copy-url-input') as HTMLInputElement;
  copyBtn?.addEventListener('click', () => {
    copyInput.select();
    navigator.clipboard?.writeText(EVENT_DETAILS.registrationUrl).then(() => {
      copyBtn.textContent = 'Copied! ✓';
      setTimeout(() => {
        copyBtn.textContent = 'Copy Link';
      }, 2000);
      analytics.track('Interaction', 'Registration URL Copied');
    });
  });

  return container;
}
