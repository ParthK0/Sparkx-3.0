/* ==========================================================================
   SparkX 3.0 — Strictly Segregated Participation Mode Component
   If Indian -> Shows ONLY On-Campus Physical Track details.
   If International -> Shows ONLY 100% Online Virtual Track details.
   ========================================================================== */

import { appState } from '../state';
import { EVENT_DETAILS } from '../data/content';
import { Audience } from '../types';

export function renderParticipationMode(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'how-it-works-section section-padding';
  section.id = 'how-it-works';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center" id="participation-title-area">
        <!-- Injected dynamically -->
      </div>

      <div class="participation-mode-single-container" id="participation-container">
        <!-- Strictly injected based on active audience -->
      </div>

      <!-- Quick CTA -->
      <div class="how-cta-strip text-center" style="margin-top: 36px;">
        <p style="margin-bottom: 12px; font-weight: 600; color: var(--text-muted);">Ready to participate in SparkX 3.0?</p>
        <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-md">
          Submit Official Registration &rarr;
        </a>
      </div>
    </div>
  `;

  setupParticipationSegregation(section);

  return section;
}

function setupParticipationSegregation(section: HTMLElement): void {
  const titleArea = section.querySelector('#participation-title-area') as HTMLElement;
  const container = section.querySelector('#participation-container') as HTMLElement;

  const update = (audience: Audience) => {
    if (audience === 'india') {
      titleArea.innerHTML = `
        <span class="section-badge badge-gold">🇮🇳 Indian Student Process</span>
        <h2 class="section-heading">How Indian Participation Works</h2>
        <p class="section-subheading">
          A physical on-campus exhibition architecture designed for students from Galgotias University and colleges across India.
        </p>
      `;

      container.innerHTML = `
        <div class="mode-card active-focus" style="max-width: 860px; margin: 0 auto;">
          <div class="mode-card-header">
            <div class="mode-icon-tag">🇮🇳</div>
            <div>
              <span class="mode-target">Participants in India</span>
              <h3 class="mode-title">On-Campus Physical Track</h3>
            </div>
            <span class="mode-pill-badge">Offline Grand Showcase</span>
          </div>

          <p class="mode-desc">
            Students submit their project proposals online, undergo institutional faculty screening, construct deployable prototypes, 
            and assemble physically at Galgotias University campus for the live multi-floor expo and jury evaluation.
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
                <p>Live physical demonstration at Galgotias University campus, Greater Noida on 25–26 November 2026.</p>
              </div>
            </div>
          </div>

          <div class="mode-footer-meta">
            <span class="venue-tag">📍 Venue: Galgotias University Campus, Greater Noida, UP, India</span>
          </div>
        </div>
      `;
    } else {
      titleArea.innerHTML = `
        <span class="section-badge badge-blue">🌍 International Participation Process</span>
        <h2 class="section-heading">How International Participation Works</h2>
        <p class="section-subheading">
          A 100% remote digital workflow enabling international students worldwide to participate without travel.
        </p>
      `;

      container.innerHTML = `
        <div class="mode-card active-focus" style="max-width: 860px; margin: 0 auto;">
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
            Zero travel or physical presence is required; project submission, code review, and jury defense happen completely digitally.
          </p>

          <div class="mode-flow-stepper">
            <div class="flow-step">
              <span class="flow-circle">1</span>
              <div class="flow-info">
                <strong>Global Registration</strong>
                <p>Submit team roster (1–4 students) and selected AI challenge track by 10 October 2026.</p>
              </div>
            </div>
            <div class="flow-step">
              <span class="flow-circle">2</span>
              <div class="flow-info">
                <strong>Digital Idea Approval</strong>
                <p>Screening feedback and project approval confirmation sent by 12 October 2026.</p>
              </div>
            </div>
            <div class="flow-step">
              <span class="flow-circle">3</span>
              <div class="flow-info">
                <strong>30-Day AI Development Sprint</strong>
                <p>15 Oct – 15 Nov 2026: Develop end-to-end AI system and host code on a public GitHub repo.</p>
              </div>
            </div>
            <div class="flow-step highlight-flow-blue">
              <span class="flow-circle">4</span>
              <div class="flow-info">
                <strong>Virtual Jury Showcase</strong>
                <p>Live remote demonstration & Q&A defense on 26 November 2026 via secure video conference.</p>
              </div>
            </div>
          </div>

          <div class="mode-footer-meta">
            <span class="venue-tag">💻 Mode: 100% Online Video Conference (Zero travel required)</span>
          </div>
        </div>
      `;
    }
  };

  appState.subscribe(update);
}
