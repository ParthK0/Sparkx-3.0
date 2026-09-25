import { EVENT_DETAILS } from '../data/content';

export function renderCountdown(): HTMLElement {
  const container = document.createElement('section');
  container.className = 'countdown-section';
  container.id = 'countdown';

  container.innerHTML = `
    <div class="container">
      <div class="countdown-card-wrapper">
        <div class="countdown-header">
          <span class="countdown-eyebrow">Countdown to Grand Exhibition</span>
          <h2 class="countdown-headline">The Innovation Journey Begins In</h2>
          <p class="countdown-sub">Grand Showcase at Galgotias University & Global Online Evaluation • 25 November 2026</p>
        </div>

        <div class="countdown-grid" id="countdown-timer">
          <div class="countdown-unit-box">
            <div class="time-digit-container">
              <span class="time-digit" id="timer-days">00</span>
            </div>
            <span class="time-label">Days</span>
          </div>

          <div class="countdown-separator">:</div>

          <div class="countdown-unit-box">
            <div class="time-digit-container">
              <span class="time-digit" id="timer-hours">00</span>
            </div>
            <span class="time-label">Hours</span>
          </div>

          <div class="countdown-separator">:</div>

          <div class="countdown-unit-box">
            <div class="time-digit-container">
              <span class="time-digit" id="timer-minutes">00</span>
            </div>
            <span class="time-label">Minutes</span>
          </div>

          <div class="countdown-separator">:</div>

          <div class="countdown-unit-box">
            <div class="time-digit-container">
              <span class="time-digit" id="timer-seconds">00</span>
            </div>
            <span class="time-label">Seconds</span>
          </div>
        </div>

        <div class="countdown-footer-bar">
          <div class="live-status">
            <span class="pulse-indicator"></span>
            <span class="status-msg">Idea Submissions Open Until 10 October 2026</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Start live tick
  startCountdown(container);

  return container;
}

function startCountdown(root: HTMLElement): void {
  const targetDate = new Date(EVENT_DETAILS.countdownTarget).getTime();

  const daysEl = root.querySelector('#timer-days') as HTMLElement;
  const hoursEl = root.querySelector('#timer-hours') as HTMLElement;
  const minsEl = root.querySelector('#timer-minutes') as HTMLElement;
  const secsEl = root.querySelector('#timer-seconds') as HTMLElement;

  function setDigitWithAnimation(el: HTMLElement | null, newText: string): void {
    if (!el) return;
    if (el.textContent === newText) return;
    el.textContent = newText;
    el.classList.remove('tick');
    void el.offsetWidth;
    el.classList.add('tick');
  }

  function update(): void {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      setDigitWithAnimation(daysEl, '00');
      setDigitWithAnimation(hoursEl, '00');
      setDigitWithAnimation(minsEl, '00');
      setDigitWithAnimation(secsEl, '00');
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDigitWithAnimation(daysEl, String(days).padStart(2, '0'));
    setDigitWithAnimation(hoursEl, String(hours).padStart(2, '0'));
    setDigitWithAnimation(minsEl, String(minutes).padStart(2, '0'));
    setDigitWithAnimation(secsEl, String(seconds).padStart(2, '0'));
  }

  update();
  setInterval(update, 1000);
}
