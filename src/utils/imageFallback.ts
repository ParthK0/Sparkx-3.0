/* ==========================================================================
   SparkX 3.0 — Image Error Handling & Fallback Utility
   Gracefully replaces broken image requests with stylish SVG avatars / initials.
   ========================================================================== */

export function setupGlobalImageFallbacks(): void {
  // Capture image errors during bubble/capture phase
  window.addEventListener(
    'error',
    (event: ErrorEvent) => {
      const target = event.target;
      if (target instanceof HTMLImageElement) {
        handleImageError(target);
      }
    },
    true // Capture phase to catch image loading failures
  );
}

export function handleImageError(img: HTMLImageElement): void {
  // Prevent infinite retry loop if fallback also errors
  if (img.dataset.hasFallback === 'true') {
    return;
  }
  img.dataset.hasFallback = 'true';

  const alt = img.alt || 'SparkX';
  const initials = getInitialsFromAlt(alt);

  // If inside an avatar or person card container, handle gracefully
  const parent = img.parentElement;
  if (parent && (parent.classList.contains('patron-avatar') || parent.classList.contains('expert-avatar') || parent.classList.contains('leader-avatar') || parent.classList.contains('faculty-avatar') || parent.classList.contains('eval-avatar') || parent.classList.contains('contact-img-wrap'))) {
    parent.classList.remove('has-img');
    parent.classList.add('fallback-avatar');
    img.style.display = 'none';

    // Check if initials element already exists
    if (!parent.querySelector('.avatar-initials')) {
      const fallbackSpan = document.createElement('span');
      fallbackSpan.className = 'avatar-initials';
      fallbackSpan.textContent = initials;
      parent.appendChild(fallbackSpan);
    }
  } else {
    // Generate inline SVG placeholder with initials
    const svgFallback = generateSvgAvatar(initials);
    img.src = svgFallback;
    img.classList.add('img-fallback-applied');
  }
}

function getInitialsFromAlt(name: string): string {
  return name
    .replace('Prof.', '')
    .replace('(Dr.)', '')
    .replace('Dr.', '')
    .replace('Mr.', '')
    .replace('Ms.', '')
    .trim()
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(p => p[0]?.toUpperCase())
    .join('') || 'SX';
}

function generateSvgAvatar(initials: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <rect width="100" height="100" rx="20" fill="#1e3a8a"/>
    <text x="50" y="58" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
