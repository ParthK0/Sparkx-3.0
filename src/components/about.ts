import { appState } from '../state';
import { Audience } from '../types';

export function renderAbout(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'about-section section-padding';
  section.id = 'about';

  section.innerHTML = `
    <div class="container">
      <!-- Section 1: Introduction -->
      <div class="about-intro-block">
        <div class="section-title-area text-center">
          <span class="section-badge">1. Introduction</span>
          <h2 class="section-heading">About SparkX 3.0 & 30-Day Innovation Challenge</h2>
        </div>

        <div class="about-lead-card">
          <p class="about-lead-text">
            <strong>SparkX 3.0 Beyond Boundaries</strong> brings together two specialized innovation pathways: <strong>SparkX 3.0</strong> is the premier national project innovation challenge organized exclusively for <strong>Indian students</strong> across Galgotias University and colleges nationwide. Running alongside it is the <strong>30-Day Innovation Challenge</strong>, an intensive real-world AI systems sprint open to <strong>both Indian and International students</strong> worldwide.
          </p>

          <!-- Progressive Innovation Journey Strip -->
          <div class="journey-flow-box">
            <span class="journey-flow-label">Progressive Innovation Journey:</span>
            <div class="ideas-step-strip">
              <span class="step-concept step-1">Idea</span>
              <span class="step-arr">→</span>
              <span class="step-concept step-2">Product</span>
              <span class="step-arr">→</span>
              <span class="step-concept step-3">Novel Product</span>
              <span class="step-arr">→</span>
              <span class="step-concept step-4">Proposal & Implementation</span>
              <span class="step-arr">→</span>
              <span class="step-concept step-5">Research / Innovation</span>
            </div>
          </div>

          <!-- Academic Maturity & Track Breakdown -->
          <div class="about-tracks-summary" id="about-tracks-summary">
            <!-- Injected strictly based on active audience -->
          </div>
        </div>
      </div>

      <!-- Core Pillars -->
      <div class="pillars-grid">
        <!-- Pillar 1 -->
        <div class="pillar-card">
          <div class="pillar-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="5"/></svg>
          </div>
          <h3 class="pillar-title">Innovation</h3>
          <p class="pillar-desc">
            Identify meaningful, high-friction societal, clinical, and industrial bottlenecks and conceive inventive technological interventions.
          </p>
          <div class="pillar-glow"></div>
        </div>

        <!-- Pillar 2 -->
        <div class="pillar-card">
          <div class="pillar-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z"/><path d="m21 16-4-2.5V8.5l4-2.5"/></svg>
          </div>
          <h3 class="pillar-title">Product Development</h3>
          <p class="pillar-desc">
            Translate theoretical blueprints into production-ready software architectures, polished user workflows, and robust hardware prototypes.
          </p>
          <div class="pillar-glow"></div>
        </div>

        <!-- Pillar 3 -->
        <div class="pillar-card">
          <div class="pillar-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m14 2-4 8h6l-4 12 10-14h-6l4-6z"/></svg>
          </div>
          <h3 class="pillar-title">Research Aptitude</h3>
          <p class="pillar-desc">
            Validate technical claims through empirical benchmarks, controlled experimentation, algorithmic proofs, and comparative evaluation.
          </p>
          <div class="pillar-glow"></div>
        </div>

        <!-- Pillar 4 -->
        <div class="pillar-card">
          <div class="pillar-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
          </div>
          <h3 class="pillar-title">Entrepreneurship</h3>
          <p class="pillar-desc">
            Shape scalable venture propositions with clear unit economics, addressable market definitions, and incubation acceleration pathways.
          </p>
          <div class="pillar-glow"></div>
        </div>
      </div>

      <!-- Section 2: Objectives -->
      <div class="objectives-container" id="objectives">
        <div class="objectives-header text-center">
          <span class="section-badge">2. Objectives</span>
          <h3 class="objectives-title">Program Mandate & Core Objectives</h3>
          <p class="objectives-sub">
            Ten institutional outcomes established to cultivate research rigor, engineering excellence, and startup incubation
          </p>
        </div>

        <div class="objectives-grid">
          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">01</span>
              <p>Foster a strong culture of innovation, research, and entrepreneurship among students.</p>
            </div>
          </div>

          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">02</span>
              <p>Encourage students to identify and solve real-world problems through technology.</p>
            </div>
          </div>

          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">03</span>
              <p>Develop working products and prototypes rather than theoretical ideas alone.</p>
            </div>
          </div>

          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">04</span>
              <p>Provide students with structured faculty mentoring and expert guidance.</p>
            </div>
          </div>

          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">05</span>
              <p>Encourage interdisciplinary and cross-domain collaboration.</p>
            </div>
          </div>

          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">06</span>
              <p>Develop students' abilities in problem identification, design, implementation, testing, and presentation.</p>
            </div>
          </div>

          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">07</span>
              <p>Create a pathway from early-stage product development to advanced final-year research projects.</p>
            </div>
          </div>

          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">08</span>
              <p>Motivate students towards research publications, patents, startups, and external competitions.</p>
            </div>
          </div>

          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">09</span>
              <p>Provide students with exposure to professional project evaluation and constructive feedback.</p>
            </div>
          </div>

          <div class="objective-card">
            <div class="obj-sparkle-icon">✦</div>
            <div class="obj-body">
              <span class="obj-seq">10</span>
              <p>Strengthen the university's innovation, research, and entrepreneurship ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setupAboutSegregation(section);

  return section;
}

function setupAboutSegregation(section: HTMLElement): void {
  const container = section.querySelector('#about-tracks-summary') as HTMLElement;
  if (!container) return;

  const update = (audience: Audience) => {
    if (audience === 'india') {
      container.innerHTML = `
        <p class="about-tracks-intro">
          The three tracks for Indian participants are designed according to academic maturity and technical capabilities:
        </p>
        <div class="about-tracks-grid">
          <div class="about-track-pill track-pro">
            <span class="track-pill-badge">7th Semester (India Only)</span>
            <strong class="track-pill-title">SparkX 3.0 — Pro</strong>
            <span class="track-pill-desc">Advanced Project Proposal, Implementation & Research (Patents & Publications)</span>
          </div>

          <div class="about-track-pill track-novel">
            <span class="track-pill-badge">3rd & 5th Semester (India Only)</span>
            <strong class="track-pill-title">SparkX 3.0 — Novel</strong>
            <span class="track-pill-desc">Novel Product-Based Innovation & Working Prototype Differentiation</span>
          </div>

          <div class="about-track-pill track-sprint">
            <span class="track-pill-badge">Open for Indian & International</span>
            <strong class="track-pill-title">30-Day Innovation Challenge</strong>
            <span class="track-pill-desc">Predefined Real-World AI Systems & High-Intensity Prototyping</span>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <p class="about-tracks-intro">
          The dedicated pathway for international university teams competing globally:
        </p>
        <div class="about-tracks-grid" style="grid-template-columns: 1fr;">
          <div class="about-track-pill track-sprint" style="grid-column: 1 / -1; border-color: rgba(59, 130, 246, 0.4); background: linear-gradient(135deg, rgba(59, 130, 246, 0.04), rgba(15, 23, 42, 0.02));">
            <span class="track-pill-badge badge-blue">Global Category • Open to International & Indian Students • 100% Online</span>
            <strong class="track-pill-title">Global 30-Day AI Innovation Challenge</strong>
            <span class="track-pill-desc">
              <strong>Notice:</strong> The on-campus SparkX 3.0 Pro & Novel tracks are reserved exclusively for Indian students. International teams participate worldwide in the <strong>30-Day Innovation Challenge</strong> across 4 high-impact AI domains (Event Copilot, Career Readiness, Lab SPOC, Campus Copilot). Submit GitHub repository, working demo & defend live before an international jury on 26 Nov 2026. Zero travel required.
            </span>
          </div>
        </div>
      `;
    }
  };

  appState.subscribe(update);
}
