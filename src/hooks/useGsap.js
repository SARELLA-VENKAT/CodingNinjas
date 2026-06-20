import { useEffect } from 'react';
import gsap from 'gsap';

/**
 * A safe hook to run GSAP animations in React.
 * Automatically handles cleanup (reverting tweens and timelines)
 * on unmount or dependency updates using gsap.context().
 * 
 * @param {Function} animationFn - The function containing GSAP animations
 * @param {Array} deps - Dependency array for re-triggering the animation
 * @param {Object} scopeRef - Optional React ref limiting the search selector scope
 */
export function useGsap(animationFn, deps = [], scopeRef = null) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      animationFn();
    }, scopeRef || undefined);

    return () => ctx.revert();
  }, deps);
}
