import { useRef, useEffect } from 'react';
import { X, Mail, Briefcase, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import Button from '../common/Button';

export default function AuthDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Animate backdrop fade in and drawer slide in
      gsap.killTweensOf([backdropRef.current, drawerRef.current]);
      
      gsap.set(backdropRef.current, { display: 'block', opacity: 0 });
      gsap.set(drawerRef.current, { display: 'flex', x: '100%' });

      gsap.to(backdropRef.current, {
        opacity: 0.6,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(drawerRef.current, {
        x: '0%',
        duration: 0.35,
        ease: 'power3.out'
      });
    } else {
      // Animate drawer slide out and backdrop fade out
      gsap.killTweensOf([backdropRef.current, drawerRef.current]);
      
      gsap.to(drawerRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
          if (drawerRef.current) {
            drawerRef.current.style.display = 'none';
          }
        }
      });

      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          if (backdropRef.current) {
            backdropRef.current.style.display = 'none';
          }
        }
      });
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted login email');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 bg-black z-[9999] hidden cursor-pointer"
        style={{ backdropFilter: 'blur(4px)' }}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] bg-surface-dark-2 border-l border-border-dark z-[10000] shadow-2xl p-6 lg:p-8 flex flex-col justify-between transform translate-x-full overflow-y-auto"
        style={{ display: 'none' }}
        role="dialog"
        aria-modal="true"
        aria-label="Login drawer"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-dark">
            <span className="text-lg font-bold text-white flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#F66C3B"/>
                <path d="M12 15L18 20L12 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 25H28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              coding<span className="text-brand-orange">ninjas</span>
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Social Logins */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Login with</h2>
            
            {/* Google */}
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-3 px-4 py-3 border border-border-dark bg-transparent hover:bg-surface-dark-3 text-white rounded-lg font-bold transition-all cursor-pointer group"
            >
              <svg className="w-5 h-5 text-brand-orange group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.357-2.847-6.357-6.357s2.847-6.357 6.357-6.357c1.6 0 3.06.59 4.18 1.56l3.024-3.024C19.16 2.052 15.89 1 12.24 1 5.92 1 1 5.92 1 12.24s4.92 11.24 11.24 11.24c6.34 0 11.24-4.8 11.24-11.24 0-.79-.08-1.55-.22-2.295H12.24z" />
              </svg>
              Google
            </button>

            {/* Naukri */}
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-3 px-4 py-3 border border-border-dark bg-transparent hover:bg-surface-dark-3 text-white rounded-lg font-bold transition-all cursor-pointer group"
            >
              <Briefcase size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
              Naukri
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border-dark" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-surface-dark-2 px-3 text-text-muted font-semibold">
                OR
              </span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
                Enter email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-text-muted pointer-events-none">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  required
                  placeholder="Enter email here"
                  className="w-full pl-10 pr-4 py-3 bg-surface-dark-3 border border-border-dark rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full justify-center gap-2 py-3 cursor-pointer"
            >
              Continue <ArrowRight size={18} />
            </Button>
          </form>
        </div>

        {/* Footer info */}
        <p className="text-xs text-text-muted text-center leading-relaxed mt-8 border-t border-border-dark pt-4">
          By signing in, you agree to our{' '}
          <a href="#" className="text-brand-orange hover:underline">
            Privacy Policy
          </a>{' '}
          &{' '}
          <a href="#" className="text-brand-orange hover:underline">
            Terms of Use
          </a>
        </p>
      </div>
    </>
  );
}
