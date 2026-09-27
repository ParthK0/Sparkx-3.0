/* ==========================================================================
   SparkX 3.0 — Challenges & Program Tracks Overview Component
   Lightweight, highly-scannable overview section for the homepage.
   Detailed content (modules, full rubrics, technical stack) lives in the
   dedicated challenges portal (#/challenges).
   ========================================================================== */

import { appState } from '../state';
import { TRACK_DETAILS, CHALLENGES, PRIZE_TABLE_DATA } from '../data/content';
import { Audience } from '../types';

export function renderChallengesOverview(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'challenges-overview-section section-padding';
  section.id = 'challenges';

  section.innerHTML = `
    <div class="container">
      <!-- Section Header -->
      <div class="section-title-area text-center challenges-overview-header" id="ch-ov-header">
        <!-- Rendered dynamically based on audience -->
      </div>

      <!-- Quick Metrics Bar -->
      <div class="ch-overview-metrics">
        <div class="ch-metric-item">
          <span class="ch-metric-label">Team Structure</span>
          <span class="ch-metric-value">1 – 4 Students</span>
          <span class="ch-metric-sub">Interdisciplinary Welcome</span>
        </div>
        <div class="ch-metric-item">
          <span class="ch-metric-label">Sprint Timeline</span>
          <span class="ch-metric-value">01 – 30 Oct 2026</span>
          <span class="ch-metric-sub">30-Day Build Window</span>
        </div>
        <div class="ch-metric-item">
          <span class="ch-metric-label">Showcase & Awards</span>
          <span class="ch-metric-value">25 & 26 Nov 2026</span>
          <span class="ch-metric-sub" id="ch-ov-eval-mode">Galgotias Campus / Virtual</span>
        </div>
        <div class="ch-metric-item">
          <span class="ch-metric-label">Core Deliverables</span>
          <span class="ch-metric-value">Prototype + Code + Manual</span>
          <span class="ch-metric-sub">Verified GitHub Repo</span>
        </div>
      </div>

      <!-- Compact Cards Grid -->
      <div class="ch-overview-grid" id="ch-ov-grid">
        <!-- Populated dynamically -->
      </div>

      <!-- Consolidated Prize Summary Strip -->
      <div class="ch-prize-summary-box">
        <div class="prize-summary-header">
          <div class="prize-summary-title">
            <span>🏆</span>
            <span>Program Challenges & Prize Structure Summary</span>
          </div>
          <a href="#/challenges" class="btn btn-outline-theme btn-sm">
            <span>Full Breakdown</span>
            <span>&rarr;</span>
          </a>
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
                <th>Global Prize (USD)</th>
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
                      : `<span class="text-dim">N/A (Indian Track)</span>`}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Dedicated Portal Callout Banner -->
      <div class="ch-portal-callout">
        <div class="ch-portal-callout-text">
          <span class="badge-gold uppercase tracking-wider text-xs font-bold px-2 py-0.5 rounded inline-block mb-2">Dedicated Portal</span>
          <h4>Detailed Challenge Blueprints & Evaluation Rubrics</h4>
          <p>Access exhaustive engineering modules, suggested architectures, scoring rubrics, and Day 1 & Day 2 exhibition schedules.</p>
        </div>
        <div class="ch-portal-callout-actions">
          <a href="#/challenges" class="btn btn-primary btn-sm">
            <span>Explore Blueprints</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#/evaluation" class="btn btn-secondary btn-sm">
            <span>Jury Rubric</span>
          </a>
        </div>
      </div>
    </div>
  `;

  setupOverviewInteractivity(section);

  return section;
}

