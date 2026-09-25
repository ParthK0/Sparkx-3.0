import { CHALLENGES, EVENT_DETAILS } from '../data/content';
import { Challenge } from '../types';

export function renderChallenges(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'challenges-section section-padding';
  section.id = 'challenges';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge badge-blue">International 30-Day Sprint</span>
        <h2 class="section-heading">Choose Your AI Challenge Track</h2>
        <p class="section-subheading">
          Four mission-critical problem domains. Teams are challenged to build end-to-end deployable intelligence 
          spanning intuitive user interfaces, agentic pipelines, and production backend architectures.
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
          <span class="metric-val">Online (Intl) / Offline (India)</span>
          <span class="metric-sub">Live Jury Demonstration</span>
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

  return section;
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
        <button type="button" class="btn btn-secondary btn-sm view-blueprint-btn" data-id="${ch.id}">
          <span>View Challenge Blueprint</span>
          <span class="arrow-anim">&rarr;</span>
        </button>
        <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <span>Register</span>
        </a>
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
        <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg shadow-gold">
          Register Your Team for Challenge ${ch.number} &rarr;
        </a>
        <button type="button" class="btn btn-secondary btn-lg" id="modal-close-action">
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
