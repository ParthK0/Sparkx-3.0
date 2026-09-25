import './style.css';
import { appState } from './state';
import { renderLoadingScreen } from './components/loadingScreen';
import { renderAudienceGateway, openAudienceGateway } from './components/audienceGateway';
import { renderNavbar } from './components/navbar';
import { renderHero, startHeroTypewriter } from './components/hero';
import { renderCountdown } from './components/countdown';
import { renderStatsBar } from './components/statsBar';
import { renderAbout } from './components/about';
import { renderJourney } from './components/journey';
import { renderTracks } from './components/tracks';
import { renderChallenges } from './components/challenges';
import { renderPrizes } from './components/prizes';
import { renderParticipationMode } from './components/participationMode';
import { renderTimeline } from './components/timeline';
import { renderEvaluation } from './components/evaluation';
import { renderCommittee } from './components/committee';
import { renderFAQ } from './components/faq';
import { renderContact } from './components/contact';
import { renderFooter } from './components/footer';
import { renderBackToTop } from './components/backToTop';
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

  main.appendChild(renderHero());
  main.appendChild(renderStatsBar());
  main.appendChild(renderAbout());
  main.appendChild(renderJourney());
  main.appendChild(renderTracks());
  main.appendChild(renderChallenges());
  main.appendChild(renderPrizes());
  main.appendChild(renderParticipationMode());
  main.appendChild(renderTimeline());
  main.appendChild(renderCountdown());
  main.appendChild(renderEvaluation());
  main.appendChild(renderCommittee());
  main.appendChild(renderFAQ());
  main.appendChild(renderContact());

  app.appendChild(main);
  app.appendChild(renderFooter());

  // Mount Floating Back to Top Button
  app.appendChild(renderBackToTop());

  // Mount Audience Selection Gateway (Modal)
  const gateway = renderAudienceGateway();
  app.appendChild(gateway);

  // Check if first visit in session
  const hasLoaded = sessionStorage.getItem('sparkx_visited');
  if (!hasLoaded) {
    sessionStorage.setItem('sparkx_visited', 'true');
    const loader = renderLoadingScreen(() => {
      openAudienceGateway();
      setTimeout(startHeroTypewriter, 300);
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

function mountChallengesEvalView(activeTab: 'challenges' | 'evaluation'): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  app.innerHTML = '';
  app.appendChild(renderChallengesEvaluationPage(activeTab));
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

  // 2. Attach persistent network status listener and indicator
  document.body.appendChild(renderNetworkStatus());

  // 3. Initialize Router with view callbacks
  router.init({
    onMountHome: (targetAnchor) => mountHomeView(targetAnchor),
    onMountRegister: () => mountRegisterView(),
    onMountChallengesEval: (tab) => mountChallengesEvalView(tab),
    onMountNotFound: (path) => mountNotFoundView(path),
  });

  // 4. Re-bind interactive cards and reveal effects when audience changes
  appState.subscribe(() => {
    setTimeout(() => {
      initCardTilt();
      initScrollReveal();
    }, 100);
  });

  console.log('SparkX 3.0 Beyond Boundaries initialized with routing, resilience, and offline detection.');
}

document.addEventListener('DOMContentLoaded', initApp);
