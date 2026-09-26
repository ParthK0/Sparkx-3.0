import { FAQS } from '../data/content';
import { appState } from '../state';
import { Audience } from '../types';

export function renderFAQ(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'faq-section section-padding';
  section.id = 'faq';

  section.innerHTML = `
    <div class="container">
      <div class="faq-header text-center">
        <h2 class="faq-heading">Frequently Asked Questions</h2>
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
  if (!list) return;

  const renderItems = (audience: Audience) => {
    const allowedCategories =
      audience === 'india'
        ? ['general', 'indian', 'submission']
        : ['general', 'international', 'submission'];

    const items = FAQS.filter((f) => allowedCategories.includes(f.category));

    list.innerHTML = items
      .map(
        (item, idx) => `
        <div class="faq-item" data-index="${idx}">
          <button type="button" class="faq-question-btn" aria-expanded="false" aria-controls="faq-ans-${idx}">
            <span class="faq-q-text">${item.question}</span>
            <span class="faq-toggle-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq-answer-collapse" id="faq-ans-${idx}" role="region">
            <div class="faq-answer-inner">
              <p>${item.answer}</p>
            </div>
          </div>
        </div>
      `
      )
      .join('');

    // Attach click listeners to questions
    list.querySelectorAll('.faq-question-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item') as HTMLElement;
        const isOpen = item.classList.contains('open');

        // Close all items
        list.querySelectorAll('.faq-item').forEach((i) => {
          i.classList.remove('open');
          i.querySelector('.faq-question-btn')?.setAttribute('aria-expanded', 'false');
        });

        // Toggle clicked item
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  };

  // Initial render with current state
  renderItems(appState.getAudience());

  // Update when audience changes
  appState.subscribe((audience: Audience) => {
    renderItems(audience);
  });
}
