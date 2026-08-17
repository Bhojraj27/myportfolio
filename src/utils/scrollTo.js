let lenisInstance = null;

export function setLenis(lenis) {
  lenisInstance = lenis;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToSection(href, offset = -80) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset, duration: 1.2 });
    return;
  }

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
