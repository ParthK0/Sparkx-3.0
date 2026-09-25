import './style.css';
import { renderNavbar } from './components/navbar';
import { renderHero } from './components/hero';
import { renderCountdown } from './components/countdown';
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

function initApp(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) {
    console.error('Root #app container not found.');
    return;
  }

  // Clear existing content
  app.innerHTML = '';

  // Append all structured components in exact logical hierarchy
  app.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.id = 'main-content';

  main.appendChild(renderHero());
  main.appendChild(renderCountdown());
  main.appendChild(renderAbout());
  main.appendChild(renderJourney());
  main.appendChild(renderTracks());
  main.appendChild(renderChallenges());
  main.appendChild(renderPrizes());
  main.appendChild(renderParticipationMode());
  main.appendChild(renderTimeline());
  main.appendChild(renderEvaluation());
  main.appendChild(renderCommittee());
  main.appendChild(renderFAQ());
  main.appendChild(renderContact());

  app.appendChild(main);
  app.appendChild(renderFooter());

  console.log('SparkX 3.0 Beyond Boundaries mounted successfully in TypeScript.');
}

document.addEventListener('DOMContentLoaded', initApp);
