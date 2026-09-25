export function renderAbout(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'about-section section-padding';
  section.id = 'about';

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge">About The Program</span>
        <h2 class="section-heading">From Ideas to Impact</h2>
        <p class="section-subheading">
          SparkX 3.0 is a structured innovation program designed to help students transition from abstract concepts 
          into functional, deployable systems while cultivating deep technical skills, research rigor, and entrepreneurial acumen.
        </p>
      </div>

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

      <!-- Official Objectives Accordion / List -->
      <div class="objectives-container">
        <div class="objectives-header">
          <h3 class="objectives-title">Official Program Mandate & Core Objectives</h3>
          <p class="objectives-sub">Institutional outcomes established by the School of Artificial Intelligence</p>
        </div>

        <div class="objectives-grid">
          <div class="objective-item">
            <span class="obj-num">01</span>
            <p>Foster a vibrant culture of innovation, research rigor, and tech entrepreneurship among young engineers.</p>
          </div>
          <div class="objective-item">
            <span class="obj-num">02</span>
            <p>Direct students toward identifying and resolving high-impact societal, industrial, and ecological challenges.</p>
          </div>
          <div class="objective-item">
            <span class="obj-num">03</span>
            <p>Mandate the production of functional, verifiable products and working prototypes rather than theoretical slide decks.</p>
          </div>
          <div class="objective-item">
            <span class="obj-num">04</span>
            <p>Provide structured faculty mentorship, international advisory oversight, and industry-grade sprint reviews.</p>
          </div>
          <div class="objective-item">
            <span class="obj-num">05</span>
            <p>Incentivize interdisciplinary collaboration spanning AI, Computer Science, Electronics, Mechanical, Biotech, and Management.</p>
          </div>
          <div class="objective-item">
            <span class="obj-num">06</span>
            <p>Establish a smooth graduation pathway connecting early-stage student experiments directly to final-year research capstones.</p>
          </div>
          <div class="objective-item">
            <span class="obj-num">07</span>
            <p>Propel top-tier student inventions toward international conference publications (IEEE/Scopus), patent filings, and seed funding.</p>
          </div>
          <div class="objective-item">
            <span class="obj-num">08</span>
            <p>Provide students exposure to rigorous professional jury evaluation and constructive critique from Silicon Valley veterans.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
