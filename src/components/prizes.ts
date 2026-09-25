/* ==========================================================================
   SparkX 3.0 — Strictly Segregated Prizes Component
   If Indian is selected -> Shows ONLY Indian INR prize pool details.
   If International is selected -> Shows ONLY International USD prize pool details.
   Zero mixing between sections.
   ========================================================================== */

import { appState } from '../state';
import { PRIZES } from '../data/content';
import { Audience } from '../types';

export function renderPrizes(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'prizes-section section-padding';
  section.id = 'prizes';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge" id="prizes-badge">Honors & Recognition</span>
        <h2 class="section-heading" id="prizes-main-heading">Award Categories & Prize Pool</h2>
        <p class="section-subheading" id="prizes-main-subheading">
          Recognizing excellence across technical execution, originality, research depth, and deployable engineering.
        </p>
      </div>

      <div class="prizes-cards-grid" id="prizes-grid">
        <!-- Strictly injected based on active audience -->
      </div>

      <!-- Scope & Disbursal Information -->
      <div class="prizes-meta-callout" id="prizes-meta-banner">
        <!-- Injected strictly based on active audience -->
      </div>
    </div>
  `;

  setupPrizesSegregation(section);

  return section;
}

function setupPrizesSegregation(section: HTMLElement): void {
  const grid = section.querySelector('#prizes-grid') as HTMLElement;
  const metaBanner = section.querySelector('#prizes-meta-banner') as HTMLElement;
  const badge = section.querySelector('#prizes-badge') as HTMLElement;
  const heading = section.querySelector('#prizes-main-heading') as HTMLElement;
  const subheading = section.querySelector('#prizes-main-subheading') as HTMLElement;

  const update = (audience: Audience) => {
    const isIndian = audience === 'india';

    if (isIndian) {
      badge.textContent = '🇮🇳 Indian Student Prize Pool';
      badge.className = 'section-badge badge-gold';
      heading.textContent = 'Indian Students Award Categories & Prize Pool';
      subheading.textContent = 'Awarded to top student innovators across SparkX Pro (7th Sem), SparkX Novel (3rd/5th Sem), and the 30-Day Innovation Sprint.';

      const items = PRIZES.indian;

      grid.innerHTML = items.map((prize, idx) => {
        const isFirst = idx === 0;
        return `
          <div class="prize-card ${isFirst ? 'prize-champion' : ''}">
            <div class="prize-medal-badge">${prize.medal}</div>
            <div class="prize-place-tag">${prize.position}</div>
            <div class="prize-amount-box">
              <span class="prize-currency-symbol">₹</span>
              <span class="prize-val">${prize.amount.replace('₹', '')}</span>
              <span class="prize-curr-tag">INR</span>
            </div>

            <div class="prize-perks-list">
              <span class="perks-label">Included Honors & Benefits:</span>
              <ul>
                ${prize.perks.map(p => `<li><span class="gold-star">★</span> ${p}</li>`).join('')}
              </ul>
            </div>

          </div>
        `;
      }).join('');

      metaBanner.innerHTML = `
        <div class="meta-banner-content">
          <div class="meta-banner-left">
            <span class="banner-pill">Category Scope</span>
            <h4>Prize Distribution Across Indian Tracks</h4>
            <p>Cash prizes of <strong>₹10,000 (1st)</strong>, <strong>₹8,000 (2nd)</strong>, and <strong>₹5,000 (3rd)</strong> are distributed alongside IEEE Student Branch merit certificates, incubation acceleration, and intellectual property (patent) filing support.</p>
          </div>
        </div>
      `;
    } else {
      badge.textContent = '🌍 International Student Prize Pool';
      badge.className = 'section-badge badge-blue';
      heading.textContent = 'International Students Award Categories & Prize Pool';
      subheading.textContent = 'Awarded exclusively to foreign university teams competing virtually in the Global 30-Day Innovation Challenge.';

      const items = PRIZES.international;

      grid.innerHTML = items.map((prize, idx) => {
        const isFirst = idx === 0;
        return `
          <div class="prize-card ${isFirst ? 'prize-champion' : ''}">
            <div class="prize-medal-badge">${prize.medal}</div>
            <div class="prize-place-tag">${prize.position}</div>
            <div class="prize-amount-box">
              <span class="prize-currency-symbol">$</span>
              <span class="prize-val">${prize.amount.replace('USD ', '')}</span>
              <span class="prize-curr-tag">USD</span>
            </div>

            <div class="prize-perks-list">
              <span class="perks-label">Included Honors & Benefits:</span>
              <ul>
                ${prize.perks.map(p => `<li><span class="gold-star">★</span> ${p}</li>`).join('')}
              </ul>
            </div>

          </div>
        `;
      }).join('');

      metaBanner.innerHTML = `
        <div class="meta-banner-content">
          <div class="meta-banner-left">
            <span class="banner-pill badge-blue">Global Cash Prize</span>
            <h4>Direct Wire / Digital Transfer for Foreign Winners</h4>
            <p>International winners receive cash awards in USD (<strong>$150 / $100 / $80</strong>) via international wire transfer alongside verifiable digital IEEE/institutional credentials and global mentor endorsements.</p>
          </div>
        </div>
      `;
    }
  };

  appState.subscribe(update);
}
