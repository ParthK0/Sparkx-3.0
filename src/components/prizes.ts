import { appState } from '../state';
import { PRIZES, EVENT_DETAILS } from '../data/content';
import { Audience } from '../types';

export function renderPrizes(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'prizes-section section-padding';
  section.id = 'prizes';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge badge-gold">Honors & Recognition</span>
        <h2 class="section-heading" id="prizes-main-heading">Award Categories & Prize Pool</h2>
        <p class="section-subheading" id="prizes-main-subheading">
          Recognizing excellence across technical execution, originality, research depth, and deployable engineering.
        </p>

        <!-- Currency toggle switcher -->
        <div class="prize-currency-toggle" role="group" aria-label="Currency view">
          <button type="button" class="currency-toggle-btn active" id="btn-curr-inr">
            <span>🇮🇳 Indian Pool (INR ₹)</span>
          </button>
          <button type="button" class="currency-toggle-btn" id="btn-curr-usd">
            <span>🌍 International Pool (USD $)</span>
          </button>
        </div>
      </div>

      <div class="prizes-cards-grid" id="prizes-grid">
        <!-- Rendered dynamically -->
      </div>

      <!-- Comparison & Perks Callout Banner -->
      <div class="prizes-meta-callout" id="prizes-meta-banner">
        <!-- Injected dynamically -->
      </div>
    </div>
  `;

  setupPrizesInteractivity(section);

  return section;
}

function setupPrizesInteractivity(section: HTMLElement): void {
  const grid = section.querySelector('#prizes-grid') as HTMLElement;
  const metaBanner = section.querySelector('#prizes-meta-banner') as HTMLElement;
  const btnInr = section.querySelector('#btn-curr-inr') as HTMLButtonElement;
  const btnUsd = section.querySelector('#btn-curr-usd') as HTMLButtonElement;
  const heading = section.querySelector('#prizes-main-heading') as HTMLElement;
  const subheading = section.querySelector('#prizes-main-subheading') as HTMLElement;

  let viewCurrency: 'INR' | 'USD' = appState.getAudience() === 'india' ? 'INR' : 'USD';

  const updateDisplay = () => {
    const isIndian = viewCurrency === 'INR';

    // Update active button state
    if (isIndian) {
      btnInr.classList.add('active');
      btnUsd.classList.remove('active');
      heading.textContent = 'Indian Participant Prize Structure';
      subheading.textContent = 'Awarded to top performers in SparkX Pro, SparkX Novel, and the 30-Day Challenge.';
    } else {
      btnUsd.classList.add('active');
      btnInr.classList.remove('active');
      heading.textContent = 'International 30-Day Challenge Prize Pool';
      subheading.textContent = 'Published international awards for foreign university teams competing virtually.';
    }

    const items = isIndian ? PRIZES.indian : PRIZES.international;

    grid.innerHTML = items.map((prize, idx) => {
      const isFirst = idx === 0;
      return `
        <div class="prize-card ${isFirst ? 'prize-champion' : ''}">
          <div class="prize-medal-badge">${prize.medal}</div>
          <div class="prize-place-tag">${prize.position}</div>
          <div class="prize-amount-box">
            <span class="prize-currency-symbol">${isIndian ? '₹' : '$'}</span>
            <span class="prize-val">${isIndian ? prize.amount.replace('₹', '') : prize.amount.replace('USD ', '')}</span>
            <span class="prize-curr-tag">${isIndian ? 'INR' : 'USD'}</span>
          </div>

          <div class="prize-perks-list">
            <span class="perks-label">Included Honors & Benefits:</span>
            <ul>
              ${prize.perks.map(p => `<li><span class="gold-star">★</span> ${p}</li>`).join('')}
            </ul>
          </div>

          <div class="prize-card-footer">
            <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn ${isFirst ? 'btn-primary' : 'btn-secondary'} btn-sm w-full">
              Compete for ${prize.place}
            </a>
          </div>
        </div>
      `;
    }).join('');

    // Update meta banner
    if (isIndian) {
      metaBanner.innerHTML = `
        <div class="meta-banner-content">
          <div class="meta-banner-left">
            <span class="banner-pill">Category Scope</span>
            <h4>Prize Awarded in Each Track</h4>
            <p>The ₹10,000 / ₹8,000 / ₹5,000 prize distribution is awarded across all 3 tracks: <strong>SparkX Pro</strong>, <strong>SparkX Novel</strong>, and the <strong>30-Day Challenge</strong>.</p>
          </div>
          <div class="meta-banner-right">
            <span class="intl-ref-note">International Student Pool: USD 150 / USD 100 / USD 80</span>
          </div>
        </div>
      `;
    } else {
      metaBanner.innerHTML = `
        <div class="meta-banner-content">
          <div class="meta-banner-left">
            <span class="banner-pill badge-blue">Global Cash Prize</span>
            <h4>Direct Wire / Digital Transfer for Foreign Winners</h4>
            <p>International winners receive prize disbursal via direct international transfer alongside authenticated IEEE/institutional certificate credentials.</p>
          </div>
          <div class="meta-banner-right">
            <span class="intl-ref-note">Indian participant prize structure: ₹10,000 / ₹8,000 / ₹5,000</span>
          </div>
        </div>
      `;
    }
  };

  btnInr.addEventListener('click', () => {
    viewCurrency = 'INR';
    updateDisplay();
  });

  btnUsd.addEventListener('click', () => {
    viewCurrency = 'USD';
    updateDisplay();
  });

  appState.subscribe((audience: Audience) => {
    viewCurrency = audience === 'india' ? 'INR' : 'USD';
    updateDisplay();
  });
}
