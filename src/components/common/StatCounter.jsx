import { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks';
import gsap from 'gsap';

export default function StatCounter({ end, suffix = '', prefix = '', label, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  useEffect(() => {
    if (!isVisible) return;

    // Parse end value into pure number
    const numericEnd = parseInt(end.toString().replace(/[^0-9]/g, ''));
    
    // Tween value and trigger state update
    const counterObject = { val: 0 };
    gsap.to(counterObject, {
      val: numericEnd,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.floor(counterObject.val));
      }
    });
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-text-secondary font-medium">{label}</div>
    </div>
  );
}
