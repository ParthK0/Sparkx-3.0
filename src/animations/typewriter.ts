/**
 * Reusable Typewriter Animation Utility for SparkX 3.0
 */

export function typewrite(
  el: HTMLElement,
  text: string,
  speed: number = 38
): Promise<void> {
  el.textContent = '';
  el.classList.add('typewriter-cursor');

  return new Promise((resolve) => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(timer);
        // Keep blinking cursor briefly, then remove
        setTimeout(() => {
          el.classList.remove('typewriter-cursor');
          resolve();
        }, 1200);
      }
    }, speed);
  });
}
