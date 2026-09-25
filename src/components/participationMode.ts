import { appState } from '../state';
import { EVENT_DETAILS } from '../data/content';
import { Audience } from '../types';

export function renderParticipationMode(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'how-it-works-section section-padding';
  section.id = 'how-it-works';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge">Clear Execution Path</span>
        <h2 class="section-heading">How Participation Works</h2>
        <p class="section-subheading">
          A transparent, dual-mode operational architecture designed to support both on-ground innovation and seamless cross-border remote participation.
        </p>
      </div>

      <div class="participation-modes-grid">
        <!-- Indian Teams Path -->
        <div class="mode-card" id="mode-card-india">
          <div class="mode-card-header">
            <div class="mode-icon-tag">🇮🇳</div>
            <div>
              <span class="mode-target">Participants in India</span>
              <h3 class="mode-title">On-Campus Physical Track</h3>
            </div>
            <span class="mode-pill-badge">Offline Grand Showcase</span>
          </div>

          <p class="mode-desc">
            Students submit their proposals online, undergo faculty/expert screening, develop working models, 
            and assemble physically at Galgotias University campus for the live multi-floor expo.
          </p>

          <div class="mode-flow-stepper">
            <div class="flow-step">
              <span class="flow-circle">1</span>
              <div class="flow-info">
                <strong>Online Registration</strong>
                <p>Register via Google Form by 10 October 2026 with team credentials and abstract.</p>
              </div>
            </div>
            <div class="flow-step">
              <span class="flow-circle">2</span>
              <div class="flow-info">
                <strong>Idea Screening & Approval</strong>
                <p>Institutional committee reviews and confirms acceptance by 12 October 2026.</p>
              </div>
            </div>
            <div class="flow-step">
              <span class="flow-circle">3</span>
              <div class="flow-info">
                <strong>Active Sprint & Build</strong>
                <p>Build working software, AI models, or hardware prototypes with faculty mentorship.</p>
              </div>
            </div>
            <div class="flow-step highlight-flow">
              <span class="flow-circle">4</span>
              <div class="flow-info">
                <strong>On-Campus Grand Showcase</strong>
                <p>Live physical demonstration at Galgotias University campus on 25–26 November 2026.</p>
              </div>
            </div>
          </div>

          <div class="mode-footer-meta">
            <span class="venue-tag">📍 Venue: Galgotias University, Greater Noida, UP</span>
          </div>
        </div>

        <!-- International Teams Path -->
        <div class="mode-card" id="mode-card-intl">
          <div class="mode-card-header">
            <div class="mode-icon-tag">🌍</div>
            <div>
              <span class="mode-target">International Teams</span>
              <h3 class="mode-title">Virtual 30-Day Innovation Track</h3>
            </div>
            <span class="mode-pill-badge badge-blue">100% Online Participation</span>
          </div>

          <p class="mode-desc">
            Global university teams participate entirely online from anywhere in the world. 
            No travel or physical presence is required; presentations and defense occur via video conferencing.
          </p>

          <div class="mode-flow-stepper">
            <div class="flow-step">
              <span class="flow-circle">1</span>
              <div class="flow-info">
                <strong>Global Registration</strong>
                <p>Submit team roster (1–4 students) and challenge track by 10 October 2026.</p>
              </div>
            </div>
            <div class="flow-step">
              <span class="flow-circle">2</span>
              <div class="flow-info">
                <strong>Digital Idea Approval</strong>
                <p>Feedback and screening confirmation sent via email by 12 October 2026.</p>
              </div>
            </div>
            <div class="flow-step">
              <span class="flow-circle">3</span>
              <div class="flow-info">
                <strong>30-Day AI Development Sprint</strong>
                <p>15 Oct – 15 Nov 2026: Code the full-stack system and publish to public GitHub repo.</p>
              </div>
            </div>
            <div class="flow-step highlight-flow-blue">
              <span class="flow-circle">4</span>
              <div class="flow-info">
                <strong>Virtual Jury Showcase</strong>
                <p>Live remote demo & Q&A defense before the international jury panel on Day 2.</p>
              </div>
            </div>
          </div>

          <div class="mode-footer-meta">
            <span class="venue-tag">💻 Mode: Online Video Conference (Zero travel required)</span>
          </div>
        </div>
      </div>

      <!-- Quick CTA -->
      <div class="how-cta-strip">
        <p>Ready to join? Both domestic and international teams register through the unified portal:</p>
        <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-md shadow-gold">
          Submit Your Registration &rarr;
        </a>
      </div>
    </div>
  `;

  setupParticipationMode(section);

  return section;
}

function setupParticipationMode(section: HTMLElement): void {
  const cardIndia = section.querySelector('#mode-card-india') as HTMLElement;
  const cardIntl = section.querySelector('#mode-card-intl') as HTMLElement;

  const update = (audience: Audience) => {
    if (audience === 'india') {
      cardIndia?.classList.add('active-focus');
      cardIntl?.classList.remove('active-focus');
    } else {
      cardIntl?.classList.add('active-focus');
      cardIndia?.classList.remove('active-focus');
    }
  };

  appState.subscribe(update);
}
