/* ==========================================================================
   SparkX 3.0 — Why Participate Section
   Persuasive, student-centric value proposition highlighting real outcomes:
   prototypes, mentorship, global showcase, portfolio, and research/patents.
   ========================================================================== */

import { EVENT_DETAILS } from '../data/content';
import { appState } from '../state';
import { Audience } from '../types';

export function renderWhyParticipate(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'why-participate-section section-padding';
  section.id = 'why-participate';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center" id="why-title-area">
        <!-- Injected strictly based on active audience -->
      </div>

      <div class="why-grid" id="why-grid">
        <!-- Dynamically rendered based on active audience -->
      </div>

      <!-- Call to Action Banner -->
      <div class="why-cta-box">
        <div class="why-cta-content">
          <h3>Ready to start building?</h3>
          <p>Registration is free and open to all undergraduate and postgraduate engineering students.</p>
        </div>
        <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
          <span>Register Your Team</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `;

  setupWhyParticipateSegregation(section);

  return section;
}

function setupWhyParticipateSegregation(section: HTMLElement): void {
  const titleArea = section.querySelector('#why-title-area') as HTMLElement;
  const grid = section.querySelector('#why-grid') as HTMLElement;

  const update = (audience: Audience) => {
    const isIndian = audience === 'india';

    if (isIndian) {
      titleArea.innerHTML = `
        <span class="section-badge badge-gold">🇮🇳 Indian Student Benefits</span>
        <h2 class="section-heading">Why Join SparkX 3.0?</h2>
        <p class="section-subheading">
          Move beyond slide decks. Build deployable hardware/software prototypes with on-campus stalls, faculty mentorship, and institutional incubation.
        </p>
      `;

      grid.innerHTML = `
        <!-- Benefit 1 -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">Build Real Systems</h3>
            <p class="why-desc">
              Move beyond presentations. You will architect, code, and deploy a functioning software application or hardware prototype.
            </p>
          </div>
        </div>

        <!-- Benefit 2 -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">Work With Faculty Mentors</h3>
            <p class="why-desc">
              Receive hands-on technical guidance and architecture reviews from university faculty, industry practitioners, and AI leads.
            </p>
          </div>
        </div>

        <!-- Benefit 3 (Strictly Indian) -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">On-Campus Grand Showcase</h3>
            <p class="why-desc">
              Demonstrate your hardware/software prototype live at Galgotias University campus before industry judges and academic leaders on 25–26 November.
            </p>
          </div>
        </div>

        <!-- Benefit 4 -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">Build Your Portfolio</h3>
            <p class="why-desc">
              Graduate with a production-quality project, live demo link, and verified IEEE/institutional certificate you can showcase to employers.
            </p>
          </div>
        </div>

        <!-- Benefit 5 -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="5"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">Research & Incubation</h3>
            <p class="why-desc">
              Transform promising prototypes into co-authored research publications, patent filings, or incubation ventures supported by the Galgotias E-Cell.
            </p>
          </div>
        </div>

        <!-- Benefit 6 (Strictly Indian) -->
        <div class="why-card highlight-why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">INR 1.5+ Lakhs Prize Pool</h3>
            <p class="why-desc">
              Compete for INR 10,000 (1st), INR 8,000 (2nd), and INR 5,000 (3rd) cash awards alongside grand trophies and sponsorship for national hackathons.
            </p>
          </div>
        </div>
      `;
    } else {
      titleArea.innerHTML = `
        <span class="section-badge badge-blue">🌍 International Student Benefits</span>
        <h2 class="section-heading">Why Join the Global 30-Day Sprint?</h2>
        <p class="section-subheading">
          Compete virtually in real-world AI challenges, collaborate globally, gain Silicon Valley mentorship, and win USD cash awards.
        </p>
      `;

      grid.innerHTML = `
        <!-- Benefit 1 -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">Build Deployable AI</h3>
            <p class="why-desc">
              Tackle one of 4 predefined AI challenge tracks: Event Copilot, Career Readiness, Lab SPOC, or Campus Copilot with working code.
            </p>
          </div>
        </div>

        <!-- Benefit 2 -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">Global Mentorship</h3>
            <p class="why-desc">
              Receive guidance from international keynote advisors and Silicon Valley technology veterans throughout your sprint.
            </p>
          </div>
        </div>

        <!-- Benefit 3 (Strictly International) -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">100% Virtual Showcase</h3>
            <p class="why-desc">
              Defend your solution live via high-definition video conference before an international jury on 26 November 2026. Zero travel required.
            </p>
          </div>
        </div>

        <!-- Benefit 4 -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">Global Credential & Portfolio</h3>
            <p class="why-desc">
              Build an open-source GitHub showcase with verified international digital credentials endorsed by Galgotias University & IEEE.
            </p>
          </div>
        </div>

        <!-- Benefit 5 -->
        <div class="why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="5"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">Joint Research Opportunities</h3>
            <p class="why-desc">
              Top international projects gain opportunities for joint cross-border research publication co-authored with faculty and advisory scientists.
            </p>
          </div>
        </div>

        <!-- Benefit 6 (Strictly International) -->
        <div class="why-card highlight-why-card">
          <div class="why-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          </div>
          <div class="why-content">
            <h3 class="why-title">USD Cash Awards</h3>
            <p class="why-desc">
              Compete for USD 150 (1st), USD 100 (2nd), and USD 80 (3rd) cash awards transferred directly via international wire transfer alongside honors.
            </p>
          </div>
        </div>
      `;
    }
  };

  appState.subscribe(update);
}
