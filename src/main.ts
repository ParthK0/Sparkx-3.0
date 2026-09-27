import './style.css';
import { appState } from './state';
import { renderLoadingScreen } from './components/loadingScreen';
import { renderAudienceGateway, openAudienceGateway } from './components/audienceGateway';
import { renderNavbar } from './components/navbar';
import { renderHero, startHeroTypewriter } from './components/hero';
import { renderStatsBar } from './components/statsBar';
import { renderAbout } from './components/about';
import { renderProNovelOverview } from './components/proNovelOverview';
import { render30DayChallengeOverview } from './components/thirtyDayOverview';
import { renderTimeline } from './components/timeline';
import { renderWhyParticipate } from './components/whyParticipate';
import { renderCountdown } from './components/countdown';
import { renderCommittee } from './components/committee';
import { renderFAQ } from './components/faq';
import { renderFooter } from './components/footer';
import { renderBackToTop } from './components/backToTop';
import { renderStickyMobileBar } from './components/stickyMobileBar';
import { renderNetworkStatus } from './components/networkStatus';
import { renderNotFoundPage } from './components/notFound';
import { renderRegisterPage } from './components/registerPage';
import { renderChallengesEvaluationPage, switchPortalTab } from './components/challengesEvaluationPage';
import { setupGlobalImageFallbacks } from './utils/imageFallback';
import { router } from './router';
import { initScrollReveal } from './animations/scrollReveal';
import { initCardTilt } from './animations/cardTilt';

let hasCompletedInitialLoad = false;

function transitionView(renderFn: () => void, targetScroll: number | string = 0): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) {
    renderFn();
    return;
  }

  // 1. Check if Modern View Transitions API is supported
  const hasViewTransition = 'startViewTransition' in document &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (hasViewTransition) {
    try {
      (document as any).startViewTransition(() => {
        renderFn();
        if (typeof targetScroll === 'string') {
          const el = document.getElementById(targetScroll);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: targetScroll, behavior: 'instant' });
        }
      });
      return;
    } catch {
      // Fallback to CSS animation below
    }
  }

  // 2. CSS Fallback Transition
  app.classList.add('page-transition-exit');
  setTimeout(() => {
    renderFn();
    if (typeof targetScroll === 'string') {
      const el = document.getElementById(targetScroll);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: targetScroll, behavior: 'instant' });
    }
    app.classList.remove('page-transition-exit');
    app.classList.add('page-transition-enter');
    requestAnimationFrame(() => {
      app.classList.remove('page-transition-enter');
      app.classList.add('page-transition-active');
      setTimeout(() => app.classList.remove('page-transition-active'), 250);
    });
  }, 120);
}

function renderHomeDOM(app: HTMLElement): void {
  app.innerHTML = '';

  // Append navbar and main sections
  app.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.id = 'main-content';

  // 1. Clear 5-Question Hero
  main.appendChild(renderHero());

  // 2. Stats Bar
  main.appendChild(renderStatsBar());

  // 3. From Ideas to Impact
  main.appendChild(renderAbout());

  // 4. SparkX 3.0 — Pro & Novel Challenges (Indian Semester Tracks)
  main.appendChild(renderProNovelOverview());

  // 5. SparkX 3.0 — 30-Day Innovation Challenge (AI Domains Overview)
  main.appendChild(render30DayChallengeOverview());

  // 6. Audience-Aware Timeline
  main.appendChild(renderTimeline());

  // 10. Countdown to Grand Showcase
  main.appendChild(renderCountdown());

  // 11. Why Participate
  main.appendChild(renderWhyParticipate());

  // 12. Academic Leadership & Committee
  main.appendChild(renderCommittee());

  // 14. FAQ & Inquiries
  main.appendChild(renderFAQ());

  app.appendChild(main);
  app.appendChild(renderFooter());

  // Mount Floating Back to Top Button
  app.appendChild(renderBackToTop());

  // Mount Sticky Mobile Registration Bar (< 768px viewports)
  app.appendChild(renderStickyMobileBar());

  // Initialize scroll-triggered animations and 3D card tilts
  initScrollReveal();
  initCardTilt();
}

function mountHomeView(targetAnchor?: string): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  const existingMain = app.querySelector('#main-content');
  if (existingMain) {
    if (targetAnchor) {
      const el = document.getElementById(targetAnchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  // Ensure Audience Selection Gateway is mounted on document.body
  if (!document.getElementById('audience-gateway')) {
    document.body.appendChild(renderAudienceGateway());
  }

  if (!hasCompletedInitialLoad) {
    hasCompletedInitialLoad = true;
    renderHomeDOM(app);

    // Initial load: show loading screen then open Indian/International selection gateway
    const loader = renderLoadingScreen(() => {
      setTimeout(startHeroTypewriter, 250);
      // Immediately open Choose Your SparkX Journey (Indian vs International)
      setTimeout(openAudienceGateway, 100);
      if (targetAnchor) {
        setTimeout(() => {
          const el = document.getElementById(targetAnchor);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    });
    document.body.appendChild(loader);
  } else {
    transitionView(() => {
      renderHomeDOM(app);
      setTimeout(startHeroTypewriter, 200);
    }, targetAnchor || 0);
  }
}

function mountRegisterView(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  transitionView(() => {
    app.innerHTML = '';
    app.appendChild(renderRegisterPage());
  });
}

function mountChallengesEvalView(activeTab: 'tracks' | 'challenges' | 'evaluation' = 'tracks', targetChallengeId?: string): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  const existingPortal = app.querySelector<HTMLElement>('#challenges-detail-portal');
  if (existingPortal) {
    // Portal already mounted! Smoothly switch tab without destroying the DOM
    switchPortalTab(activeTab, targetChallengeId);
    return;
  }

  transitionView(() => {
    app.innerHTML = '';
    app.appendChild(renderChallengesEvaluationPage(activeTab, targetChallengeId));
  });
}

function mountNotFoundView(missingPath: string): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  transitionView(() => {
    app.innerHTML = '';
    app.appendChild(renderNotFoundPage(missingPath));
  });
}

function initApp(): void {
  // 1. Setup global image fallback handlers for broken / slow images
  setupGlobalImageFallbacks();

  // 2. Attach network status listener with auto-dismiss
  document.body.appendChild(renderNetworkStatus());

  // 3. Initialize Router with view callbacks
  router.init({
    onMountHome: (targetAnchor) => mountHomeView(targetAnchor),
    onMountRegister: () => mountRegisterView(),
    onMountChallengesEval: (tab, targetChallengeId) => mountChallengesEvalView(tab, targetChallengeId),
    onMountNotFound: (path) => mountNotFoundView(path),
  });

  // 4. Re-bind interactive cards and reveal effects when audience changes
  appState.subscribe(() => {
    setTimeout(() => {
      initCardTilt();
      initScrollReveal();
    }, 100);
  });

  console.log('SparkX 3.0 initialized with streamlined homepage flow, Google Fonts, and mobile sticky registration.');
}

document.addEventListener('DOMContentLoaded', initApp);
