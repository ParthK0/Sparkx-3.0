import { appState } from '../state';
import { CHALLENGES } from '../data/content';
import { Challenge, Audience } from '../types';

export function renderChallenges(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'challenges-section section-padding';
  section.id = 'challenges';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center" id="challenges-title-area">
        <span class="section-badge badge-gold" id="ch-badge">🇮🇳 National 30-Day Sprint</span>
        <h2 class="section-heading" id="ch-heading">AI Challenge Problem Domains</h2>
        <p class="section-subheading" id="ch-subheading">
          Four mission-critical problem domains. Build end-to-end deployable systems evaluated live on campus at Galgotias University.
        </p>
      </div>

      <div class="challenge-framework-summary">
        <div class="framework-metric">
          <span class="metric-label">Team Size</span>
          <span class="metric-val">1 – 4 Students</span>
          <span class="metric-sub">(Interdisciplinary welcome)</span>
        </div>
        <div class="framework-metric">
          <span class="metric-label">Sprint Window</span>
          <span class="metric-val">15 Oct – 15 Nov 2026</span>
          <span class="metric-sub">30 Days Intensive AI Build</span>
        </div>
        <div class="framework-metric">
          <span class="metric-label">Evaluation Mode</span>
          <span class="metric-val" id="ch-eval-mode">Offline (Galgotias Campus)</span>
          <span class="metric-sub" id="ch-eval-sub">Live Expo Presentation</span>
        </div>
        <div class="framework-metric">
          <span class="metric-label">Core Deliverables</span>
          <span class="metric-val">Prototype + Code + Manual</span>
          <span class="metric-sub">Working GitHub Repository</span>
        </div>
      </div>

      <div class="challenges-grid">
        ${CHALLENGES.map((ch) => renderChallengeCard(ch)).join('')}
      </div>
    </div>

    <!-- Challenge Deep-Dive Modal Container -->
    <div class="challenge-modal-backdrop" id="challenge-modal-backdrop" aria-hidden="true">
      <div class="challenge-modal-card" id="challenge-modal-card" role="dialog" aria-modal="true">
        <button type="button" class="modal-close-btn" id="modal-close-btn" aria-label="Close dialog">&times;</button>
        <div class="modal-dynamic-content" id="modal-content">
          <!-- Populated on click -->
        </div>
      </div>
    </div>
  `;

  setupChallengesModal(section);
  setupChallengesAudience(section);

  return section;
}

function setupChallengesAudience(section: HTMLElement): void {
  const badge = section.querySelector('#ch-badge') as HTMLElement;
  const heading = section.querySelector('#ch-heading') as HTMLElement;
  const subheading = section.querySelector('#ch-subheading') as HTMLElement;
  const evalMode = section.querySelector('#ch-eval-mode') as HTMLElement;
  const evalSub = section.querySelector('#ch-eval-sub') as HTMLElement;

  const update = (audience: Audience) => {
    if (audience === 'india') {
      badge.textContent = '🇮🇳 National 30-Day Sprint';
      badge.className = 'section-badge badge-gold';
      heading.textContent = 'National AI Challenge Problem Domains';
      subheading.textContent = 'Four mission-critical problem domains for Indian university teams. Construct deployable prototypes showcased on-campus at Galgotias University.';
      if (evalMode) evalMode.textContent = 'Offline (Galgotias Campus)';
      if (evalSub) evalSub.textContent = 'Physical Exhibition Stalls';
    } else {
      badge.textContent = '🌍 International 30-Day AI Challenge';
      badge.className = 'section-badge badge-blue';
      heading.textContent = 'Global AI Challenge Problem Domains';
      subheading.textContent = 'Four mission-critical problem domains for international participants. 100% online submission with virtual jury demonstration.';
      if (evalMode) evalMode.textContent = '100% Online Virtual Demo';
      if (evalSub) evalSub.textContent = 'Remote Jury Video Defense';
    }
  };

  appState.subscribe(update);
}

function renderChallengeCard(ch: Challenge): string {
  return `
    <div class="challenge-card" data-challenge-id="${ch.id}">
      <div class="card-glow-edge"></div>
      <div class="challenge-card-top">
        <div class="challenge-meta">
          <span class="ch-number">${ch.number}</span>
          <span class="ch-category-pill">${ch.category}</span>
        </div>
        <div class="ch-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>
        </div>
      </div>

      <h3 class="ch-title">${ch.title}</h3>
      <p class="ch-tagline">${ch.tagline}</p>
      <p class="ch-desc">${ch.description}</p>

      <div class="ch-modules-preview">
        <span class="modules-count-tag">${ch.modules.length} Specialized AI Modules:</span>
        <ul class="preview-bullets">
          ${ch.modules.slice(0, 3).map(m => `<li>✦ ${m.title}</li>`).join('')}
          ${ch.modules.length > 3 ? `<li class="more-indicator">+ ${ch.modules.length - 3} more modules</li>` : ''}
        </ul>
      </div>

      <div class="ch-card-actions">
        <button type="button" class="btn btn-primary btn-sm view-blueprint-btn w-full" data-id="${ch.id}">
          <span>View Challenge Blueprint</span>
          <span class="arrow-anim">&rarr;</span>
        </button>
      </div>
    </div>
  `;
}

function setupChallengesModal(section: HTMLElement): void {
  const backdrop = section.querySelector('#challenge-modal-backdrop') as HTMLElement;
  const content = section.querySelector('#modal-content') as HTMLElement;
  const closeBtn = section.querySelector('#modal-close-btn') as HTMLElement;
  const viewBtns = section.querySelectorAll('.view-blueprint-btn');

  const openModal = (id: string) => {
    const ch = CHALLENGES.find(c => c.id === id);
    if (!ch) return;

    content.innerHTML = `
      <div class="modal-header-strip">
        <div class="modal-num-badge">Challenge ${ch.number}</div>
        <span class="modal-category-tag">${ch.category}</span>
      </div>

      <h2 class="modal-title">${ch.title}</h2>
      <p class="modal-tagline">${ch.tagline}</p>
      
      <div class="modal-section-block">
        <h4 class="modal-subheading">Problem Scope & Mission</h4>
        <p class="modal-body-p">${ch.description}</p>
      </div>

      <div class="modal-section-block">
        <h4 class="modal-subheading">Architecture & Core AI Modules (${ch.modules.length})</h4>
        <div class="modal-modules-grid">
          ${ch.modules.map(mod => `
            <div class="modal-module-item">
              <h5 class="module-item-title">${mod.title}</h5>
              <ul class="module-bullets">
                ${mod.items.map(it => `<li>${it}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="modal-section-block">
        <h4 class="modal-subheading">Mandatory Expected Outputs</h4>
        <ul class="modal-outputs-list">
          ${ch.expectedOutput.map(out => `<li><strong>✓</strong> ${out}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section-block">
        <h4 class="modal-subheading">Recommended Tech Stack & Tooling</h4>
        <div class="modal-stack-tags">
          ${ch.suggestedStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>

      <div class="modal-cta-footer">
        <button type="button" class="btn btn-primary btn-lg" id="modal-close-action">
          Close Blueprint
        </button>
      </div>
    `;

    backdrop.classList.add('visible');
    document.body.style.overflow = 'hidden';

    // Hook close action inside modal
    content.querySelector('#modal-close-action')?.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    backdrop.classList.remove('visible');
    document.body.style.overflow = '';
  };

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
      if (id) openModal(id);
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('visible')) {
      closeModal();
    }
  });
}
