import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { useGsap } from '../../hooks';
import gsap from 'gsap';

export default function CTABanner() {
  const containerRef = useRef(null);

  useGsap(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%'
      }
    });

    tl.from('.cta-animate-headline', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out'
    });

    tl.from('.cta-animate-sub', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4');

    tl.from('.cta-animate-btn', {
      y: 20,
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: 'back.out(1.5)'
    }, '-=0.3');

    // Subtle pulsing glow on the button
    gsap.to('.cta-btn-glow', {
      boxShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(246, 108, 59, 0.2)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, [], containerRef);

  return (
    <section ref={containerRef} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange-hover to-brand-accent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-site mx-auto px-4 lg:px-6 text-center">
        <div className="cta-animate-headline inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
          <Sparkles size={14} className="text-white" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">Join 200K+ Learners</span>
        </div>

        <h2 className="cta-animate-headline text-[28px] lg:text-[40px] font-extrabold text-white mb-4 leading-tight">
          Are you ready to transform your career?
        </h2>
        <p className="cta-animate-sub text-base lg:text-lg text-white/80 mb-8 max-w-lg mx-auto">
          Join 200,000+ students who have already taken the leap with Coding Ninjas
        </p>
        <div className="cta-animate-btn">
          <Link to="/courses">
            <Button variant="white" size="lg" className="cta-btn-glow text-brand-orange font-extrabold hover:scale-105 transition-transform duration-300">
              Explore our courses now
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
