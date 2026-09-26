export function renderJourney(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'journey-section section-padding';
  section.id = 'journey';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge">How It Works</span>
        <h2 class="section-heading">The 5-Stage Innovation Journey</h2>
        <p class="section-subheading">
          Wondering what happens after you register? Follow this clear, structured pipeline from problem definition to final showcase.
        </p>
      </div>

      <!-- 5-Stage Pipeline -->
      <div class="journey-track-wrapper">
        <div class="journey-step-card">
          <div class="step-badge-circle">01</div>
          <div class="step-card-content">
            <span class="step-subtitle">Phase 1</span>
            <h3 class="step-title">Identify</h3>
            <p class="step-summary-highlight">Find the problem</p>
            <p class="step-text">
              Uncover an authentic problem in industry or society. Frame a crisp problem statement, target audience, and research gap.
            </p>
          </div>
          <div class="step-arrow">&rarr;</div>
        </div>

        <div class="journey-step-card">
          <div class="step-badge-circle">02</div>
          <div class="step-card-content">
            <span class="step-subtitle">Phase 2</span>
            <h3 class="step-title">Design</h3>
            <p class="step-summary-highlight">Architect the solution</p>
            <p class="step-text">
              Design the technical schema, select AI/ML models (LLMs, Computer Vision, RAG), specify API contracts, and map the user flow.
            </p>
          </div>
          <div class="step-arrow">&rarr;</div>
        </div>

        <div class="journey-step-card highlight-step">
          <div class="step-badge-circle">03</div>
          <div class="step-card-content">
            <span class="step-subtitle">Phase 3</span>
            <h3 class="step-title">Build</h3>
            <p class="step-summary-highlight">Create the prototype</p>
            <p class="step-text">
              Execute during the 30-Day Sprint. Code the front-end, train/fine-tune models, connect persistent databases, and deploy.
            </p>
          </div>
          <div class="step-arrow">&rarr;</div>
        </div>

        <div class="journey-step-card">
          <div class="step-badge-circle">04</div>
          <div class="step-card-content">
            <span class="step-subtitle">Phase 4</span>
            <h3 class="step-title">Validate</h3>
            <p class="step-summary-highlight">Test & improve</p>
            <p class="step-text">
              Conduct user testing, latency profiling, error analysis, and collect verifiable performance metrics against standard benchmarks.
            </p>
          </div>
          <div class="step-arrow">&rarr;</div>
        </div>

        <div class="journey-step-card">
          <div class="step-badge-circle">05</div>
          <div class="step-card-content">
            <span class="step-subtitle">Phase 5</span>
            <h3 class="step-title">Showcase</h3>
            <p class="step-summary-highlight">Present your innovation</p>
            <p class="step-text">
              Demonstrate the live system before an international jury of professors and industry founders during the 25–26 November Grand Exhibition.
            </p>
          </div>
        </div>
      </div>

      <!-- What You'll Build & Submit -->
      <div class="submission-expectations-box" id="what-you-build">
        <div class="expectations-header">
          <div class="exp-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <h4 class="exp-title">What You'll Build & Submit</h4>
            <p class="exp-sub">No theoretical slide decks. Every submission is judged on tangible technical execution:</p>
          </div>
        </div>

        <div class="expectations-grid">
          <div class="exp-item">
            <span class="exp-num-badge">01</span>
            <div>
              <strong>Working Prototype</strong>
              <p>A functional web application, mobile app, desktop tool, or hardware-software solution.</p>
            </div>
          </div>
          <div class="exp-item">
            <span class="exp-num-badge">02</span>
            <div>
              <strong>AI / ML Core</strong>
              <p>An intelligent component with meaningful machine learning, NLP, computer vision, or LLM agent integration.</p>
            </div>
          </div>
          <div class="exp-item">
            <span class="exp-num-badge">03</span>
            <div>
              <strong>Backend & Data Architecture</strong>
              <p>Structured database (SQL/NoSQL/Vector), documented REST/GraphQL APIs, and secure architecture.</p>
            </div>
          </div>
          <div class="exp-item">
            <span class="exp-num-badge">04</span>
            <div>
              <strong>Evidence & Analytics</strong>
              <p>Rigorous test results, telemetry, empirical benchmarks, and an end-to-end working demonstration.</p>
            </div>
          </div>
        </div>

        <div class="expectations-footer text-center" style="margin-top: 24px;">
          <a href="#/evaluation" class="btn btn-outline-theme btn-sm">
            <span>See Full Submission Requirements & Rubric</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;

  return section;
}
