/* ==========================================================================
   SparkX 3.0 — Dedicated Challenges & Evaluation Portal
   Separate page view that streamlines the homepage while providing an in-depth
   dedicated environment for problem statements, guidelines, and jury rubrics.
   ========================================================================== */

import { renderChallenges } from './challenges';
import { renderEvaluation } from './evaluation';
import { analytics } from '../utils/analytics';

export function renderChallengesEvaluationPage(activeTab: 'challenges' | 'evaluation' = 'challenges'): HTMLElement {
  const container = document.createElement('div');
  container.className = 'sparkx-ch-eval-page';
  container.id = 'challenges-evaluation-view';

  analytics.track('Navigation', 'Challenges & Evaluation Page Viewed', activeTab);

  container.innerHTML = `
    <!-- Top Header Bar -->
    <header class="ch-eval-topbar">
      <div class="container ch-eval-topbar-inner">
        <a href="#" class="portal-brand-link" id="ch-eval-home-brand">
          <div class="brand-logo-box">
            <img src="/images/galgotias%20univeristy.png" alt="Galgotias University" class="navbar-uni-logo" />
            <div class="brand-logo-divider"></div>
            <img src="/images/sparkx.png" alt="SparkX 3.0" class="navbar-sparkx-logo" />
          </div>
        </a>

        <!-- View Switcher Tabs -->
        <div class="ch-eval-tabs" role="tablist" aria-label="Portal Sections">
          <button type="button" role="tab" class="ch-tab-btn ${activeTab === 'challenges' ? 'active' : ''}" id="tab-challenges" data-tab="challenges">
            <span>🎯 Problem Domains</span>
          </button>
          <button type="button" role="tab" class="ch-tab-btn ${activeTab === 'evaluation' ? 'active' : ''}" id="tab-evaluation" data-tab="evaluation">
            <span>⚖️ Evaluation & Rubric</span>
          </button>
        </div>

        <div class="ch-eval-top-actions">
          <a href="#" class="btn btn-secondary btn-sm" id="ch-eval-back-home">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Page Content Container -->
    <main class="ch-eval-main-content">
      <div id="challenges-tab-content" class="tab-pane ${activeTab === 'challenges' ? 'active' : ''}">
        <!-- Render Challenges Component -->
      </div>
      <div id="evaluation-tab-content" class="tab-pane ${activeTab === 'evaluation' ? 'active' : ''}">
        <!-- Render Evaluation Component -->
      </div>
    </main>

    <!-- Bottom Footer Navigation -->
    <footer class="ch-eval-bottom-bar">
      <div class="container text-center">
        <p>SparkX 3.0 Beyond Boundaries • Galgotias University</p>
        <div class="ch-eval-bottom-links">
          <a href="#" class="bottom-home-link">← Return to SparkX 3.0 Homepage</a>
        </div>
      </div>
    </footer>
  `;

  // Mount inner components
  const chSlot = container.querySelector('#challenges-tab-content');
  const evSlot = container.querySelector('#evaluation-tab-content');

  chSlot?.appendChild(renderChallenges());
  evSlot?.appendChild(renderEvaluation());

  // Setup tab switching
  const tabChBtn = container.querySelector('#tab-challenges') as HTMLButtonElement;
  const tabEvBtn = container.querySelector('#tab-evaluation') as HTMLButtonElement;

  function switchTab(target: 'challenges' | 'evaluation') {
    if (target === 'challenges') {
      tabChBtn?.classList.add('active');
      tabEvBtn?.classList.remove('active');
      chSlot?.classList.add('active');
      evSlot?.classList.remove('active');
      window.location.hash = '#/challenges';
    } else {
      tabEvBtn?.classList.add('active');
      tabChBtn?.classList.remove('active');
      evSlot?.classList.add('active');
      chSlot?.classList.remove('active');
      window.location.hash = '#/evaluation';
    }
    analytics.track('Navigation', 'Challenges Portal Tab Switched', target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabChBtn?.addEventListener('click', () => switchTab('challenges'));
  tabEvBtn?.addEventListener('click', () => switchTab('evaluation'));

  // Home buttons
  const homeLinks = container.querySelectorAll('#ch-eval-home-brand, #ch-eval-back-home, .bottom-home-link');
  homeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  return container;
}
