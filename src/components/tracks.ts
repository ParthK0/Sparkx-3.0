/* ==========================================================================
   SparkX 3.0 — Strictly Segregated Tracks Component (Simplified & Scannable)
   If Indian is selected -> Shows ONLY Indian semester tracks & national sprint.
   If International is selected -> Shows ONLY the International 30-Day AI Innovation Challenge.
   Cards are streamlined to eliminate text-heaviness on homepage while offering
   quick module expansion / direct link to challenge portal.
   ========================================================================== */

import { appState } from '../state';
import { TRACKS, CHALLENGES } from '../data/content';
import { Audience } from '../types';

export function renderTracks(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'tracks-section section-padding';
  section.id = 'tracks';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center" id="tracks-title-area">
        <!-- Injected dynamically -->
      </div>

      <div class="track-audience-filter-bar" id="tracks-filter-bar">
        <!-- Injected dynamically -->
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
              SparkX 3.0 encourages cross-domain collaboration across Computer Science, Artificial Intelligence, Electronics, 
              Mechanical, Civil, Biotechnology, and Management disciplines.
            </p>
          </div>
        </div>
        <a href="#journey" class="btn btn-outline-theme btn-sm">
          Explore Innovation Journey &rarr;
        </a>
      </div>

      <!-- Problem Statements & Rubric Portal Banner -->
      <div class="tracks-portal-callout">
        <div class="portal-callout-text">
          <span class="portal-callout-badge">Dedicated Portal</span>
          <h4 class="portal-callout-heading">Explore AI Challenge Problem Domains & Jury Rubric</h4>
          <p class="portal-callout-sub">Access the four detailed problem statements, engineering requirements, and mandatory deliverables checklist.</p>
        </div>
        <div class="portal-callout-actions">
          <a href="#/challenges" class="btn btn-primary btn-sm">
            <span>Problem Statements</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#/evaluation" class="btn btn-secondary btn-sm">
            <span>Evaluation Rubric</span>
          </a>
        </div>
      </div>
    </div>
  `;

  setupTracksSegregation(section);

  return section;
}

function setupTracksSegregation(section: HTMLElement): void {
  const titleArea = section.querySelector('#tracks-title-area') as HTMLElement;
  const filterBar = section.querySelector('#tracks-filter-bar') as HTMLElement;
  const grid = section.querySelector('#tracks-grid') as HTMLElement;

  let currentAudience: Audience = 'india';
  let activeFilter = 'all';

  const renderContent = () => {
    if (currentAudience === 'india') {
      // 1. Indian Title
      titleArea.innerHTML = `
        <span class="section-badge badge-gold">🇮🇳 Indian Student Challenges</span>
        <h2 class="section-heading">SparkX 3.0 & 30-Day Sprint (Indian Challenges)</h2>
        <p class="section-subheading">
          Indian students are eligible for both SparkX 3.0 (7th Sem Pro & 3rd/5th Sem Novel) and the 30-Day Innovation Sprint.
        </p>
      `;

      // 2. Indian Filter Chips
      filterBar.innerHTML = `
        <button type="button" class="filter-chip ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All Indian Challenges</button>
        <button type="button" class="filter-chip ${activeFilter === 'pro' ? 'active' : ''}" data-filter="pro">SparkX Pro (7th Sem)</button>
        <button type="button" class="filter-chip ${activeFilter === 'novel' ? 'active' : ''}" data-filter="novel">SparkX Novel (3rd & 5th Sem)</button>
        <button type="button" class="filter-chip ${activeFilter === '30day' ? 'active' : ''}" data-filter="30day">30-Day Innovation Sprint</button>
      `;

      // 3. Indian Tracks Only
      let visibleTracks = TRACKS.filter(t => t.audience.includes('india'));
      if (activeFilter === 'pro') visibleTracks = visibleTracks.filter(t => t.id === 'pro');
      if (activeFilter === 'novel') visibleTracks = visibleTracks.filter(t => t.id === 'novel');
      if (activeFilter === '30day') visibleTracks = visibleTracks.filter(t => t.id === 'challenge30');

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

            <p class="track-description">${track.description}</p>

            <div class="track-modules-count-chip">
              <span class="chip-icon">⚡</span>
              <span><strong>${track.components.length} Key Deliverables</strong></span>
            </div>

            <div class="track-card-footer">
              <a href="#/tracks" class="btn btn-secondary w-full">
                <span>View Challenge Details</span>
                <span class="btn-arr">&rarr;</span>
              </a>
            </div>
          </div>
        `;
      }).join('');

    } else {
      // 1. International Title
      titleArea.innerHTML = `
        <span class="section-badge badge-blue">🌍 International Participation Track</span>
        <h2 class="section-heading">Global 30-Day Innovation Challenge</h2>
        <p class="section-subheading">
          <strong>Eligibility Notice:</strong> SparkX 3.0 on-campus tracks are exclusively for Indian students. International teams participate worldwide in the 30-Day AI Innovation Challenge (100% Virtual).
        </p>
      `;

      // 2. International Filter Chips
      filterBar.innerHTML = `
        <button type="button" class="filter-chip ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All AI Challenges</button>
        <button type="button" class="filter-chip ${activeFilter === 'event-management' ? 'active' : ''}" data-filter="event-management">01. Event Copilot</button>
        <button type="button" class="filter-chip ${activeFilter === 'career-readiness' ? 'active' : ''}" data-filter="career-readiness">02. Career Readiness</button>
        <button type="button" class="filter-chip ${activeFilter === 'lab-spoc' ? 'active' : ''}" data-filter="lab-spoc">03. Virtual Lab SPOC</button>
        <button type="button" class="filter-chip ${activeFilter === 'university-copilot' ? 'active' : ''}" data-filter="university-copilot">04. Campus Copilot</button>
      `;

      // 3. International Track Only (The 30-Day International Challenge + 4 AI Pillars)
      let challenges = CHALLENGES;
      if (activeFilter !== 'all') {
        challenges = challenges.filter(c => c.id === activeFilter);
      }

      grid.innerHTML = challenges.map((ch) => {
        return `
          <div class="track-card featured-track">
            <div class="track-card-header">
              <div class="track-badge-tag">${ch.category}</div>
              <span class="track-target">International 30-Day Sprint</span>
            </div>

            <h3 class="track-title">${ch.title}</h3>
            <p class="track-subtitle">${ch.tagline}</p>

            <p class="track-description">${ch.description}</p>

            <div class="track-modules-count-chip chip-blue">
              <span class="chip-icon">🤖</span>
              <span><strong>${ch.modules.length} Specialized AI Modules</strong></span>
            </div>

            <div class="track-card-footer">
              <a href="#/challenges/${ch.id}" class="btn btn-primary w-full">
                <span>View Challenge Blueprint</span>
                <span class="btn-arr">&rarr;</span>
              </a>
            </div>
          </div>
        `;
      }).join('');
    }

    // Attach chip listeners
    filterBar.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = (e.currentTarget as HTMLElement).getAttribute('data-filter') || 'all';
        activeFilter = target;
        renderContent();
      });
    });
  };

  appState.subscribe((audience) => {
    currentAudience = audience;
    activeFilter = 'all';
    renderContent();
  });
}
