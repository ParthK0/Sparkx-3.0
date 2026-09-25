/**
 * Subtle 3D Card Tilt on Hover Utility for SparkX 3.0
 * Provides a tactile, premium lift effect without jarring jumps.
 */

export function initCardTilt(): void {
  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const cardSelectors = [
    '.track-card',
    '.prize-card',
    '.challenge-card',
    '.pillar-card',
    '.participation-card',
    '.eval-card',
    '.committee-card'
  ];

  const cards = document.querySelectorAll<HTMLElement>(cardSelectors.join(', '));

  cards.forEach((card) => {
    // Avoid re-attaching listeners multiple times
    if (card.dataset.tiltInitialized === 'true') return;
    card.dataset.tiltInitialized = 'true';

    card.style.transition = 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease';

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateX = -y * 6; // Max 3deg tilt
      const rotateY = x * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
