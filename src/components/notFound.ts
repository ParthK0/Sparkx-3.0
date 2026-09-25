/* ==========================================================================
   SparkX 3.0 — Dedicated 404 Error Page Component
   Theme-aligned, futuristic, and helpful navigation for broken URLs.
   ========================================================================== */

import { analytics } from '../utils/analytics';

export function renderNotFoundPage(missingPath?: string): HTMLElement {
  const container = document.createElement('div');
  container.className = 'sparkx-notfound-page';
  container.id = 'not-found-view';

  analytics.track('Navigation', '404 Page Viewed', missingPath || window.location.hash || window.location.pathname);

  const displayPath = missingPath || window.location.hash || window.location.pathname || 'unknown';

  container.innerHTML = `
    <div class="notfound-container">
      <div class="notfound-card">
        <div class="notfound-header">
          <div class="notfound-brand-badge">
            <img src="/images/galgotias%20univeristy.png" alt="Galgotias University" class="nf-uni-logo" />
            <span class="nf-divider"></span>
            <img src="/images/sparkx.png" alt="SparkX 3.0" class="nf-sparkx-logo" />
          </div>
        </div>

        <div class="notfound-badge-code">
          <span class="nf-digit">4</span>
          <div class="nf-radar-circle">
            <div class="radar-sweep"></div>
            <span class="nf-center-dot">0</span>
          </div>
          <span class="nf-digit">4</span>
        </div>

        <h1 class="notfound-title">Beyond Boundaries... But Off Course</h1>
        <p class="notfound-subtitle">
          The requested coordinate <code class="nf-path-code">${escapeHtml(displayPath)}</code> does not exist in the SparkX 3.0 universe.
        </p>

        <div class="notfound-actions">
          <a href="#" class="btn btn-primary btn-lg nf-home-btn" id="nf-back-home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Return to SparkX 3.0 Home</span>
          </a>
        </div>

        <div class="notfound-quicklinks">
          <span class="quicklinks-label">Quick Waypoints:</span>
          <div class="quicklinks-list">
            <a href="#about" class="nf-quicklink">About Challenge</a>
            <a href="#tracks" class="nf-quicklink">Tracks (Pro & NextGen)</a>
            <a href="#prizes" class="nf-quicklink">Prize Pools</a>
            <a href="#timeline" class="nf-quicklink">Key Dates</a>
            <a href="#faq" class="nf-quicklink">FAQ</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach home button click handler
  const homeBtn = container.querySelector('#nf-back-home');
  homeBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return container;
}

function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (m) => {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return m;
    }
  });
}
