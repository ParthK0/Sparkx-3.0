/* ==========================================================================
   SparkX 3.0 — Simple Solid Loading Screen with Safety Timeout & Skip Option
   Uses official Galgotias University & SparkX 3.0 logos
   ========================================================================== */

import { analytics } from '../utils/analytics';

export function renderLoadingScreen(onComplete: () => void): HTMLElement {
  const overlay = document.createElement('div');
  overlay.className = 'sparkx-loader-overlay';
  overlay.id = 'loading-screen';

  overlay.innerHTML = `
    <button type="button" class="loader-skip-btn" id="loader-skip-btn" aria-label="Skip introductory loading screen">
      Skip &rarr;
    </button>

    <div class="loader-logos-wrap">
      <img src="/images/galgotias%20univeristy.png" alt="Galgotias University" class="loader-uni-logo" />
      <div class="loader-divider"></div>
      <img src="/images/sparkx.png" alt="SparkX 3.0" class="loader-sparkx-logo" />
    </div>

    <div class="loader-tagline">
      International Project Innovation Challenge
    </div>

    <div class="loader-progress-track">
      <div class="loader-progress-bar"></div>
    </div>

    <p class="loader-status-text">Loading SparkX 3.0 Experience...</p>
  `;

  let completed = false;
  const finishLoading = (reason = 'auto') => {
    if (completed) return;
    completed = true;
    analytics.track('System', 'Loading Screen Dismissed', reason);
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.remove();
      onComplete();
    }, 350);
  };

  // Skip button listener
  const skipBtn = overlay.querySelector('#loader-skip-btn');
  skipBtn?.addEventListener('click', () => finishLoading('user_skip'));

  // Standard smooth sprint dismissal (1.1s)
  const timer = setTimeout(() => {
    finishLoading('standard_timer');
  }, 1100);

  // Maximum hard fallback timeout (2.5s) to guarantee app never hangs
  setTimeout(() => {
    clearTimeout(timer);
    finishLoading('hard_timeout_safety');
  }, 2500);

  return overlay;
}
