import { appState } from '../state';
import { TRACKS, EVENT_DETAILS } from '../data/content';
import { Audience } from '../types';

export function renderTracks(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'tracks-section section-padding';
  section.id = 'tracks';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center" id="tracks-title-area">
        <!-- Injected via update() -->
      </div>

      <div class="track-audience-filter-bar">
        <button type="button" class="filter-chip" id="filter-all">All Tracks</button>
        <button type="button" class="filter-chip" id="filter-pro">Pro (7th Sem)</button>
        <button type="button" class="filter-chip" id="filter-novel">Novel (3rd/5th Sem)</button>
        <button type="button" class="filter-chip" id="filter-30day">30-Day Challenge (Global)</button>
      </div>

      <div class="tracks-cards-grid" id="tracks-grid">
        <!-- Dynamically rendered -->
      </div>

      <!-- Interdisciplinary banner -->
      <div class="interdisciplinary-banner">
        <div class="inter-content">
          <div class="inter-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <h4 class="inter-title">Interdisciplinary Innovation Welcome</h4>
            <p class="inter-desc">
              SparkX 3.0 encourages cross-domain collaboration across Computer Science, Artificial Intelligence, Electronics & Communication, 
              Mechanical, Civil, Biotechnology, Applied Sciences, and Management disciplines.
            </p>
          </div>
        </div>
        <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gold btn-sm">
          Form an Interdisciplinary Team &rarr;
        </a>
      </div>
    </div>
  `;

  setupTracksInteractivity(section);

  return section;
}

function setupTracksInteractivity(section: HTMLElement): void {
  const titleArea = section.querySelector('#tracks-title-area') as HTMLElement;
  const grid = section.querySelector('#tracks-grid') as HTMLElement;
  const filterAll = section.querySelector('#filter-all') as HTMLElement;
  const filterPro = section.querySelector('#filter-pro') as HTMLElement;
  const filterNovel = section.querySelector('#filter-novel') as HTMLElement;
  const filter30 = section.querySelector('#filter-30day') as HTMLElement;

  let activeFilter = 'all';

  const renderContent = (audience: Audience) => {
    // 1. Update Title Area based on Audience
    if (audience === 'india') {
      titleArea.innerHTML = `
        <span class="section-badge badge-gold">🇮🇳 Indian Student Tracks</span>
        <h2 class="section-heading">Choose Your SparkX Track</h2>
        <p class="section-subheading">
          Structured semester-aligned pathways tailored for students studying at Galgotias University and institutions across India.
        </p>
      `;
    } else {
      titleArea.innerHTML = `
        <span class="section-badge badge-blue">🌍 Global Participation</span>
        <h2 class="section-heading">Build. Innovate. Showcase Globally.</h2>
        <p class="section-subheading">
          Join students from universities around the globe in the International 30-Day Innovation Challenge to construct deployable AI systems.
        </p>
      `;
    }

    // 2. Filter tracks based on active audience & filter chip
    let visibleTracks = TRACKS;
    if (audience === 'international') {
      // International students focus primarily on the 30-day challenge
      visibleTracks = TRACKS.filter((t) => t.id === 'challenge30' || t.audience.includes('international'));
    }

    if (activeFilter === 'pro') visibleTracks = visibleTracks.filter(t => t.id === 'pro');
    if (activeFilter === 'novel') visibleTracks = visibleTracks.filter(t => t.id === 'novel');
    if (activeFilter === '30day') visibleTracks = visibleTracks.filter(t => t.id === 'challenge30');

    // 3. Render track cards
    grid.innerHTML = visibleTracks.map((track) => {
      const is30Day = track.id === 'challenge30';
      return `
        <div class="track-card ${is30Day ? 'featured-track' : ''}">
          <div class="track-card-header">
            <div class="track-badge-tag">${track.badge}</div>
            <span class="track-target">${track.targetGroup}</span>
          </div>

          <h3 class="track-title">${track.name}</h3>
          <p class="track-subtitle">${track.subtitle}</p>

          <div class="track-focus-box">
            <span class="focus-label">Core Focus:</span>
            <span class="focus-value">${track.focus}</span>
          </div>

          <p class="track-description">${track.description}</p>

          <div class="track-expected-output">
            <span class="output-label">Expected Output:</span>
            <p class="output-text">${track.expectedOutput}</p>
          </div>

          <div class="track-components-list">
            <span class="components-heading">Key Deliverables & Assessment Pillars:</span>
            <ul>
              ${track.components.map(comp => `<li><span class="bullet-check">✦</span> ${comp}</li>`).join('')}
            </ul>
          </div>

          <div class="track-card-footer">
            ${is30Day ? `
              <a href="#challenges" class="btn btn-primary w-full">
                <span>View 4 AI Challenges</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            ` : `
              <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gold w-full">
                <span>Register for ${track.id.toUpperCase()}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
              </a>
            `}
          </div>
        </div>
      `;
    }).join('');

    // Update filter active states
    [filterAll, filterPro, filterNovel, filter30].forEach(f => f?.classList.remove('active'));
    if (activeFilter === 'all') filterAll?.classList.add('active');
    if (activeFilter === 'pro') filterPro?.classList.add('active');
    if (activeFilter === 'novel') filterNovel?.classList.add('active');
    if (activeFilter === '30day') filter30?.classList.add('active');
  };

  filterAll?.addEventListener('click', () => { activeFilter = 'all'; renderContent(appState.getAudience()); });
  filterPro?.addEventListener('click', () => { activeFilter = 'pro'; renderContent(appState.getAudience()); });
  filterNovel?.addEventListener('click', () => { activeFilter = 'novel'; renderContent(appState.getAudience()); });
  filter30?.addEventListener('click', () => { activeFilter = '30day'; renderContent(appState.getAudience()); });

  appState.subscribe((audience) => {
    // If switched to international, default filter chip to all
    if (audience === 'international' && (activeFilter === 'pro' || activeFilter === 'novel')) {
      activeFilter = 'all';
    }
    renderContent(audience);
  });
}
