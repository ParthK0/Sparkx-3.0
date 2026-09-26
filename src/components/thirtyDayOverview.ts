/* ==========================================================================
   SparkX 3.0 — 30-Day Innovation Challenge Overview Component
   Lightweight, highly-scannable overview of the 4 AI problem domains.
   Displays respective prizes (both INR and USD) and participation mode.
   Deep links connect directly to the portal blueprints.
   ========================================================================== */

import { CHALLENGES } from '../data/content';

export function render30DayChallengeOverview(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'thirty-day-section section-padding';
  section.id = 'thirty-day-challenge';

  section.innerHTML = `
    <div class="container">
      <!-- Section Header -->
      <div class="section-title-area text-center">
        <span class="section-badge badge-blue">🌍 Open Category · Indian & International</span>
        <h2 class="section-heading">SparkX 3.0 — 30-Day AI Innovation Challenge</h2>
        <p class="section-subheading">
          A high-velocity innovation sprint open to undergraduate and postgraduate students from national and international institutions. Participants build functional, deployable AI prototypes across 4 predefined challenge blueprints.
        </p>
      </div>

      <!-- Participation Modes & Respective Prizes Bar -->
      <div class="td-mode-prize-bar">
        <div class="td-mode-card td-mode-india">
          <div class="td-mode-head">
            <span class="td-flag">🇮🇳</span>
            <div>
              <h4 class="td-mode-title">Indian Participants</h4>
              <span class="td-mode-sub">On-Campus Physical Prototype Expo</span>
            </div>
          </div>
          <div class="td-prizes-row">
            <span class="td-prize-pill gold">🥇 1st: ₹10,000</span>
            <span class="td-prize-pill silver">🥈 2nd: ₹8,000</span>
            <span class="td-prize-pill bronze">🥉 3rd: ₹5,000</span>
          </div>
        </div>

        <div class="td-mode-card td-mode-intl">
          <div class="td-mode-head">
            <span class="td-flag">🌍</span>
            <div>
              <h4 class="td-mode-title">International Participants</h4>
              <span class="td-mode-sub">100% Virtual Presentation & Review</span>
            </div>
          </div>
          <div class="td-prizes-row">
            <span class="td-prize-pill gold">🥇 1st: USD 150</span>
            <span class="td-prize-pill silver">🥈 2nd: USD 100</span>
            <span class="td-prize-pill bronze">🥉 3rd: USD 80</span>
          </div>
        </div>
      </div>

      <!-- 4 Problem Domain Cards Grid -->
      <div class="td-challenges-grid">
        ${CHALLENGES.map((ch, idx) => {
          const accentColors = ['blue', 'emerald', 'purple', 'amber'];
          const accent = accentColors[idx % accentColors.length];

          return `
            <div class="td-domain-card accent-${accent}" id="ch-card-${ch.id}">
              <div class="td-domain-card-head">
                <span class="td-domain-number">Domain ${ch.number}</span>
                <span class="td-domain-category badge-${accent}">${ch.category}</span>
              </div>

              <h3 class="td-domain-title">${ch.title}</h3>
              <p class="td-domain-tagline">${ch.tagline}</p>
              <p class="td-domain-desc">${ch.description}</p>

              <div class="td-domain-meta">
                <div class="td-meta-item">
                  <span class="td-meta-label">Modules:</span>
                  <span class="td-meta-val">${ch.modules.length} Core Functional Areas</span>
                </div>
                <div class="td-meta-item">
                  <span class="td-meta-label">Tech Stack:</span>
                  <span class="td-meta-val">${ch.suggestedStack.slice(0, 3).join(', ')}</span>
                </div>
              </div>

              <div class="td-domain-footer">
                <a href="#/challenges/${ch.id}" class="btn btn-outline-theme btn-sm w-full">
                  <span>View Problem Blueprint & Specs</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Portal Link Box -->
      <div class="td-portal-banner">
        <div class="td-portal-info">
          <h4>Need Exhaustive Architecture Specs & Evaluation Details?</h4>
          <p>Explore full module breakdowns, suggested API flows, jury scoring rubrics, and the 2-day showcase timeline.</p>
        </div>
        <div class="td-portal-cta">
          <a href="#/challenges" class="btn btn-primary">
            <span>Open Dedicated Challenges Portal</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  `;

  return section;
}
