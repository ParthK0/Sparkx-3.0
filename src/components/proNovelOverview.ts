/* ==========================================================================
   SparkX 3.0 — Pro & Novel Challenges Overview Component
   Lightweight, highly-scannable overview for 7th Sem (Pro) and 3rd & 5th Sem (Novel).
   Includes respective prizes and on-campus participation mode.
   Deep link leads to dedicated portal for comprehensive blueprints and rubrics.
   ========================================================================== */

export function renderProNovelOverview(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'pro-novel-section section-padding';
  section.id = 'pro-novel';

  section.innerHTML = `
    <div class="container">
      <!-- Section Header -->
      <div class="section-title-area text-center">
        <span class="section-badge badge-gold">🇮🇳 Indian Students · Semester Tracks</span>
        <h2 class="section-heading">SparkX 3.0 — Pro & Novel Challenges</h2>
        <p class="section-subheading">
          Dedicated capstone and product innovation tracks for Indian engineering students, featuring physical on-campus exhibition, dedicated jury evaluation, and institution-backed recognition.
        </p>
      </div>

      <!-- 2-Card Grid -->
      <div class="pro-novel-grid">
        <!-- Track 1: SparkX 3.0 - Pro -->
        <article class="pn-card pn-card-pro">
          <div class="pn-card-header">
            <div class="pn-track-badge-group">
              <span class="pn-badge-track">Track 3.1</span>
              <span class="pn-badge-sem">7th Semester</span>
            </div>
            <span class="pn-mode-tag">🏛️ On-Campus Physical Expo</span>
          </div>

          <h3 class="pn-card-title">SparkX 3.0 — Pro</h3>
          <p class="pn-card-focus">Proposal, Implementation & Research</p>
          <p class="pn-card-desc">
            Advanced project track emphasizing research rigor, structured validation, and deployable systems capable of evolving into patents, publications, or commercial ventures.
          </p>

          <div class="pn-meta-box">
            <div class="pn-meta-row">
              <span class="pn-meta-label">Expected Output:</span>
              <span class="pn-meta-val">Implemented project with research validation & prototype/publication potential</span>
            </div>
            <div class="pn-meta-row">
              <span class="pn-meta-label">Participation:</span>
              <span class="pn-meta-val">Physical Prototype Demonstration at Galgotias Campus</span>
            </div>
          </div>

          <!-- Respective Prize Box -->
          <div class="pn-prize-box">
            <div class="pn-prize-title">
              <span>🏆</span>
              <span>Pro Track Prize Pool</span>
            </div>
            <div class="pn-prize-tiers">
              <div class="pn-tier-item gold">
                <span class="pn-tier-rank">1st Prize</span>
                <span class="pn-tier-amount">₹10,000</span>
              </div>
              <div class="pn-tier-item silver">
                <span class="pn-tier-rank">2nd Prize</span>
                <span class="pn-tier-amount">₹8,000</span>
              </div>
              <div class="pn-tier-item bronze">
                <span class="pn-tier-rank">3rd Prize</span>
                <span class="pn-tier-amount">₹5,000</span>
              </div>
            </div>
          </div>

          <div class="pn-card-footer">
            <a href="#/tracks" class="btn btn-secondary w-full">
              <span>View Full Pro Specifications & Deliverables</span>
              <span>&rarr;</span>
            </a>
          </div>
        </article>

        <!-- Track 2: SparkX 3.0 - Novel -->
        <article class="pn-card pn-card-novel">
          <div class="pn-card-header">
            <div class="pn-track-badge-group">
              <span class="pn-badge-track">Track 3.2</span>
              <span class="pn-badge-sem">3rd & 5th Semester</span>
            </div>
            <span class="pn-mode-tag">🏛️ On-Campus Physical Expo</span>
          </div>

          <h3 class="pn-card-title">SparkX 3.0 — Novel</h3>
          <p class="pn-card-focus">Novel Product-Based Innovation</p>
          <p class="pn-card-desc">
            Product innovation track for pre-final years focusing on distinct novelty, user-centric ergonomics, creative problem-solving, and tangible market utility.
          </p>

          <div class="pn-meta-box">
            <div class="pn-meta-row">
              <span class="pn-meta-label">Expected Output:</span>
              <span class="pn-meta-val">Novel functional prototype with clearly differentiated, patentable features</span>
            </div>
            <div class="pn-meta-row">
              <span class="pn-meta-label">Participation:</span>
              <span class="pn-meta-val">Physical Product Demonstration at Galgotias Campus</span>
            </div>
          </div>

          <!-- Respective Prize Box -->
          <div class="pn-prize-box">
            <div class="pn-prize-title">
              <span>🏆</span>
              <span>Novel Track Prize Pool</span>
            </div>
            <div class="pn-prize-tiers">
              <div class="pn-tier-item gold">
                <span class="pn-tier-rank">1st Prize</span>
                <span class="pn-tier-amount">₹10,000</span>
              </div>
              <div class="pn-tier-item silver">
                <span class="pn-tier-rank">2nd Prize</span>
                <span class="pn-tier-amount">₹8,000</span>
              </div>
              <div class="pn-tier-item bronze">
                <span class="pn-tier-rank">3rd Prize</span>
                <span class="pn-tier-amount">₹5,000</span>
              </div>
            </div>
          </div>

          <div class="pn-card-footer">
            <a href="#/tracks" class="btn btn-secondary w-full">
              <span>View Full Novel Specifications & Deliverables</span>
              <span>&rarr;</span>
            </a>
          </div>
        </article>
      </div>

      <!-- Quick Interdisciplinary Notice -->
      <div class="pn-bottom-notice">
        <span>💡 <strong>Interdisciplinary Note:</strong> Teams can include members from Computer Science, Artificial Intelligence, Electronics, Mechanical, Civil, Biotechnology, and Management disciplines.</span>
        <a href="#/tracks" class="pn-detail-link">Read Track Rules & Guidelines &rarr;</a>
      </div>
    </div>
  `;

  return section;
}
