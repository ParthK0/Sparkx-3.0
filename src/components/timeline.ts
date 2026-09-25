import { TIMELINE, EVENT_DETAILS } from '../data/content';

export function renderTimeline(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'timeline-section section-padding';
  section.id = 'timeline';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge">Master Schedule</span>
        <h2 class="section-heading">Key Program Milestones</h2>
        <p class="section-subheading">
          Mark your calendar for the pivotal phases of SparkX 3.0, from registration opening to the grand international jury showcase.
        </p>
      </div>

      <div class="timeline-container">
        <div class="timeline-track-line"></div>
        <div class="timeline-nodes-wrapper">
          ${TIMELINE.map((item, index) => {
            const isFinished = item.status === 'completed';
            const isActive = item.status === 'active';
            return `
              <div class="timeline-node ${isActive ? 'current-node' : ''} ${isFinished ? 'done-node' : ''}">
                <div class="node-marker">
                  <div class="node-bullet">${index + 1}</div>
                </div>
                <div class="node-card">
                  <div class="node-date-badge">${item.date}</div>
                  <h3 class="node-title">${item.title}</h3>
                  <p class="node-description">${item.description}</p>
                  ${item.note ? `
                    <div class="node-reconcile-note">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                      <span>${item.note}</span>
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Schedule Callout Cards -->
      <div class="timeline-meta-grid">
        <div class="timeline-day-card">
          <div class="day-badge">Day 1 • 25 Nov 2026</div>
          <h4 class="day-title">Project Innovation Challenge</h4>
          <p class="day-desc">
            Spotlight on on-campus student teams: <strong>SparkX Pro</strong> (7th Semester research capstones) 
            and <strong>SparkX Novel</strong> (3rd & 5th Semester product innovations). Live hardware & software stalls.
          </p>
        </div>

        <div class="timeline-day-card day-highlight">
          <div class="day-badge badge-blue">Day 2 • 26 Nov 2026</div>
          <h4 class="day-title">International Innovation Challenge</h4>
          <p class="day-desc">
            Grand international finals: Virtual presentations for global university teams alongside final rounds of the 
            <strong>30-Day AI Software Solution Sprint</strong> before the international jury panel.
          </p>
        </div>
      </div>

      <div class="timeline-bottom-cta">
        <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-md shadow-gold">
          Register Before 10 October 2026 &rarr;
        </a>
      </div>
    </div>
  `;

  return section;
}
