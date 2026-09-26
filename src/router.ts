/* ==========================================================================
   SparkX 3.0 — Client-Side Hash Router
   Coordinates full-page views, dedicated portals, and 404 fallback routing.
   ========================================================================== */

import { analytics } from './utils/analytics';

export type AppViewType = 'home' | 'register' | 'challenges-evaluation' | '404';
export type PortalTab = 'tracks' | 'challenges' | 'evaluation';

export interface RouteHandler {
  onMountHome: (targetAnchor?: string) => void;
  onMountRegister: () => void;
  onMountChallengesEval: (activeTab: PortalTab, targetChallengeId?: string) => void;
  onMountNotFound: (path: string) => void;
}

const KNOWN_HOME_ANCHORS = new Set([
  'hero',
  'stats',
  'about',
  'pro-novel',
  'thirty-day-challenge',
  'challenges',
  'tracks',
  'prizes',
  'timeline',
  'countdown',
  'evaluation',
  'committee',
  'faq',
  'contact',
  'register',
]);

export class AppRouter {
  private handler: RouteHandler | null = null;
  private currentView: AppViewType = 'home';

  public init(handler: RouteHandler): void {
    this.handler = handler;

    window.addEventListener('hashchange', () => {
      this.resolveRoute();
    });

    // Also check for direct pathname fallback (e.g. /register or /challenges)
    this.resolveRoute();
  }

  public navigate(hash: string): void {
    window.location.hash = hash;
  }

  private resolveRoute(): void {
    if (!this.handler) return;

    let hash = window.location.hash.trim();
    const pathname = window.location.pathname.toLowerCase();

    // Support clean URL aliases if server passes them through
    if (!hash && (pathname.includes('/register') || pathname.endsWith('/register/'))) {
      hash = '#/register';
    }

    // 1. Root / Empty Hash -> Home
    if (!hash || hash === '#' || hash === '#/') {
      this.setView('home');
      this.handler.onMountHome();
      document.title = 'SparkX 3.0 Beyond Boundaries | International Project Innovation Challenge';
      return;
    }

    // 2. Dedicated Registration Portal
    if (hash === '#/register' || hash === '#/apply') {
      this.setView('register');
      this.handler.onMountRegister();
      document.title = 'Register | SparkX 3.0 Beyond Boundaries';
      analytics.track('Navigation', 'Route: /register');
      return;
    }

    // 3. Dedicated Challenges & Evaluation Portal
    if (hash.startsWith('#/challenges/')) {
      const challengeId = hash.replace('#/challenges/', '').trim().toLowerCase();
      this.setView('challenges-evaluation');
      this.handler.onMountChallengesEval('challenges', challengeId);
      document.title = 'AI Challenge Domain Blueprint | SparkX 3.0';
      analytics.track('Navigation', `Route: /challenges/${challengeId}`);
      return;
    }

    if (hash === '#/tracks' || hash === '#/program-tracks') {
      this.setView('challenges-evaluation');
      this.handler.onMountChallengesEval('tracks');
      document.title = 'Program Tracks & Curriculum | SparkX 3.0';
      analytics.track('Navigation', 'Route: /tracks');
      return;
    }

    if (hash === '#/challenges' || hash === '#/problem-statements') {
      this.setView('challenges-evaluation');
      this.handler.onMountChallengesEval('challenges');
      document.title = 'AI Challenges & Problem Statements | SparkX 3.0';
      analytics.track('Navigation', 'Route: /challenges');
      return;
    }

    if (hash === '#/evaluation' || hash === '#/rubric' || hash === '#/schedule') {
      this.setView('challenges-evaluation');
      this.handler.onMountChallengesEval('evaluation');
      document.title = 'Evaluation Rubric & Schedule | SparkX 3.0';
      analytics.track('Navigation', 'Route: /evaluation');
      return;
    }

    if (hash === '#/challenges-evaluation') {
      this.setView('challenges-evaluation');
      this.handler.onMountChallengesEval('tracks');
      document.title = 'Program Tracks & Challenges | SparkX 3.0';
      analytics.track('Navigation', 'Route: /challenges-evaluation');
      return;
    }

    // 4. In-page anchor link on Home page (e.g. #about, #tracks, #timeline)
    const anchorName = hash.replace(/^#\/?/, '').split('?')[0];
    if (KNOWN_HOME_ANCHORS.has(anchorName)) {
      this.setView('home');
      this.handler.onMountHome(anchorName);
      return;
    }

    // 5. Unknown hash or 404
    this.setView('404');
    this.handler.onMountNotFound(hash);
    document.title = '404 — Page Not Found | SparkX 3.0';
    analytics.track('Navigation', 'Route: 404 Not Found', hash);
  }

  private setView(view: AppViewType): void {
    this.currentView = view;
  }

  public getCurrentView(): AppViewType {
    return this.currentView;
  }
}

export const router = new AppRouter();
