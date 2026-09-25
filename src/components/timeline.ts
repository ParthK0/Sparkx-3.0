import { TIMELINE, EVENT_DETAILS } from '../data/content';
import { TimelineMilestone } from '../types';

export interface EvaluatedMilestone extends TimelineMilestone {
  computedStatus: 'completed' | 'active' | 'upcoming';
  index: number;
}

export function evaluateMilestones(now: Date = new Date()): {
  milestones: EvaluatedMilestone[];
  activeIndex: number;
  coveragePercent: number;
  activeMilestone: EvaluatedMilestone;
  todayStr: string;
} {
  const nowTime = now.getTime();
  let activeIndex = -1;

  const milestones: EvaluatedMilestone[] = TIMELINE.map((item, index) => {
    const start = item.startDate ? new Date(item.startDate).getTime() : 0;
    const end = item.endDate ? new Date(item.endDate).getTime() : Number.MAX_SAFE_INTEGER;

    let computedStatus: 'completed' | 'active' | 'upcoming' = 'upcoming';

    if (nowTime > end) {
      computedStatus = 'completed';
    } else if (nowTime >= start && nowTime <= end) {
      computedStatus = 'active';
      if (activeIndex === -1) activeIndex = index;
    } else {
      computedStatus = 'upcoming';
    }

    return {
      ...item,
      computedStatus,
      index
    };
  });

  // If now is between phases or before first phase, find the active/approaching phase
  if (activeIndex === -1) {
    const firstStart = TIMELINE[0]?.startDate ? new Date(TIMELINE[0].startDate).getTime() : 0;
    if (nowTime < firstStart) {
      activeIndex = 0;
      milestones[0].computedStatus = 'active';
    } else {
      for (let i = 0; i < milestones.length; i++) {
        const endDateStr = TIMELINE[i]?.endDate;
        const end = endDateStr ? new Date(endDateStr).getTime() : 0;
        if (nowTime <= end) {
          activeIndex = i;
          milestones[i].computedStatus = 'active';
          break;
        }
      }
      if (activeIndex === -1) {
        activeIndex = milestones.length - 1;
        milestones[activeIndex].computedStatus = 'completed';
      }
    }
  }

  // Calculate actual date coverage percentage across 5 milestones (20% each)
  const total = milestones.length;
  const segment = 100 / total; // 20% per milestone
  const currentItem = milestones[activeIndex];
  const start = currentItem.startDate ? new Date(currentItem.startDate).getTime() : nowTime;
  const end = currentItem.endDate ? new Date(currentItem.endDate).getTime() : nowTime;

  // Fraction within the active window
  const duration = end - start;
  const intraProgress = duration > 0 ? Math.max(0, Math.min(1, (nowTime - start) / duration)) : 0;

  // Completed segments + fraction of active segment
  // For milestone 0 (Registration): coverage reaches to 20% so the bar covers Phase 1
  const completedBase = activeIndex * segment;
  const intraCoverage = Math.max(0.5, intraProgress) * segment;
  const coveragePercent = Math.min(100, Math.max(segment, completedBase + intraCoverage));

  const todayStr = now.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return {
    milestones,
    activeIndex,
    coveragePercent: Math.round(coveragePercent),
    activeMilestone: milestones[activeIndex],
    todayStr
  };
}

