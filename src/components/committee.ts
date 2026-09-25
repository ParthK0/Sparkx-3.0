import { COMMITTEE } from '../data/content';

function renderPersonAvatar(image?: string, name: string = '', cssClass: string = 'person-img'): string {
  const initials = getInitials(name);
  if (!image) {
    return `<span class="avatar-initials">${initials}</span>`;
  }
  return `<img src="${image}" alt="${name}" class="${cssClass}" loading="lazy" onerror="this.onerror=null; this.parentElement.classList.remove('has-img'); this.parentElement.classList.add('fallback-avatar'); this.parentElement.innerHTML='<span class=\\'avatar-initials\\'>${initials}</span>';" />`;
}

export function renderCommittee(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'committee-section section-padding';
  section.id = 'committee';

  const patrons = COMMITTEE.filter(m => m.category === 'patron');
  const international = COMMITTEE.filter(m => m.category === 'international');
  const leadership = COMMITTEE.filter(m => m.category === 'leadership');
  const organizing = COMMITTEE.filter(m => m.category === 'organizing' || m.category === 'challenge');
  const evaluation = COMMITTEE.filter(m => m.category === 'evaluation');

  section.innerHTML = `
    <div class="container">
      <div class="section-title-area text-center">
        <span class="section-badge">Academic Excellence</span>
        <h2 class="section-heading">Leadership & Organizing Committee</h2>
        <p class="section-subheading">
          Guided by distinguished university leadership, renowned international tech luminaries, and dedicated faculty mentors.
        </p>
      </div>

      <!-- University Patrons -->
      <div class="committee-tier">
        <h3 class="tier-label">Chief Patrons</h3>
        <div class="patrons-grid">
          ${patrons.map(p => `
            <div class="patron-card">
              <div class="patron-avatar ${p.image ? 'has-img' : ''}">
                ${renderPersonAvatar(p.image, p.name, 'patron-img')}
              </div>
              <div class="patron-meta">
                <span class="member-badge">${p.badge || 'Patron'}</span>
                <h4 class="member-name">${p.name}</h4>
                <p class="member-designation">${p.designation}</p>
                <p class="member-org">${p.organization}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- International Experts -->
      <div class="committee-tier">
        <div class="intl-tier-header">
          <span class="tier-pill-gold">Global Advisory</span>
          <h3 class="tier-label">Distinguished International Experts</h3>
        </div>
        <div class="intl-experts-grid">
          ${international.map(exp => `
            <div class="expert-card">
              <div class="expert-glow"></div>
              <div class="expert-top">
                <div class="expert-avatar ${exp.image ? 'has-img' : ''}">
                  ${renderPersonAvatar(exp.image, exp.name, 'person-img')}
                </div>
                <div class="expert-badges">
                  <span class="expert-badge">${exp.badge}</span>
                  <div class="expert-globe-icon">🌐</div>
                </div>
              </div>
              <h4 class="expert-name">${exp.name}</h4>
              <p class="expert-role">${exp.role}</p>
              <p class="expert-designation">${exp.designation}</p>
              <p class="expert-org">${exp.organization}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- School Leadership -->
      <div class="committee-tier">
        <h3 class="tier-label">School Leadership</h3>
        <div class="leadership-grid">
          ${leadership.map(l => `
            <div class="leader-card">
              <div class="leader-avatar ${l.image ? 'has-img' : ''}">
                ${renderPersonAvatar(l.image, l.name, 'person-img')}
              </div>
              <div class="leader-info">
                <span class="leader-badge">${l.badge}</span>
                <h4 class="leader-name">${l.name}</h4>
                <p class="leader-desig">${l.designation}</p>
                <p class="leader-org">${l.organization}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Organizing Faculty & Coordinators -->
      <div class="committee-tier">
        <h3 class="tier-label">Organizing Committee & Challenge Leads</h3>
        <div class="faculty-grid">
          ${organizing.map(f => `
            <div class="faculty-card">
              <div class="faculty-card-header">
                <div class="faculty-avatar ${f.image ? 'has-img' : ''}">
                  ${renderPersonAvatar(f.image, f.name, 'person-img')}
                </div>
                <span class="faculty-role-tag">${f.role}</span>
              </div>
              <h4 class="faculty-name">${f.name}</h4>
              <p class="faculty-desig">${f.designation}</p>
              <p class="faculty-org">${f.organization}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Evaluation Committee -->
      <div class="committee-tier">
        <h3 class="tier-label">Evaluation & Screening Committee</h3>
        <div class="eval-grid">
          ${evaluation.map(ev => `
            <div class="eval-card">
              <div class="eval-card-header">
                <div class="eval-avatar ${ev.image ? 'has-img' : ''}">
                  ${renderPersonAvatar(ev.image, ev.name, 'person-img')}
                </div>
                <span class="eval-role-tag">${ev.role}</span>
              </div>
              <h4 class="eval-name">${ev.name}</h4>
              <p class="eval-desig">${ev.designation}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  return section;
}

function getInitials(name: string): string {
  return name
    .replace('Prof.', '')
    .replace('(Dr.)', '')
    .replace('Dr.', '')
    .replace('Mr.', '')
    .replace('Ms.', '')
    .trim()
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(p => p[0])
    .join('');
}
