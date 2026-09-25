import { openAudienceGateway } from './audienceGateway';
import { typewrite } from '../animations/typewriter';

export function renderHero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero-section';
  section.id = 'hero';

  section.innerHTML = `
    <!-- Ambient glowing backdrop orbs -->
    <div class="hero-bg-fx">
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="container hero-container">
      <!-- Official Galgotias University SparkX 3.0 Hero Banner: Responsive Desktop & Mobile -->
      <div class="hero-home-poster-container">
        <picture class="hero-home-picture">
          <source media="(max-width: 768px)" srcset="/images/mobile.png" />
          <source media="(min-width: 769px)" srcset="/images/desktop.png" />
          <img 
            src="/images/desktop.png" 
            alt="Galgotias University SparkX 3.0 Beyond Boundaries — 30-Day Innovation Challenge" 
            class="hero-home-banner-img"
            loading="eager"
          />
        </picture>
        <div class="hero-banner-quick-actions">
          <a href="#tracks" class="btn btn-primary btn-lg">
            <span>Explore Innovation Tracks</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button type="button" class="btn btn-secondary btn-lg banner-choose-path-btn">
            <span>Choose Indian / International Path</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach button interaction to open the audience modal
  const bannerChooseBtn = section.querySelector('.banner-choose-path-btn') as HTMLElement;
  bannerChooseBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openAudienceGateway();
  });

  return section;
}

export function startHeroTypewriter(): void {
  const el = document.querySelector<HTMLElement>('#hero-typewriter');
  if (el) {
    typewrite(el, 'Global Ideas • Global Impact • Beyond Boundaries', 35);
  }
}
