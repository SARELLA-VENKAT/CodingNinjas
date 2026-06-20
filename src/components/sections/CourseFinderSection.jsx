import { useState, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { useGsap } from '../../hooks';
import gsap from 'gsap';

export default function CourseFinderSection() {
  const [formData, setFormData] = useState({ experience: '', topic: '', name: '', phone: '', email: '' });
  const [showRecommendation, setShowRecommendation] = useState(false);
  const containerRef = useRef(null);
  const recommendationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.experience || !formData.topic || !formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }
    setShowRecommendation(true);

    setTimeout(() => {
      if (recommendationRef.current) {
        gsap.fromTo(recommendationRef.current,
          { scale: 0.8, opacity: 0, y: 15 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.8)' }
        );
      }
    }, 50);

    setTimeout(() => {
      if (recommendationRef.current) {
        gsap.to(recommendationRef.current, {
          scale: 0.8,
          opacity: 0,
          y: 10,
          duration: 0.3,
          onComplete: () => setShowRecommendation(false)
        });
      }
    }, 6000);
  };

  useGsap(() => {
    // Entrance animations on scroll
    gsap.from('.finder-animate-left', {
      x: -40,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    gsap.from('.finder-animate-right', {
      x: 40,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    // Slanted cards stagger fade-in
    gsap.from('.slanted-card', {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.slanted-card-container',
        start: 'top 85%',
      }
    });

    // Pulse orange glow behind the form container
    gsap.to('.finder-form-card', {
      boxShadow: '0 0 50px rgba(246, 108, 59, 0.08), 0 0 100px rgba(246, 108, 59, 0.03)',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, [], containerRef);

  const handleFocus = (e) => {
    gsap.to(e.target, {
      borderColor: '#F66C3B',
      boxShadow: '0 0 10px rgba(246, 108, 59, 0.2)',
      duration: 0.2
    });
  };

  const handleBlur = (e) => {
    gsap.to(e.target, {
      borderColor: '#2D2D2D',
      boxShadow: 'none',
      duration: 0.2
    });
  };

  // Wireframe Cube SVG Icon
  const CubeIcon = () => (
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-dark-3 border border-border-dark flex items-center justify-center text-brand-orange group-hover:border-brand-orange/40 group-hover:bg-brand-orange/5 transition-all">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    </div>
  );

  return (
    <section ref={containerRef} className="relative py-16 lg:py-24 bg-surface-black border-t border-border-dark overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-orange/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-[5%] w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-site mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Slanted Cards */}
          <div className="finder-animate-left flex flex-col justify-center">
            <h2 className="text-[28px] lg:text-[40px] font-extrabold text-white leading-tight mb-8 max-w-lg">
              Ready to become a top talent in today's job market
            </h2>

            {/* Vertically stacked, slanted cards container */}
            <div className="slanted-card-container space-y-6 max-w-md w-full">
              {[
                { title: 'Data scientist', angle: 'rotate-[-3deg] translate-x-1 hover:rotate-0 hover:-translate-y-1' },
                { title: 'Front end Dev', angle: 'rotate-[2deg] -translate-x-1 hover:rotate-0 hover:-translate-y-1' },
                { title: 'Full stack developer', angle: 'rotate-[-1deg] translate-x-2 hover:rotate-0 hover:-translate-y-1' }
              ].map((card, i) => (
                <div
                  key={i}
                  className={`slanted-card group flex items-center gap-4 p-5 bg-[#16213e]/40 border border-border-dark/60 rounded-xl transition-all duration-300 cursor-default select-none shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-brand-orange/30 hover:bg-[#16213e]/60 transform ${card.angle}`}
                >
                  <CubeIcon />
                  <span className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                    {card.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Course Finder Form */}
          <div className="finder-animate-right">
            <div className="finder-form-card bg-[#16213e]/20 border border-border-dark rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-orange/10 to-transparent rounded-bl-[100px] pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-6">Let's find the right course for you</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Custom radio buttons for Experience */}
                <div className="space-y-3">
                  <span className="block text-xs font-bold text-text-muted uppercase tracking-wider">Experience</span>
                  <div className="space-y-2.5">
                    {[
                      { value: 'tech', label: 'Working Professional - Technical Roles' },
                      { value: 'non-tech', label: 'Working Professional - Non Technical' },
                      { value: 'student-final', label: 'College Student - Final Year' },
                      { value: 'student-early', label: 'College Student - 1st to Pre-final Year' },
                      { value: 'others', label: 'Others' }
                    ].map((opt) => (
                      <label 
                        key={opt.value} 
                        className="flex items-center gap-3 cursor-pointer group text-sm text-text-secondary hover:text-white transition-colors"
                      >
                        <input
                          type="radio"
                          name="experience"
                          value={opt.value}
                          checked={formData.experience === opt.value}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="sr-only"
                        />
                        {/* Custom radio indicator */}
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                          formData.experience === opt.value 
                            ? 'border-brand-orange bg-brand-orange/10 shadow-[0_0_8px_rgba(246,108,59,0.3)]' 
                            : 'border-border-dark group-hover:border-text-muted'
                        }`}>
                          {formData.experience === opt.value && (
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          )}
                        </div>
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Topic of Interest dropdown */}
                <div className="relative">
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full bg-surface-dark-3 border border-border-dark text-white text-sm rounded-lg px-4 py-3 appearance-none cursor-pointer focus:outline-none transition-all"
                  >
                    <option value="">Select topic of interest</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="generative-ai">Generative AI</option>
                    <option value="data-science">Data Science & ML</option>
                    <option value="web-dev">Full Stack Development</option>
                    <option value="dsa">DSA & Competitive Programming</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                </div>

                {/* Text fields */}
                <input
                  type="text"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full bg-surface-dark-3 border border-border-dark text-white text-sm rounded-lg px-4 py-3 placeholder:text-text-muted focus:outline-none transition-all"
                />

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full bg-surface-dark-3 border border-border-dark text-white text-sm rounded-lg px-4 py-3 placeholder:text-text-muted focus:outline-none transition-all"
                />

                <input
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full bg-surface-dark-3 border border-border-dark text-white text-sm rounded-lg px-4 py-3 placeholder:text-text-muted focus:outline-none transition-all"
                />

                {/* Submit button */}
                <Button type="submit" variant="primary" size="lg" className="w-full cursor-pointer relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center font-bold">
                    Find your course
                  </span>
                </Button>

                {/* Terms disclaimer */}
                <p className="text-[11px] text-text-muted leading-normal text-center mt-3">
                  I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to{' '}
                  <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> &{' '}
                  <a href="#" className="underline hover:text-white transition-colors">Terms of use</a>
                </p>
              </form>

              {/* Success Recommendation modal */}
              {showRecommendation && (
                <div
                  ref={recommendationRef}
                  className="recommendation-card absolute inset-4 z-30 flex flex-col justify-center p-6 bg-surface-dark border border-brand-orange/30 rounded-xl shadow-[0_0_30px_rgba(246,108,59,0.25)] text-center backdrop-blur-lg"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-1">
                      <Sparkles size={24} className="animate-pulse" />
                    </div>
                    <span className="text-base font-extrabold text-brand-orange">Matching Course Found!</span>
                    <h4 className="text-lg font-bold text-white mt-1">Generative AI Certification Program</h4>
                    <p className="text-xs text-text-secondary mt-1">4 months · 15+ AI Tools · MAANG Faculty Mentor</p>
                    <button 
                      onClick={() => setShowRecommendation(false)}
                      className="mt-5 px-5 py-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
