import { EVENT_DETAILS, INQUIRY_CONTACTS } from '../data/content';
import { GOOGLE_MAPS_URL } from './footer';

export function renderContact(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'contact-section section-padding';
  section.id = 'contact';

  section.innerHTML = `
    <div class="container">
      <div class="contact-card-wrapper" id="register">
        <div class="contact-glow-orb"></div>
        
        <div class="contact-grid">
          <!-- Left Column: Registration CTA & Instructions -->
          <div class="contact-info-col">
            <span class="contact-badge badge-gold">Final Call for Innovators</span>
            <h2 class="contact-heading">Ready to Build Beyond Boundaries?</h2>
            <p class="contact-sub">
              Secure your team’s spot in SparkX 3.0. Whether competing on-campus in Greater Noida or joining the 30-Day AI sprint virtually from abroad, register through the centralized portal.
            </p>

            <div class="contact-deadline-box">
              <div class="deadline-icon">⏳</div>
              <div>
                <strong>Registration Closes: 10 October 2026</strong>
                <p>Idea submission abstracts are evaluated on a rolling basis by the screening panel.</p>
              </div>
            </div>

            <!-- Official Coordinator & Query Contacts Box -->
            <div class="official-contact-card">
              <div class="coord-label-row">
                <span class="coord-label-icon">📞</span>
                <h4 class="coord-label">For Queries, Contact:</h4>
              </div>
              <div class="inquiry-contacts-list">
                ${INQUIRY_CONTACTS.map((c, idx) => `
                  <div class="inquiry-contact-item">
                    <div class="inquiry-contact-num">${idx + 1}</div>
                    <div class="inquiry-contact-content">
                      <div class="coord-name-row">
                        <strong class="coord-name">${c.name}</strong>
                        ${c.badge ? `<span class="coord-badge">${c.badge}</span>` : ''}
                      </div>
                      <p class="coord-role">${c.role}</p>
                      <div class="coord-links">
                        <a href="mailto:${c.email}" class="coord-link" title="Send email to ${c.name}">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                          <span>${c.email}</span>
                        </a>
                        ${c.phone ? `
                          <a href="tel:${c.phone}" class="coord-link" title="Call ${c.name}">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <span>${c.phone}</span>
                          </a>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right Column: Institutional Venue & Showcase Map Details -->
          <div class="contact-venue-col">
            <div class="venue-card">
              <div class="venue-header">
                <span class="venue-tag">Physical Exhibition Venue</span>
                <h3 class="venue-title">${EVENT_DETAILS.university}</h3>
                <p class="venue-loc">Plot No. 2, Sector 17-A, Yamuna Expressway, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh 203201, India</p>
              </div>

              <div class="venue-features-list">
                <div class="venue-feat-item">
                  <span class="feat-icon">🏢</span>
                  <div>
                    <strong>Exhibition Hall:</strong>
                    <p>School of Artificial Intelligence Complex & Advanced AI Innovation Labs</p>
                  </div>
                </div>
                <div class="venue-feat-item">
                  <span class="feat-icon">🌐</span>
                  <div>
                    <strong>Virtual Telecast:</strong>
                    <p>Real-time video links & virtual rooms provided for international jury & foreign teams</p>
                  </div>
                </div>
                <div class="venue-feat-item">
                  <span class="feat-icon">🚇</span>
                  <div>
                    <strong>Connectivity:</strong>
                    <p>Direct connectivity via Noida Metro Aqua Line & Yamuna Expressway corridor</p>
                  </div>
                </div>
              </div>

              <div class="institutional-seal-box">
                <div class="seal-text">
                  <span class="seal-host">Hosted by</span>
                  <span class="seal-name">Department of AI & Data Science</span>
                  <span class="seal-school">School of Artificial Intelligence</span>
                </div>
                <a href="${GOOGLE_MAPS_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-theme btn-sm venue-map-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span>Open Directions on Google Maps</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