export function renderTimeline(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'timeline-section section-padding';
  section.id = 'timeline';

  const dateState = evaluateMilestones();
  const { milestones, activeIndex, coveragePercent, activeMilestone, todayStr } = dateState;

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge">Master Schedule & Real-Time Tracker</span>
        <h2 class="section-heading">Key Program Milestones</h2>
        <p class="section-subheading">
          Follow the journey of SparkX 3.0 in real time. The schedule dynamically tracks current active phases from registration opening to the grand international jury showcase.
        </p>
      </div>

      <!-- Real-Time Date & Active Phase Tracker Banner -->
      <div class="timeline-live-status-bar">
        <div class="status-bar-pill current-date-pill">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="18" y2="10"/></svg>
          <span>Today: <strong>${todayStr}</strong></span>
        </div>

        <div class="status-bar-pill active-phase-pill">
          <span class="live-pulse-dot"></span>
          <span>Currently Active: <strong>${activeMilestone.title}</strong> (${activeMilestone.date})</span>
        </div>

        <div class="status-bar-pill coverage-pill">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Timeline Coverage: <strong>Phase ${activeIndex + 1} of 5 (${coveragePercent}%)</strong></span>
        </div>
      </div>

      <div class="timeline-container">
        <!-- Interactive Milestone Progress Bar with Date Coverage -->
        <div class="timeline-track-bar-container">
          <div class="timeline-track-bar">
            <div class="timeline-progress-fill" style="width: 0%;" data-target-width="${coveragePercent}%">
              <div class="timeline-head-glow">
                <span class="head-glow-core"></span>
                <span class="head-glow-ripple"></span>
              </div>
            </div>
          </div>
          <div class="timeline-coverage-indicator" style="left: 0%;" data-target-left="${coveragePercent}%">
            <span class="coverage-arrow">▲</span>
            <span class="coverage-tooltip">Active: ${activeMilestone.title} (${coveragePercent}% Coverage)</span>
          </div>
        </div>

        <div class="timeline-nodes-wrapper">
          ${milestones.map((item, index) => {
            const isFinished = item.computedStatus === 'completed';
            const isActive = item.computedStatus === 'active';
            
            return `
              <div class="timeline-node ${isActive ? 'current-node active-phase-node' : ''} ${isFinished ? 'done-node' : 'upcoming-node'}" data-index="${index}">
                <div class="node-marker">
                  <div class="node-bullet ${isActive ? 'active-bullet' : ''} ${isFinished ? 'done-bullet' : ''}">
                    ${isFinished 
                      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` 
                      : `<span class="bullet-num">${index + 1}</span>`
                    }
                    ${isActive ? `<span class="bullet-pulse-wave"></span>` : ''}
                  </div>
                </div>

                <div class="node-card ${isActive ? 'active-card' : ''} ${isFinished ? 'done-card' : ''}">
                  <div class="node-header-status">
                    ${isActive 
                      ? `<span class="node-status-tag active-tag"><span class="live-pulse-dot"></span> LIVE NOW</span>` 
                      : (isFinished ? `<span class="node-status-tag done-tag">✓ COMPLETED</span>` : `<span class="node-status-tag upcoming-tag">UPCOMING</span>`)
                    }
                    <div class="node-date-badge ${isActive ? 'active-date-badge' : ''}">${item.date}</div>
                  </div>

                  <h3 class="node-title ${isActive ? 'active-title' : ''}">${item.title}</h3>
                  <p class="node-description">${item.description}</p>
                  
                  ${item.phaseLabel ? `<div class="node-phase-caption">${item.phaseLabel}</div>` : ''}

                  ${item.note ? `
                    <div class="node-reconcile-note">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                      <span>${item.note}</span>
                    </div>
                  ` : ''}

                  ${isActive ? `
                    <div class="active-node-cta">
                      <a href="${EVENT_DETAILS.registrationUrl}" target="_blank" rel="noopener noreferrer" class="active-cta-btn">
                        <span>Register Your Team Now</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </a>
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

  setupTimelineProgress(section, coveragePercent, activeIndex);

  return section;
}

function setupTimelineProgress(section: HTMLElement, targetCoverage: number, activeIndex: number): void {
  const fill = section.querySelector<HTMLElement>('.timeline-progress-fill');
  const indicator = section.querySelector<HTMLElement>('.timeline-coverage-indicator');
  const nodes = section.querySelectorAll<HTMLElement>('.timeline-node');
  if (!fill) return;

  let animated = false;

  function triggerProgress(): void {
    if (animated) return;
    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Trigger animation when timeline section comes into view
    if (rect.top < windowH * 0.85) {
      animated = true;
      if (fill) {
        fill.style.width = `${targetCoverage}%`;
      }

      if (indicator) {
        indicator.style.left = `${targetCoverage}%`;
        indicator.classList.add('visible');
      }

      nodes.forEach((node, idx) => {
        if (idx <= activeIndex) {
          node.classList.add('reached');
        }
      });
    }
  }

  window.addEventListener('scroll', triggerProgress, { passive: true });
  setTimeout(triggerProgress, 250);
}