function setupOverviewInteractivity(section: HTMLElement): void {
  const header = section.querySelector('#ch-ov-header') as HTMLElement;
  const grid = section.querySelector('#ch-ov-grid') as HTMLElement;
  const evalMode = section.querySelector('#ch-ov-eval-mode') as HTMLElement;

  const renderForAudience = (audience: Audience) => {
    if (audience === 'india') {
      // Indian Header
      header.innerHTML = `
        <span class="section-badge badge-gold">🇮🇳 Indian Innovation Challenges</span>
        <h2 class="section-heading">Program Challenges & AI Overview</h2>
        <p class="section-subheading">
          Indian students can participate in SparkX 3.0 (7th Semester Pro, 3rd & 5th Semester Novel) and the National 30-Day Innovation Sprint.
        </p>
      `;

      if (evalMode) {
        evalMode.textContent = 'Offline Expo (Galgotias Campus)';
      }

      grid.className = 'ch-overview-grid';
      grid.innerHTML = TRACK_DETAILS.map((track, idx) => {
        const accentClass = idx === 0 ? 'card-accent-gold' : idx === 1 ? 'card-accent-emerald' : 'card-accent-blue';
        const pillClass = idx === 0 ? 'pill-gold' : idx === 1 ? 'pill-emerald' : 'pill-blue';

        return `
          <div class="ch-ov-card ${accentClass}">
            <div class="ch-ov-card-head">
              <span class="ch-ov-number">${track.sectionNumber}</span>
              <span class="ch-ov-pill ${pillClass}">${track.targetGroup}</span>
            </div>

            <h3 class="ch-ov-title">${track.name}</h3>
            <div class="ch-ov-tagline">${track.primaryFocus}</div>
            <p class="ch-ov-desc">${track.description}</p>

            <ul class="ch-ov-highlights">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Output:</strong> ${track.expectedOutput.split(',')[0]}</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Deliverables:</strong> ${track.deliverables.length} core milestone items</span>
              </li>
            </ul>

            <div class="ch-ov-prize-strip">
              <span class="prize-strip-label">Prize Pool</span>
              <span class="prize-strip-val">1st: ${track.prizes.india.first} · 2nd: ${track.prizes.india.second}</span>
            </div>

            <div class="ch-ov-footer">
              <a href="#/challenges" class="btn btn-secondary w-full">
                <span>View Challenge Specifications</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        `;
      }).join('');

    } else {
      // International Header
      header.innerHTML = `
        <span class="section-badge badge-blue">🌍 Global 30-Day Innovation Challenge</span>
        <h2 class="section-heading">4 Mission-Critical AI Problem Domains</h2>
        <p class="section-subheading">
          Open to students worldwide. Build functional AI prototypes 100% virtually across 4 predefined domain blueprints.
        </p>
      `;

      if (evalMode) {
        evalMode.textContent = '100% Virtual International Showcase';
      }

      grid.className = 'ch-overview-grid grid-4-cols';
      grid.innerHTML = CHALLENGES.map((ch, idx) => {
        const accentClasses = ['card-accent-emerald', 'card-accent-blue', 'card-accent-purple', 'card-accent-gold'];
        const pillClasses = ['pill-emerald', 'pill-blue', 'pill-purple', 'pill-gold'];

        return `
          <div class="ch-ov-card ${accentClasses[idx % accentClasses.length]}">
            <div class="ch-ov-card-head">
              <span class="ch-ov-number">${ch.number}</span>
              <span class="ch-ov-pill ${pillClasses[idx % pillClasses.length]}">${ch.category}</span>
            </div>

            <h3 class="ch-ov-title">${ch.title}</h3>
            <div class="ch-ov-tagline">${ch.tagline}</div>
            <p class="ch-ov-desc">${ch.description}</p>

            <ul class="ch-ov-highlights">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>${ch.modules.length} Core Modules:</strong> ${ch.modules.map(m => m.title).slice(0, 2).join(', ')}...</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Stack:</strong> ${ch.suggestedStack.slice(0, 3).join(' • ')}</span>
              </li>
            </ul>

            <div class="ch-ov-prize-strip">
              <span class="prize-strip-label">Global Awards</span>
              <span class="prize-strip-val">1st: USD 150 · 2nd: USD 100 · 3rd: USD 80</span>
            </div>

            <div class="ch-ov-footer">
              <a href="#/challenges/${ch.id}" class="btn btn-primary w-full">
                <span>View Full Blueprint</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        `;
      }).join('');
    }
  };

  // Initial render with current state
  renderForAudience(appState.getAudience());

  // Listen for audience changes
  appState.subscribe((audience) => {
    renderForAudience(audience);
  });
}
