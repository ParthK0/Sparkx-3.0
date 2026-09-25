import { Audience } from './types';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'sparkx_audience_preference';

class AppState {
  private currentAudience: Audience = 'india';
  private listeners: Array<(audience: Audience) => void> = [];

  constructor() {
    this.init();
  }

  private init(): void {
    // 1. Check URL parameters
    const params = new URLSearchParams(window.location.search);
    const paramAudience = params.get('audience')?.toLowerCase();

    // 2. Check path (/india or /international)
    const path = window.location.pathname.toLowerCase();

    let resolved: Audience | null = null;
    if (paramAudience === 'india' || paramAudience === 'international') {
      resolved = paramAudience;
    } else if (path.includes('international')) {
      resolved = 'international';
    } else if (path.includes('india')) {
      resolved = 'india';
    } else {
      // 3. Check localStorage
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached === 'india' || cached === 'international') {
        resolved = cached as Audience;
      }
    }

    this.currentAudience = resolved || 'india';
    this.updateUrl(this.currentAudience, false);
  }

  public getAudience(): Audience {
    return this.currentAudience;
  }

  public setAudience(audience: Audience, triggerConfetti = true): void {
    if (this.currentAudience === audience) return;

    this.currentAudience = audience;
    localStorage.setItem(STORAGE_KEY, audience);
    this.updateUrl(audience, true);

    if (triggerConfetti) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.15 },
          colors: audience === 'india' ? ['#f59e0b', '#ffffff', '#10b981'] : ['#3b82f6', '#06b6d4', '#fbbf24']
        });
      } catch (e) {
        // Fallback silently if confetti fails
      }
    }

    this.notify();
  }

  public subscribe(callback: (audience: Audience) => void): () => void {
    this.listeners.push(callback);
    callback(this.currentAudience);
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener(this.currentAudience);
    }
    // Update data attribute on body for CSS targeting
    document.documentElement.setAttribute('data-audience', this.currentAudience);
  }

  private updateUrl(audience: Audience, push = true): void {
    const url = new URL(window.location.href);
    url.searchParams.set('audience', audience);
    if (push) {
      window.history.pushState({ audience }, '', url.toString());
    } else {
      window.history.replaceState({ audience }, '', url.toString());
    }
  }
}

export const appState = new AppState();
