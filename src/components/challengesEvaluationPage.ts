/* ==========================================================================
   SparkX 3.0 — Dedicated Program Tracks, Challenges & Evaluation Portal
   Comprehensive 3-tab portal containing complete challenge specifications,
   engineering modules, jury evaluation rubric, and event execution plan.
   ========================================================================== */

import {
  TRACK_DETAILS,
  CHALLENGES,
  PRIZE_TABLE_DATA,
  EVENT_EXECUTION_PLAN,
  EVALUATION_RUBRIC_CRITERIA,
  SPECIAL_OPPORTUNITIES,
  EVENT_DETAILS
} from '../data/content';
import { analytics } from '../utils/analytics';

export type PortalTab = 'tracks' | 'challenges' | 'evaluation';

export function renderChallengesEvaluationPage(
  activeTab: PortalTab = 'tracks',
  targetChallengeId?: string
): HTMLElement {
  const container = document.createElement('div');
  container.className = 'sparkx-detail-portal';
  container.id = 'challenges-detail-portal';

  analytics.track('Navigation', 'Challenges Detail Portal Viewed', activeTab);

  container.innerHTML = `
    <!-- Top Sticky Bar -->
    <header class="portal-topbar">
      <div class="container portal-topbar-inner">
        <a href="#" class="portal-brand" id="portal-brand-link" aria-label="Return to Homepage">
          <div class="brand-logo-box">
            <img src="/images/galgotias%20univeristy.png" alt="Galgotias University" class="navbar-uni-logo" />
            <div class="brand-logo-divider"></div>
            <img src="/images/sparkx.png" alt="SparkX 3.0" class="navbar-sparkx-logo" />
          </div>
          <div class="portal-brand-text">
            <span class="portal-brand-title">SparkX 3.0</span>
            <span class="portal-brand-sub">Beyond Boundaries Portal</span>
          </div>
        </a>

        <!-- 3 Portal Switcher Tabs -->
        <nav class="portal-tabs-nav" role="tablist" aria-label="Portal Navigation">
          <button type="button" role="tab" class="portal-tab-btn ${activeTab === 'tracks' ? 'active' : ''}" id="tab-btn-tracks" data-tab="tracks">
            <span>🎓 Program Challenges</span>
          </button>
          <button type="button" role="tab" class="portal-tab-btn ${activeTab === 'challenges' ? 'active' : ''}" id="tab-btn-challenges" data-tab="challenges">
            <span>🎯 AI Problem Domains</span>
          </button>
          <button type="button" role="tab" class="portal-tab-btn ${activeTab === 'evaluation' ? 'active' : ''}" id="tab-btn-evaluation" data-tab="evaluation">
            <span>⚖️ Evaluation & Schedule</span>
          </button>
        </nav>

        <div class="portal-actions">
          <a href="#" class="btn btn-secondary btn-sm" id="portal-back-home">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Home</span>
          </a>
          <a href="#/register" class="btn btn-primary btn-sm">
            <span>Register Now</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="portal-main">
      <div class="container">

        <!-- ============================================================ -->
        <!-- TAB 1: PROGRAM CHALLENGES -->
        <!-- ============================================================ -->
        <section id="pane-tracks" class="portal-tab-pane ${activeTab === 'tracks' ? 'active' : ''}" role="tabpanel">
          <div class="portal-hero-header">
            <span class="portal-hero-badge badge-gold">Official Curriculum & Challenges</span>
            <h1 class="portal-hero-title">SparkX 3.0 Program Challenges & Specifications</h1>
            <p class="portal-hero-lead">
              Structured innovation pathways for 7th Semester capstones (Pro), 3rd & 5th Semester products (Novel), 
              and the Global 30-Day AI Innovation Challenge.
            </p>
          </div>

          <div class="detailed-tracks-list">
            ${TRACK_DETAILS.map((t) => `
              <article class="detailed-track-card track-${t.id}" id="track-${t.id}">
                <div class="track-detail-header">
                  <div>
                    <div class="track-detail-title-wrap">
                      <span class="track-sec-number">Track ${t.sectionNumber}</span>
                      <h2 class="track-detail-title">${t.name}</h2>
                    </div>
                    <div class="track-detail-sub">${t.primaryFocus}</div>
                  </div>
                  <span class="track-eligibility-badge">${t.audienceBadge}</span>
                </div>

                <p class="track-description-full">${t.description}</p>

                <!-- Framework Bar -->
                ${t.framework ? `
                  <div class="track-framework-bar">
                    <div>
                      <span class="framework-col-label">Target Group</span>
                      <span class="framework-col-val">${t.targetGroup}</span>
                    </div>
                    <div>
                      <span class="framework-col-label">Team Size</span>
                      <span class="framework-col-val">${t.framework.teamSize}</span>
                    </div>
                    <div>
                      <span class="framework-col-label">Exhibition Mode</span>
                      <span class="framework-col-val">${t.framework.mode}</span>
                    </div>
                    <div>
                      <span class="framework-col-label">Tech Freedom</span>
                      <span class="framework-col-val">Full Stack / AI Choice</span>
                    </div>
                  </div>
                ` : ''}

                <!-- Two Column Details -->
                <div class="track-spec-columns">
                  <div class="track-spec-box">
                    <div class="track-spec-box-title">
                      <span>🎯</span>
                      <span>Evaluation Focus Points</span>
                    </div>
                    <ul class="track-checklist">
                      ${t.highlights.map(h => `
                        <li>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          <span>${h}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <div class="track-spec-box">
                    <div class="track-spec-box-title">
                      <span>📦</span>
                      <span>Mandatory Deliverables</span>
                    </div>
                    <ul class="track-checklist">
                      ${t.deliverables.map(d => `
                        <li>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                          <span>${d}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

                <!-- Bottom Footer with Prizes & Action -->
                <div class="track-card-bottom">
                  <div class="track-prizes-pill-group">
                    <span class="font-bold text-sm text-slate-600">Awards:</span>
                    <span class="track-prize-badge badge-gold-pill">1st: ${t.prizes.india.first}</span>
                    <span class="track-prize-badge badge-gold-pill">2nd: ${t.prizes.india.second}</span>
                    <span class="track-prize-badge badge-gold-pill">3rd: ${t.prizes.india.third}</span>
                    ${t.prizes.abroad ? `
                      <span class="track-prize-badge badge-blue-pill">Global 1st: ${t.prizes.abroad.first}</span>
                      <span class="track-prize-badge badge-blue-pill">Global 2nd: ${t.prizes.abroad.second}</span>
                      <span class="track-prize-badge badge-blue-pill">Global 3rd: ${t.prizes.abroad.third}</span>
                    ` : ''}
                  </div>

                  <a href="#/register" class="btn btn-primary btn-sm">
                    <span>Register for Track ${t.sectionNumber}</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </article>
            `).join('')}
          </div>

          <!-- Consolidated Prize Table -->
          <div class="ch-prize-summary-box">
            <div class="prize-summary-header">
              <div class="prize-summary-title">
                <span>🏆</span>
                <span>Program Challenges & Prize Structure Summary</span>
              </div>
            </div>
            <div class="prize-table-responsive">
              <table class="ch-overview-prize-table">
                <thead>
                  <tr>
                    <th>Challenge</th>
                    <th>Target Group</th>
                    <th>Expected Output</th>
                    <th>1st Prize</th>
                    <th>2nd Prize</th>
                    <th>3rd Prize</th>
                    <th>Abroad / Global</th>
                  </tr>
                </thead>
                <tbody>
                  ${PRIZE_TABLE_DATA.map((row) => `
                    <tr>
                      <td><strong>${row.track}</strong></td>
                      <td>${row.targetGroup}</td>
                      <td>${row.expectedOutput}</td>
                      <td class="prize-cell-1st">${row.prizeIndia.first}</td>
                      <td class="prize-cell-2nd">${row.prizeIndia.second}</td>
                      <td class="prize-cell-3rd">${row.prizeIndia.third}</td>
                      <td>
                        ${row.prizeAbroad 
                          ? `<span class="badge-blue font-bold">${row.prizeAbroad.first} / ${row.prizeAbroad.second} / ${row.prizeAbroad.third}</span>` 
                          : `<span class="text-dim">N/A (Indian Only)</span>`}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ============================================================ -->
        <!-- TAB 2: AI CHALLENGE DOMAINS (ANNEXURE) -->
        <!-- ============================================================ -->
        <section id="pane-challenges" class="portal-tab-pane ${activeTab === 'challenges' ? 'active' : ''}" role="tabpanel">
          <div class="portal-hero-header">
            <span class="portal-hero-badge badge-blue">30-Day Innovation Challenge • Annexure Blueprints</span>
            <h1 class="portal-hero-title">AI Challenge Problem Statements</h1>
            <p class="portal-hero-lead">
              Four predefined mission-critical engineering challenges for the 30-Day Sprint (01 – 30 Oct 2026).
              Teams select one domain and build an end-to-end working prototype with integrated intelligence.
            </p>
          </div>

          <div class="challenges-detail-list">
            ${CHALLENGES.map((ch) => `
              <article class="challenge-detail-fullcard" id="challenge-${ch.id}">
                <div class="ch-detail-header">
                  <div class="ch-detail-meta">
                    <span class="ch-detail-num">${ch.number}</span>
                    <span class="ch-ov-pill pill-blue">${ch.category}</span>
                  </div>
                  <h2 class="ch-detail-title">${ch.title}</h2>
                  <div class="ch-detail-tagline">${ch.tagline}</div>
                  <p class="ch-detail-desc">${ch.description}</p>
                </div>

                <!-- Suggested Tech Stack -->
                <div class="ch-stack-row">
                  <span class="stack-label">Suggested Stack:</span>
                  ${ch.suggestedStack.map(s => `<span class="stack-pill">${s}</span>`).join('')}
                </div>

                <!-- Engineering Modules Grid -->
                <h3 class="font-extrabold text-base text-slate-800 mb-3 flex items-center gap-2">
                  <span>⚡</span>
                  <span>Core Engineering Modules</span>
                </h3>
                <div class="ch-modules-grid">
                  ${ch.modules.map((m, mIdx) => `
                    <div class="module-box">
                      <div class="module-box-title">
                        <span class="mod-num">Module ${mIdx + 1}:</span>
                        <span>${m.title}</span>
                      </div>
                      <ul class="module-items-list">
                        ${m.items.map(item => `<li>${item}</li>`).join('')}
                      </ul>
                    </div>
                  `).join('')}
                </div>

                <!-- Expected Outputs -->
                <div class="expected-outputs-box">
                  <div class="expected-outputs-title">
                    <span>✅</span>
                    <span>Expected System Outputs & Verified Deliverables</span>
                  </div>
                  <ul class="expected-outputs-list">
                    ${ch.expectedOutput.map(out => `
                      <li>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>${out}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <!-- Card Actions -->
                <div class="track-card-bottom">
                  <div class="track-prizes-pill-group">
                    <span class="font-bold text-sm text-slate-600">Sprint Awards:</span>
                    <span class="track-prize-badge badge-gold-pill">1st: ₹10,000 / USD 150</span>
                    <span class="track-prize-badge badge-gold-pill">2nd: ₹8,000 / USD 100</span>
                    <span class="track-prize-badge badge-gold-pill">3rd: ₹5,000 / USD 80</span>
                  </div>

                  <a href="#/register" class="btn btn-primary btn-sm">
                    <span>Register for Challenge ${ch.number}</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </article>
            `).join('')}
          </div>
        </section>

        <!-- ============================================================ -->
        <!-- TAB 3: EVALUATION & EVENT PLAN -->
        <!-- ============================================================ -->
        <section id="pane-evaluation" class="portal-tab-pane ${activeTab === 'evaluation' ? 'active' : ''}" role="tabpanel">
          <div class="portal-hero-header">
            <span class="portal-hero-badge badge-emerald">Jury Evaluation Framework & Event Schedule</span>
            <h1 class="portal-hero-title">Evaluation Rubric & 2-Day Event Execution Plan</h1>
            <p class="portal-hero-lead">
              Transparent assessment parameters, grand exhibition timeline (25 & 26 November 2026), 
              and special patent, publication, and incubation opportunities.
            </p>
          </div>

          <!-- Section 4: Event Execution Plan -->
          <div class="event-plan-section">
            <h2 class="font-black text-xl text-slate-900 mb-4 flex items-center gap-2">
              <span>📅</span>
              <span>Section 4: Event Execution Plan (25 & 26 November 2026)</span>
            </h2>
            <div class="event-days-grid">
              ${EVENT_EXECUTION_PLAN.map(day => `
                <div class="event-day-card">
                  <div class="event-day-card-head">
                    <span class="event-day-badge">${day.day}</span>
                    <span class="event-day-date">${day.date}</span>
                  </div>
                  <h3 class="event-day-title">${day.title}</h3>

                  <div class="event-sessions-list">
                    ${day.sessions.map(s => `
                      <div class="session-item">
                        <div class="session-time-mode">
                          <span>${s.time || ''}</span>
                          <span class="text-blue-600 font-bold">${s.mode}</span>
                        </div>
                        <div class="session-title">${s.title}</div>
                        <p class="session-desc">${s.desc}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Section 4.2: Evaluation Rubric -->
          <div class="mt-12 mb-10">
            <h2 class="font-black text-xl text-slate-900 mb-4 flex items-center gap-2">
              <span>⚖️</span>
              <span>Jury Evaluation Rubric & Weightage Distribution</span>
            </h2>
            <div class="eval-criteria-grid">
              ${EVALUATION_RUBRIC_CRITERIA.map(c => `
                <div class="eval-criterion-card">
                  <div class="eval-crit-header">
                    <h3 class="eval-crit-title">${c.title}</h3>
                    <span class="eval-crit-weight">${c.weight}</span>
                  </div>
                  <p class="eval-crit-desc">${c.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Section 6: Special Opportunities (7th Sem / Pro Track) -->
          <div class="mt-12 mb-10">
            <div class="section-title-area text-center mb-6">
              <span class="section-badge badge-gold">Final-Year Value Addition</span>
              <h2 class="section-heading">Special Opportunities for 7th Semester (Pro Track)</h2>
              <p class="section-subheading">
                Transform your capstone project into published research, protected intellectual property, and venture-backed startups.
              </p>
            </div>
            <div class="special-opps-grid">
              ${SPECIAL_OPPORTUNITIES.map(op => `
                <div class="special-opp-card">
                  <div class="special-opp-icon">${op.icon}</div>
                  <span class="special-opp-tag">${op.tag}</span>
                  <h3 class="special-opp-title">${op.title}</h3>
                  <p class="special-opp-desc">${op.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

      </div>
    </main>

    <!-- Bottom Footer Navigation -->
    <footer class="ch-eval-bottom-bar">
      <div class="container text-center">
        <p class="font-bold text-slate-700">SparkX 3.0 Beyond Boundaries • Galgotias University</p>
        <p class="text-xs text-slate-500 mt-1">${EVENT_DETAILS.department}, ${EVENT_DETAILS.location}</p>
        <div class="ch-eval-bottom-links">
          <a href="#" class="bottom-home-link">← Return to SparkX 3.0 Homepage</a>
          <span class="text-slate-300">•</span>
          <a href="#/register">Registration Portal →</a>
        </div>
      </div>
    </footer>
  `;

  setupPortalTabSwitching(container, activeTab, targetChallengeId);

  return container;
}

function setupPortalTabSwitching(
  container: HTMLElement,
  currentTab: PortalTab,
  targetChallengeId?: string
): void {
  const tabBtnTracks = container.querySelector('#tab-btn-tracks') as HTMLButtonElement;
  const tabBtnChallenges = container.querySelector('#tab-btn-challenges') as HTMLButtonElement;
  const tabBtnEvaluation = container.querySelector('#tab-btn-evaluation') as HTMLButtonElement;

  const paneTracks = container.querySelector('#pane-tracks') as HTMLElement;
  const paneChallenges = container.querySelector('#pane-challenges') as HTMLElement;
  const paneEvaluation = container.querySelector('#pane-evaluation') as HTMLElement;

  function switchTab(tab: PortalTab, shouldScroll = true) {
    // Reset buttons
    tabBtnTracks?.classList.toggle('active', tab === 'tracks');
    tabBtnChallenges?.classList.toggle('active', tab === 'challenges');
    tabBtnEvaluation?.classList.toggle('active', tab === 'evaluation');

    // Reset panes
    paneTracks?.classList.toggle('active', tab === 'tracks');
    paneChallenges?.classList.toggle('active', tab === 'challenges');
    paneEvaluation?.classList.toggle('active', tab === 'evaluation');

    // Update URL hash without causing full reload if already on portal
    if (tab === 'tracks') {
      window.location.hash = '#/tracks';
    } else if (tab === 'challenges') {
      window.location.hash = '#/challenges';
    } else if (tab === 'evaluation') {
      window.location.hash = '#/evaluation';
    }

    analytics.track('Navigation', 'Portal Tab Switched', tab);

    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  tabBtnTracks?.addEventListener('click', () => switchTab('tracks'));
  tabBtnChallenges?.addEventListener('click', () => switchTab('challenges'));
  tabBtnEvaluation?.addEventListener('click', () => switchTab('evaluation'));

  // Home links navigation
  const homeLinks = container.querySelectorAll('#portal-brand-link, #portal-back-home, .bottom-home-link');
  homeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Handle targetChallengeId deep-linking
  if (targetChallengeId && currentTab === 'challenges') {
    setTimeout(() => {
      const el = container.querySelector(`#challenge-${targetChallengeId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('highlighted');
        setTimeout(() => el.classList.remove('highlighted'), 3000);
      }
    }, 150);
  }
}
