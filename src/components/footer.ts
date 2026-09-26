import { EVENT_DETAILS } from '../data/content';
import { appState } from '../state';

export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Galgotias+University/@28.3646374,77.5399184,17z/data=!3m1!4b1!4m6!3m5!1s0x390cc7365a740e65:0xd0d60a62e55ab171!8m2!3d28.3646374!4d77.5399184!16s%2Fm%2F0gff9fz?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D';

export function renderFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  footer.innerHTML = `
    <div class="container footer-container">
      <div class="footer-top-grid">
        <!-- Brand & Location Column -->
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

          <!-- Official Venue Location & Google Maps Card -->
          <div class="footer-location-card">
            <div class="footer-loc-header">
              <span class="loc-pin-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </span>
              <div>
                <strong class="loc-heading">Campus Venue</strong>
                <span class="loc-coords">28.3646° N, 77.5399° E</span>
              </div>
            </div>
            <p class="footer-loc-address">
              Plot No. 2, Sector 17-A, Yamuna Expressway, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh 203201
            </p>
            <a href="${GOOGLE_MAPS_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-theme btn-sm footer-maps-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>View Location on Google Maps</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          </div>
        </div>

        <!-- Program Navigation Column -->
        <div class="footer-links-col">
          <h4 class="footer-col-title">Program Navigation</h4>
          <ul class="footer-links-list">
            <li><a href="#hero">Home & Registration</a></li>
            <li><a href="#about">About SparkX 3.0</a></li>
            <li><a href="#journey">Innovation Journey</a></li>
            <li><a href="#challenges">Program Challenges</a></li>
            <li><a href="#prizes">Prize Pools & Honors</a></li>
          </ul>
        </div>

        <!-- Important Details Column -->
        <div class="footer-links-col">
          <h4 class="footer-col-title">Important Details</h4>
          <ul class="footer-links-list">
            <li><a href="#how-it-works">How Participation Works</a></li>
            <li><a href="#timeline">Important Dates & Schedule</a></li>
            <li><a href="#evaluation">Evaluation Rubric & Deliverables</a></li>
            <li><a href="#committee">Leadership & Committee</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
            <li><a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer">Official Registration Form (Google Form)</a></li>
            <li><a href="${GOOGLE_MAPS_URL}" target="_blank" rel="noopener noreferrer">Campus Map & Directions &rarr;</a></li>
          </ul>
        </div>

        <!-- Audience Selection & Inquiries Column -->
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
            <div class="footer-inquiries-list">
              <div class="footer-inquiry-item">
                <span class="footer-inquiry-name">Dr. Vartika Puri</span>
                <a href="mailto:vartika.puri@galgotiasuniversity.edu.in" class="coord-compact-mail">vartika.puri@galgotiasuniversity.edu.in</a>
              </div>
              <div class="footer-inquiry-item">
                <span class="footer-inquiry-name">Dr. Manu Singh</span>
                <a href="mailto:manu.singh@galgotiasuniversity.edu.in" class="coord-compact-mail">manu.singh@galgotiasuniversity.edu.in</a>
              </div>
              <div class="footer-inquiry-item">
                <span class="footer-inquiry-name">Mr. Ansh Vashisth (IEEE GUSB)</span>
                <a href="mailto:anshvashisth@ieee.org" class="coord-compact-mail">anshvashisth@ieee.org</a>
                <a href="tel:7017123652" class="coord-compact-phone">📱 7017123652</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <p class="footer-copy">
          &copy; 2026 SparkX 3.0 International. Galgotias University. All rights reserved.
        </p>
        <div class="footer-legal">
          <a href="${GOOGLE_MAPS_URL}" target="_blank" rel="noopener noreferrer" class="footer-loc-link" title="Open Galgotias University on Google Maps">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>25 & 26 November 2026 • Galgotias University, Greater Noida, India</span>
          </a>
        </div>
      </div>
    </div>
  `;

  const btnIndia = footer.querySelector('#footer-btn-india') as HTMLButtonElement;
  const btnIntl = footer.querySelector('#footer-btn-intl') as HTMLButtonElement;

  const updateFooterButtons = (audience: string) => {
    const isIndia = audience === 'india';
    if (isIndia) {
      btnIndia?.classList.add('btn-primary', 'active');
      btnIndia?.classList.remove('btn-secondary');
      btnIntl?.classList.remove('btn-primary', 'active');
      btnIntl?.classList.add('btn-secondary');
    } else {
      btnIntl?.classList.add('btn-primary', 'active');
      btnIntl?.classList.remove('btn-secondary');
      btnIndia?.classList.remove('btn-primary', 'active');
      btnIndia?.classList.add('btn-secondary');
    }
  };

  // Attach audience switcher listeners
  btnIndia?.addEventListener('click', () => {
    appState.setAudience('india');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btnIntl?.addEventListener('click', () => {
    appState.setAudience('international');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  appState.subscribe(updateFooterButtons);
  updateFooterButtons(appState.getAudience());

  return footer;
}
