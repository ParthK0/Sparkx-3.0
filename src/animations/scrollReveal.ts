/**
 * Scroll Reveal & Stagger Animation Utility for SparkX 3.0
 * Uses IntersectionObserver to trigger performant GPU-accelerated entrance animations.
 */

let observer: IntersectionObserver | null = null;

export function initScrollReveal(): void {
  // If IntersectionObserver is not supported, reveal everything immediately
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
      el.classList.add('visible');
    });
    return;
  }

  // Cleanup prior observer if re-initializing
  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('visible');

          // If it's a staggered container, apply index delays to immediate children
          if (target.classList.contains('reveal-stagger')) {
            const children = Array.from(target.children) as HTMLElement[];
            children.forEach((child, idx) => {
              child.style.transitionDelay = `${idx * 90}ms`;
            });
          }

          // Unobserve once revealed for one-shot animation
          observer?.unobserve(target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Auto-mark standalone section headers and cards as .reveal
  const standaloneSelectors = [
    '.section-title-area',
    '.about-lead-card',
    '.journey-flow-box',
    '.countdown-card-wrapper',
    '.journey-step-card',
    '.timeline-node',
    '.eval-card',
    '.committee-card',
    '.faq-item',
    '.contact-grid',
    '.hero-challenge-banner-wrap',
    '.hero-audience-strip-wrap',
    '.hero-date-venue-bar',
  ];

  standaloneSelectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add('reveal');
      observer?.observe(el);
    });
  });

  // Auto-mark grid containers as .reveal-stagger
  const gridSelectors = [
    '.pillars-grid',
    '.about-tracks-grid',
    '.objectives-grid',
    '.tracks-cards-grid',
    '.prizes-cards-grid',
    '.challenges-grid',
    '.modes-grid',
    '.eval-grid',
    '.committee-grid',
    '.stats-grid',
    '.audience-options-grid',
    '.why-grid',
  ];

  gridSelectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add('reveal-stagger');
      observer?.observe(el);
    });
  });

  // Explicit .reveal elements
  document.querySelectorAll('.reveal').forEach((el) => {
    observer?.observe(el);
  });
}
