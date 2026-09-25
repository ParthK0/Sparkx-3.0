/* ==========================================================================
   SparkX 3.0 — Client-side Event Analytics & Interaction Tracker
   Tracks registrations, audience toggles, modal views, and session metrics.
   ========================================================================== */

export interface AnalyticsEvent {
  category: 'Conversion' | 'Audience' | 'Navigation' | 'Interaction' | 'System';
  action: string;
  label?: string;
  value?: number;
  timestamp: string;
}

const STORAGE_KEY = 'sparkx3_analytics_events';
const SESSION_START_KEY = 'sparkx3_session_start';

class AnalyticsTracker {
  private events: AnalyticsEvent[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      if (!sessionStorage.getItem(SESSION_START_KEY)) {
        sessionStorage.setItem(SESSION_START_KEY, new Date().toISOString());
      }
      this.loadPersistedEvents();
    }
  }

  private loadPersistedEvents(): void {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        this.events = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('[SparkX Analytics] Unable to load saved events', e);
    }
  }

  private saveEvents(): void {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this.events.slice(-50)));
    } catch {
      // Ignore quota errors
    }
  }

  public track(category: AnalyticsEvent['category'], action: string, label?: string, value?: number): void {
    const event: AnalyticsEvent = {
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
    };

    this.events.push(event);
    this.saveEvents();

    // Check for standard Google Analytics / GTM dataLayer
    if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: action,
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    if (import.meta.env?.DEV) {
      console.log(`📊 [Analytics Tracked] ${category} > ${action}`, label ? `(${label})` : '');
    }
  }

  public getSessionSummary() {
    return {
      sessionStart: sessionStorage.getItem(SESSION_START_KEY),
      totalEvents: this.events.length,
      events: [...this.events],
    };
  }
}

export const analytics = new AnalyticsTracker();
