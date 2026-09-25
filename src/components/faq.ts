import { FAQS } from '../data/content';
import { appState } from '../state';
import { Audience } from '../types';

export function renderFAQ(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'faq-section section-padding';
  section.id = 'faq';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge">Participant Help Center</span>
        <h2 class="section-heading">Frequently Asked Questions</h2>
        <p class="section-subheading">
          Everything you need to know about SparkX 3.0 eligibility, track selection, deliverables, and prizes.
        </p>
      </div>

      <div class="faq-controls">
        <div class="faq-search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" id="faq-search-input" placeholder="Search questions (e.g. eligibility, prizes, GitHub, dates)..." aria-label="Search FAQ" />
        </div>

        <div class="faq-filter-tabs" role="tablist">
          <button type="button" class="faq-tab active" data-category="all">All Questions</button>
          <button type="button" class="faq-tab" data-category="general">General</button>
          <button type="button" class="faq-tab" data-category="indian">🇮🇳 Indian Teams</button>
          <button type="button" class="faq-tab" data-category="international">🌍 International</button>
          <button type="button" class="faq-tab" data-category="submission">Deliverables</button>
        </div>
      </div>

      <div class="faq-accordion-list" id="faq-list">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `;

  setupFAQInteractivity(section);

  return section;
}

function setupFAQInteractivity(section: HTMLElement): void {
  const list = section.querySelector('#faq-list') as HTMLElement;
  const searchInput = section.querySelector('#faq-search-input') as HTMLInputElement;
  const tabs = section.querySelectorAll('.faq-tab');

  let activeCategory = 'all';
  let searchTerm = '';

  const renderItems = () => {
    let filtered = FAQS;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(f => f.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(f => 
        f.question.toLowerCase().includes(q) || 
        f.answer.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      list.innerHTML = `
        <div class="faq-empty-state">
          <p>No questions matched your search query "${searchTerm}".</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-reset-faq">Reset Filter</button>
        </div>
      `;
      list.querySelector('#btn-reset-faq')?.addEventListener('click', () => {
        searchTerm = '';
        searchInput.value = '';
        activeCategory = 'all';
        tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-category') === 'all'));
        renderItems();
      });
      return;
    }

    list.innerHTML = filtered.map((item, idx) => `
      <div class="faq-item" data-index="${idx}">
        <button type="button" class="faq-question-btn" aria-expanded="false">
          <span class="faq-q-text">${item.question}</span>
          <span class="faq-category-tag">${item.category.toUpperCase()}</span>
          <span class="faq-chevron">&plus;</span>
        </button>
        <div class="faq-answer-collapse">
          <div class="faq-answer-inner">
            <p>${item.answer}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Attach accordion toggles
    list.querySelectorAll('.faq-question-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item') as HTMLElement;
        const isOpen = item.classList.contains('open');

        // Close all others
        list.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          i.querySelector('.faq-question-btn')?.setAttribute('aria-expanded', 'false');
          const ch = i.querySelector('.faq-chevron');
          if (ch) ch.textContent = '+';
        });

        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          const ch = btn.querySelector('.faq-chevron');
          if (ch) ch.textContent = '−';
        }
      });
    });
  };

  // Search input listener
  searchInput?.addEventListener('input', (e) => {
    searchTerm = (e.target as HTMLInputElement).value;
    renderItems();
  });

  // Tab listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category') || 'all';
      renderItems();
    });
  });

  // Sync category with appState changes
  appState.subscribe((audience: Audience) => {
    if (audience === 'international') {
      activeCategory = 'international';
    } else {
      activeCategory = 'indian';
    }
    tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-category') === activeCategory));
    renderItems();
  });

  renderItems();
}
