/* ==========================================================================
   SparkX 3.0 — Sticky Mobile Registration Bar
   Provides a persistent, unobtrusive conversion bar at the bottom of mobile viewports.
   Students can immediately register without having to scroll all the way back to top.
   ========================================================================== */

import { EVENT_DETAILS } from '../data/content';
import { appState } from '../state';

export function renderStickyMobileBar(): HTMLElement {
  const bar = document.createElement('aside');
  bar.className = 'sparkx-sticky-mobile-bar';
  bar.id = 'sticky-mobile-bar';
  bar.setAttribute('aria-label', 'Quick Registration Bar');

  bar.innerHTML = `
    <div class="sticky-bar-inner">
      <div class="sticky-bar-info">
        <div class="sticky-bar-brand">
          <span class="sticky-sparkx-text">SparkX 3.0</span>
          <span class="sticky-badge-intl" id="sticky-audience-label">🇮🇳 India</span>
        </div>
        <span class="sticky-bar-dates">25–26 Nov 2026</span>
      </div>
      <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="sticky-register-btn" aria-label="Register Now for SparkX 3.0">
        <span>REGISTER NOW</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
      </a>
    </div>
  `;

  // Dynamically update flag/label when audience switches
  const label = bar.querySelector('#sticky-audience-label');
  appState.subscribe((audience) => {
    if (label) {
      label.textContent = audience === 'india' ? '🇮🇳 India' : '🌍 International';
      label.className = audience === 'india' ? 'sticky-badge-india' : 'sticky-badge-intl';
    }
  });

  return bar;
}
