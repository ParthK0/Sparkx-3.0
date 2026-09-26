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
import { renderEvaluation } from './components/evaluation';
import { renderCommittee } from './components/committee';
import { renderFAQ } from './components/faq';
import { renderFooter } from './components/footer';
import { renderBackToTop } from './components/backToTop';
import { renderStickyMobileBar } from './components/stickyMobileBar';
import { renderNetworkStatus } from './components/networkStatus';
import { renderNotFoundPage } from './components/notFound';
import { renderRegisterPage } from './components/registerPage';
import { renderChallengesEvaluationPage } from './components/challengesEvaluationPage';
import { setupGlobalImageFallbacks } from './utils/imageFallback';
import { router } from './router';
import { initScrollReveal } from './animations/scrollReveal';
import { initCardTilt } from './animations/cardTilt';

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
    }
    return;
  }

  // Clear existing content
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

  // 12. Evaluation Rubric Callout
  main.appendChild(renderEvaluation());

  // 13. Academic Leadership & Committee
  main.appendChild(renderCommittee());

  // 14. FAQ & Inquiries
  main.appendChild(renderFAQ());

  app.appendChild(main);
  app.appendChild(renderFooter());

  // Mount Floating Back to Top Button
  app.appendChild(renderBackToTop());

  // Mount Sticky Mobile Registration Bar (< 768px viewports)
  app.appendChild(renderStickyMobileBar());

  // Mount Audience Selection Gateway (Modal)
  const gateway = renderAudienceGateway();
  app.appendChild(gateway);

  // Check if first visit in session and whether audience has been chosen
  const hasLoaded = sessionStorage.getItem('sparkx_visited');
  const hasChosenAudience = sessionStorage.getItem('sparkx_audience_chosen');

  if (!hasLoaded) {
    sessionStorage.setItem('sparkx_visited', 'true');
    const loader = renderLoadingScreen(() => {
      setTimeout(startHeroTypewriter, 300);
      // Immediately open Choose Your SparkX Journey after loading screen!
      if (!hasChosenAudience) {
        setTimeout(openAudienceGateway, 100);
      }
      if (targetAnchor) {
        setTimeout(() => {
          const el = document.getElementById(targetAnchor);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    });
    app.appendChild(loader);
  } else {
    setTimeout(startHeroTypewriter, 200);
    // If returning in session but hasn't picked audience yet, open gateway
    if (!hasChosenAudience) {
      setTimeout(openAudienceGateway, 100);
    }
    if (targetAnchor) {
      setTimeout(() => {
        const el = document.getElementById(targetAnchor);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }

  // Initialize scroll-triggered animations and 3D card tilts
  initScrollReveal();
  initCardTilt();
}

function mountRegisterView(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  app.innerHTML = '';
  app.appendChild(renderRegisterPage());
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mountChallengesEvalView(activeTab: 'tracks' | 'challenges' | 'evaluation' = 'tracks', targetChallengeId?: string): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  app.innerHTML = '';
  app.appendChild(renderChallengesEvaluationPage(activeTab, targetChallengeId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mountNotFoundView(missingPath: string): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  app.innerHTML = '';
  app.appendChild(renderNotFoundPage(missingPath));
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
