/*
 * Effekt-Steuerung — Experiment (Branch: experiment/effekte).
 * Scroll-Reveals, Linien-Zeichnen, Hero-Parallax und Scroll-Rail.
 * Ohne dieses Script (oder mit reduced motion) bleibt die Seite statisch.
 */

const docEl = document.documentElement;
docEl.classList.add('js');

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
  setupReveals();
  setupLines();
}
setupScrollLoop();

/* Grid-/Listen-Container werden in ihre Kinder aufgelöst, damit
   Einträge gestaffelt statt als Block erscheinen. */
function isListy(el) {
  if (el.children.length < 2) return false;
  if (el.matches('ol, ul, dl')) return true;
  return getComputedStyle(el).display === 'grid';
}

function collectLeaves(el, depth, out) {
  if (depth < 2 && isListy(el)) {
    for (const child of el.children) collectLeaves(child, depth + 1, out);
  } else {
    out.push(el);
  }
}

function setupReveals() {
  const targets = [];

  document
    .querySelectorAll('.section > .container, footer > .container')
    .forEach((container) => {
      for (const child of container.children) {
        const leaves = [];
        collectLeaves(child, 0, leaves);
        leaves.forEach((el, i) => {
          el.classList.add('fx');
          el.style.setProperty('--fx-delay', `${Math.min(i, 10) * 80}ms`);
          targets.push(el);
        });
      }
    });

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => io.observe(el));
}

function setupLines() {
  const candidates = document.querySelectorAll(
    '.werdegang__row, .ablauf__grid, .step, .kv'
  );

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.3 }
  );

  candidates.forEach((el) => {
    if (parseFloat(getComputedStyle(el).borderTopWidth) > 0) {
      el.classList.add('fx-line');
      io.observe(el);
    }
  });
}

/* Ein rAF-Loop für alles Scroll-Gebundene: Parallax-Ghost + Rail. */
function setupScrollLoop() {
  const rail = document.querySelector('.rail');
  const railItems = rail
    ? [...rail.querySelectorAll('a[href^="#"]')]
        .map((a) => ({ a, sec: document.querySelector(a.getAttribute('href')) }))
        .filter((x) => x.sec)
    : [];
  const parallaxEls = reduced
    ? []
    : [...document.querySelectorAll('[data-parallax]')];

  if (!rail && parallaxEls.length === 0) return;

  let ticking = false;

  const update = () => {
    ticking = false;

    if (rail) {
      rail.classList.toggle(
        'is-visible',
        window.scrollY > window.innerHeight * 0.5
      );
      const mid = window.scrollY + window.innerHeight * 0.4;
      let current = null;
      for (const x of railItems) if (x.sec.offsetTop <= mid) current = x;
      for (const x of railItems)
        x.a.classList.toggle('is-active', x === current);
    }

    for (const el of parallaxEls) {
      const factor = parseFloat(el.dataset.parallax || '0.2');
      el.style.setProperty(
        '--par',
        `${(window.scrollY * factor).toFixed(1)}px`
      );
    }
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );

  update();
}
