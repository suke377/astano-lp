import { useEffect } from 'react';

// Progressive enhancement: content stays readable without JS or observation support.
export function useScrollReveal() {
 useEffect(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const targets = Array.from(document.querySelectorAll<HTMLElement>(
   '#main .section-heading, #main .reasons > article, #main .media, #main .customer-case, #main .plan, #main .profile .reading, #main .flow, #main .pdf-gift'
  ));
  const reveal = (element: HTMLElement) => {
   element.classList.remove('reveal-pending');
   observer.unobserve(element);
  };
  const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) reveal(entry.target as HTMLElement);
   });
  }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });
  targets.forEach(element => {
   // Never hide the initial viewport or content above a direct anchor destination.
   if (element.getBoundingClientRect().top >= window.innerHeight) {
    element.classList.add('scroll-reveal', 'reveal-pending');
    observer.observe(element);
   }
  });
  const showAll = () => targets.forEach(reveal);
  const onMotionChange = () => { if (motion.matches) showAll(); };
  const onFocus = (event: FocusEvent) => {
   if (event.target instanceof Element) {
    const parent = event.target.closest<HTMLElement>('.reveal-pending');
    if (parent) reveal(parent);
   }
  };
  motion.addEventListener('change', onMotionChange);
  document.addEventListener('focusin', onFocus);
  window.addEventListener('beforeprint', showAll);
  return () => {
   observer.disconnect();
   targets.forEach(element => element.classList.remove('scroll-reveal', 'reveal-pending'));
   motion.removeEventListener('change', onMotionChange);
   document.removeEventListener('focusin', onFocus);
   window.removeEventListener('beforeprint', showAll);
  };
 }, []);
}
