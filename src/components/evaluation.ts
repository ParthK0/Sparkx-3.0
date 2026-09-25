import { appState } from '../state';
import { EVALUATION_CRITERIA } from '../data/content';
import { Audience } from '../types';

export function renderEvaluation(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'evaluation-section section-padding';
  section.id = 'evaluation';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge">Jury Standard</span>
        <h2 class="section-heading">Evaluation Rubric & Deliverables</h2>
        <p class="section-subheading">
          Projects are assessed comprehensively on engineering execution, originality, research depth, and deployment viability.
        </p>
      </div>

      <!-- Deliverables Strip -->
      <div class="deliverables-box">
        <div class="deliv-header">
          <span class="deliv-badge">Mandatory Checklist</span>
          <h3 class="deliv-title">What Every Team Must Submit</h3>
          <p class="deliv-sub">Submissions missing any of these items will be disqualified from final prize consideration:</p>
        </div>

        <div class="deliv-grid">
          <div class="deliv-card">
            <div class="deliv-icon">📑</div>
            <h4 class="deliv-name">1. Project Presentation</h4>
            <p class="deliv-info">Slide deck covering problem statement, literature gap, architectural methodology, and results.</p>
          </div>

          <div class="deliv-card highlight-card">
            <div class="deliv-icon">⚡</div>
            <h4 class="deliv-name">2. Working Prototype / Live Demo</h4>
            <p class="deliv-info">Functional software or hardware system with active inference, UI workflows, and zero mock simulations.</p>
          </div>

          <div class="deliv-card">
            <div class="deliv-icon">💻</div>
            <h4 class="deliv-name">3. Public GitHub Repository</h4>
            <p class="deliv-info">Well-structured source code with clear commit history, modular architecture, and MIT/Apache license.</p>
          </div>

          <div class="deliv-card">
            <div class="deliv-icon">📖</div>
            <h4 class="deliv-name">4. Comprehensive User Manual</h4>
            <p class="deliv-info">Setup guide, API documentation, environment variables, dependencies, and test suite instructions.</p>
          </div>
        </div>
      </div>

      <!-- Evaluation Criteria Grid -->
      <div class="rubric-block">
        <h3 class="rubric-heading">Judging & Assessment Criteria</h3>
        <p class="rubric-sub">Standardized criteria evaluated by academic mentors, faculty conveners, and international guests:</p>

        <div class="criteria-grid">
          ${EVALUATION_CRITERIA.map((crit, idx) => `
            <div class="criterion-card">
              <div class="crit-top">
                <span class="crit-num">0${idx + 1}</span>
                <span class="crit-metric">${crit.metric}</span>
              </div>
              <h4 class="crit-title">${crit.title}</h4>
              <p class="crit-desc">${crit.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Dynamic Beyond SparkX Opportunities Section -->
      <div class="opportunities-box" id="opportunities-box">
        <!-- Rendered based on Indian vs International -->
      </div>
    </div>
  `;

  setupOpportunities(section);

  return section;
}

function setupOpportunities(section: HTMLElement): void {
  const oppBox = section.querySelector('#opportunities-box') as HTMLElement;

  const update = (audience: Audience) => {
    if (audience === 'india') {
      oppBox.innerHTML = `
        <div class="opp-inner-card">
          <div class="opp-badge badge-gold">For Indian Pro & Novel Teams</div>
          <h3 class="opp-heading">Your Project Can Go Beyond SparkX</h3>
          <p class="opp-sub">
            Outstanding capstones and student inventions are supported with continuous institutional backing towards:
          </p>

          <div class="opp-chips-grid">
            <div class="opp-chip"><span>📄</span> Research Paper Development</div>
            <div class="opp-chip"><span>🏛️</span> IEEE / Scopus Journal Publications</div>
            <div class="opp-chip"><span>💡</span> Patent Filing & IP Support</div>
            <div class="opp-chip"><span>🚀</span> University E-Cell Startup Incubation</div>
            <div class="opp-chip"><span>🤝</span> Industry Collaboration & Pilots</div>
            <div class="opp-chip"><span>🏆</span> External Hackathons & Grants</div>
            <div class="opp-chip"><span>🎓</span> Higher Study & Global Research Fast-Track</div>
            <div class="opp-chip"><span>⚙️</span> Prototype Enhancement Labs</div>
          </div>
        </div>
      `;
    } else {
      oppBox.innerHTML = `
        <div class="opp-inner-card card-blue-theme">
          <div class="opp-badge badge-blue">For International Participants</div>
          <h3 class="opp-heading">Beyond a Competition: A Global Launchpad</h3>
          <p class="opp-sub">
            SparkX 3.0 opens lasting pathways for international students to collaborate across borders and build recognized portfolios:
          </p>

          <div class="opp-chips-grid">
            <div class="opp-chip"><span>🌍</span> Cross-Border Research Collaboration</div>
            <div class="opp-chip"><span>📑</span> Joint Co-Authored Publications</div>
            <div class="opp-chip"><span>🌐</span> Cross-Cultural Tech Exchange</div>
            <div class="opp-chip"><span>🚀</span> Globally Scalable Startup Mentorship</div>
            <div class="opp-chip"><span>💼</span> Silicon Valley & Global Industry Exposure</div>
            <div class="opp-chip"><span>🏅</span> Verified Institutional Digital Badges</div>
          </div>
        </div>
      `;
    }
  };

  appState.subscribe(update);
}
