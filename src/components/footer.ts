import { EVENT_DETAILS } from '../data/content';
import { appState } from '../state';

export function renderFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  footer.innerHTML = `
    <div class="container footer-container">
      <div class="footer-top-grid">
        <div class="footer-brand-col">
          <div class="footer-logo">
            <span class="brand-title">SPARK<span class="gold-gradient">X</span> <span class="edition-num">3.0</span></span>
            <span class="brand-sub">Beyond Boundaries</span>
          </div>
          <p class="footer-tagline">
            Global Ideas • Global Impact. A premier initiative cultivating student ingenuity, product prototypes, and research papers.
          </p>
          <div class="footer-org-meta">
            <p><strong>Organized by:</strong></p>
            <p>${EVENT_DETAILS.department}</p>
            <p>${EVENT_DETAILS.school}</p>
            <p>${EVENT_DETAILS.university}, ${EVENT_DETAILS.location}</p>
          </div>
        </div>

        <div class="footer-links-col">
          <h4 class="footer-col-title">Program Navigation</h4>
          <ul class="footer-links-list">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About SparkX 3.0</a></li>
            <li><a href="#journey">Innovation Journey</a></li>
            <li><a href="#tracks">Program Tracks</a></li>
            <li><a href="#challenges">Predefined AI Challenges</a></li>
            <li><a href="#prizes">Prize Pools & Honors</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4 class="footer-col-title">Important Details</h4>
          <ul class="footer-links-list">
            <li><a href="#how-it-works">How Participation Works</a></li>
            <li><a href="#timeline">Important Dates & Schedule</a></li>
            <li><a href="#evaluation">Evaluation Rubric & Deliverables</a></li>
            <li><a href="#committee">Leadership & Committee</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
            <li><a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer">Registration Portal</a></li>
          </ul>
        </div>

        <div class="footer-audience-col">
          <h4 class="footer-col-title">Audience Selection</h4>
          <p class="footer-aud-p">Switch your perspective between domestic on-campus tracks and international virtual tracks:</p>
          <div class="footer-audience-buttons">
            <button type="button" class="btn btn-secondary btn-sm w-full" id="footer-btn-india">
              <span>🇮🇳 Indian Student Mode</span>
            </button>
            <button type="button" class="btn btn-secondary btn-sm w-full" id="footer-btn-intl">
              <span>🌍 International Mode</span>
            </button>
          </div>

          <div class="coordinator-compact-card">
            <span class="coord-compact-title">Event Inquiries:</span>
            <a href="mailto:${EVENT_DETAILS.contactEmail}" class="coord-compact-mail">${EVENT_DETAILS.contactEmail}</a>
            <span class="coord-compact-phone">Tel: ${EVENT_DETAILS.contactPhone}</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <p class="footer-copy">
          &copy; 2026 SparkX 3.0 International. School of Artificial Intelligence, Galgotias University. All rights reserved.
        </p>
        <div class="footer-legal">
          <span>25 & 26 November 2026 • Greater Noida, India</span>
        </div>
      </div>
    </div>
  `;

  // Attach audience switcher listeners
  footer.querySelector('#footer-btn-india')?.addEventListener('click', () => {
    appState.setAudience('india');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  footer.querySelector('#footer-btn-intl')?.addEventListener('click', () => {
    appState.setAudience('international');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return footer;
}
