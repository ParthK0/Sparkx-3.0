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
            <strong>Connection Lost</strong>
            <span>You are currently offline. Showing cached SparkX 3.0 content.</span>
          </div>
          <button type="button" class="network-retry-btn" id="network-retry-btn" aria-label="Retry connection">
            Retry
          </button>
        </div>
      `;

      analytics.track('System', 'Offline State Triggered');

      const retryBtn = container.querySelector('#network-retry-btn');
      retryBtn?.addEventListener('click', () => {
        if (navigator.onLine) {
          showStatus(true);
        } else {
          // Shake animation
          container.classList.add('shake');
          setTimeout(() => container.classList.remove('shake'), 500);
        }
      });
    } else {
      document.body.classList.remove('is-offline');
      container.className = 'sparkx-network-indicator status-online visible';
      container.innerHTML = `
        <div class="network-indicator-content">
          <div class="network-icon">🟢</div>
          <div class="network-msg">
            <strong>Connection Restored</strong>
            <span>You are back online!</span>
          </div>
        </div>
      `;

      analytics.track('System', 'Online State Restored');

      // Auto dismiss after 3 seconds
      dismissTimeout = setTimeout(() => {
        container.classList.remove('visible');
      }, 3200);
    }
  }

  // Setup event listeners
  window.addEventListener('offline', () => showStatus(false));
  window.addEventListener('online', () => showStatus(true));

  // Initial check on load
  if (!navigator.onLine) {
    showStatus(false);
  }

  return container;
}
