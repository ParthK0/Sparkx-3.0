/**
 * Animated Stats Bar Component for SparkX 3.0
 * Positioned between Countdown and About sections to highlight key event metrics.
 */

interface StatConfig {
  target: number;
  suffix: string;
  label: string;
}

const STATS: StatConfig[] = [
  { target: 4, suffix: '+', label: 'AI Challenge Domains' },
  { target: 30, suffix: '', label: 'Days Innovation Sprint' },
  { target: 3, suffix: '', label: 'Competitive Prize Tiers' },
  { target: 2, suffix: '', label: 'Participation Paths' },
];

export function renderStatsBar(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'stats-bar';
  section.id = 'stats';

  section.innerHTML = `
    <div class="stats-grid">
      ${STATS.map(
        (stat, idx) => `
        <div class="stat-item" data-index="${idx}">
          <div class="stat-number-wrapper">
            <span class="stat-number" data-target="${stat.target}">0</span>
            <span class="stat-suffix">${stat.suffix}</span>
          </div>
          <p class="stat-label">${stat.label}</p>
        </div>
      `
      ).join('')}
    </div>
  `;

  setupStatsCounter(section);

  return section;
}

function setupStatsCounter(section: HTMLElement): void {
  const numberEls = section.querySelectorAll<HTMLElement>('.stat-number');

  if (!('IntersectionObserver' in window)) {
    numberEls.forEach((el) => {
      el.textContent = el.dataset.target || '0';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          numberEls.forEach((el) => {
            const target = parseInt(el.dataset.target || '0', 10);
            animateCount(el, target);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
}

function animateCount(el: HTMLElement, target: number, duration: number = 1200): void {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime: number): void {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out cubic curve
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOut);

    el.textContent = String(current);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = String(target);
    }
  }

  requestAnimationFrame(update);
}
