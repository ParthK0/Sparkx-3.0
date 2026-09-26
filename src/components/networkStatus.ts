/* ==========================================================================
   SparkX 3.0 — Network Status & Offline Detection Banner
   Detects online/offline transitions and informs the user gracefully.
   ========================================================================== */

import { analytics } from '../utils/analytics';

export function renderNetworkStatus(): HTMLElement {
  const container = document.createElement('aside');
  container.className = 'sparkx-network-indicator';
  container.id = 'network-status-indicator';
  container.setAttribute('role', 'status');
  container.setAttribute('aria-live', 'polite');

  let dismissTimeout: ReturnType<typeof setTimeout> | null = null;

  // Auto-dismiss offline banner after 5 seconds so it never permanently occupies the screen
  function showStatus(isOnline: boolean) {
    if (dismissTimeout) {
      clearTimeout(dismissTimeout);
      dismissTimeout = null;
    }

    if (!isOnline) {
      document.body.classList.add('is-offline');
      container.className = 'sparkx-network-indicator status-offline visible';
      container.innerHTML = `
        <div class="network-indicator-content">
          <div class="network-icon">⚠️</div>
          <div class="network-msg">
            <strong>Connection Notice</strong>
            <span>You appear to be offline. Content remains accessible.</span>
          </div>
          <button type="button" class="network-retry-btn" id="network-retry-btn" aria-label="Dismiss notice">
            Dismiss
          </button>
        </div>
      `;

      analytics.track('System', 'Offline State Triggered');

      const retryBtn = container.querySelector('#network-retry-btn');
      retryBtn?.addEventListener('click', () => {
        container.classList.remove('visible');
      });

      // Auto dismiss after 5 seconds to prevent permanent UI obstruction
      dismissTimeout = setTimeout(() => {
        container.classList.remove('visible');
      }, 5000);
    } else {
      document.body.classList.remove('is-offline');
      container.className = 'sparkx-network-indicator status-online visible';
      container.innerHTML = `
        <div class="network-indicator-content">
          <div class="network-icon">🟢</div>
          <div class="network-msg">
            <strong>Connection Active</strong>
            <span>Online connectivity confirmed.</span>
          </div>
        </div>
      `;

      analytics.track('System', 'Online State Restored');

      // Auto dismiss after 2.5 seconds
      dismissTimeout = setTimeout(() => {
        container.classList.remove('visible');
      }, 2500);
    }
  }

  // Setup event listeners - only trigger on genuine online/offline transitions, not on startup
  window.addEventListener('offline', () => showStatus(false));
  window.addEventListener('online', () => showStatus(true));

  return container;
}
