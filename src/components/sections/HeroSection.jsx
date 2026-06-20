import { useRef, useEffect } from 'react';
import InfiniteScroll from '../common/InfiniteScroll';
import { useGsap } from '../../hooks';
import gsap from 'gsap';
import heroBg from '../../assets/hero_bg.png';

const marqueeTools = [
  {
    name: 'Sage copilot',
    icon: (
      <span className="text-purple-400 font-bold text-sm">✦</span>
    )
  },
  {
    name: 'Node.js',
    icon: (
      <svg className="w-3.5 h-3.5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm-1 15.5L6.5 15v-5L11 7.5v10zm6.5-2.5l-4.5 2.5v-10l4.5 2.5v5z" />
      </svg>
    )
  },
  {
    name: 'Chat GPT',
    icon: (
      <svg className="w-3.5 h-3.5 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.7 10.4c.2-.6.3-1.3.2-2-.1-.7-.4-1.3-.8-1.9-.4-.5-1-.9-1.6-1.1-.6-.2-1.3-.3-2-.1l-1.5.4c-.4-.4-.9-.8-1.4-1.1L15 3.1c-.2-.6-.6-1.2-1.1-1.6C13.4 1.1 12.7 1 12 .9c-.7-.1-1.4.1-2 .4-.6.3-1.1.8-1.5 1.3-.4.5-.6 1.2-.6 1.9l.4 1.5c-.4.4-.8.9-1.1 1.4L5.7 6c-.6-.2-1.3-.3-2-.2-.7.1-1.3.4-1.9.8-.5.4-.9 1-1.1 1.6-.2.6-.3 1.3-.1 2l.4 1.5c-.4.4-.8.9-1.1 1.4L.9 12c-.2.6-.3 1.3-.2 2 .1.7.4 1.3.8 1.9.4.5 1 .9 1.6 1.1.6.2 1.3.3 2 .1l1.5-.4c.4.4.9.8 1.4 1.1l-.4 1.5c-.2.6-.2 1.3 0 2 .2.7.5 1.3 1 1.7.5.4 1.1.7 1.8.8.7.1 1.4 0 2-.3l1.5-.4c.4.4.9.8 1.4 1.1l.4-1.5c.2-.6.2-1.3 0-2-.2-.7-.5-1.3-1-1.7-.5-.4-1.1-.7-1.8-.8-.7-.1-1.4 0-2 .3z" />
      </svg>
    )
  },
  {
    name: 'crewai',
    icon: (
      <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    )
  },
  {
    name: 'PyTorch',
    icon: (
      <svg className="w-3.5 h-3.5 text-[#EE4C2C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12s4.477-10 10-10zm0 14h1.5v-4H15V9.5h-1.5V8h-1v1.5H10V11h1.5v5H12z" />
      </svg>
    )
  },
  {
    name: 'Hugging Face',
    icon: (
      <span className="text-sm select-none">🤗</span>
    )
  },
  {
    name: 'Keras',
    icon: (
      <div className="w-3.5 h-3.5 bg-red-600 flex items-center justify-center rounded-sm text-white font-extrabold text-[9px] select-none">K</div>
    )
  },
  {
    name: 'Coding Ninjas',
    icon: (
      <div className="w-3.5 h-3.5 rounded-full bg-brand-orange flex items-center justify-center text-white select-none">
        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </div>
    )
  }
];

// Floating particles for the hero background (kept for layer richness)
function FloatingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(246, 108, 59, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(246, 108, 59, ${0.04 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}

export default function HeroSection() {
  const containerRef = useRef(null);

  useGsap(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-animate-title', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.1
    });

    tl.from('.hero-animate-desc', {
      y: 20,
      opacity: 0,
      duration: 0.6
    }, '-=0.5');

    tl.from('.hero-animate-visual', {
      scale: 0.95,
      opacity: 0,
      duration: 0.9
    }, '-=0.5');

    // Floating tech cards GSAP bobbing & slight rotation
    gsap.to('.hero-float-card-1', { y: '-=15', rotation: 4, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.hero-float-card-2', { y: '+=12', rotation: -3, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.2 });
    gsap.to('.hero-float-card-3', { y: '-=10', rotation: 2, duration: 2.6, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.4 });
    gsap.to('.hero-float-card-4', { y: '+=14', rotation: -4, duration: 3.4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.1 });
    gsap.to('.hero-float-card-5', { y: '-=12', rotation: 3, duration: 3.0, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.3 });
  }, [], containerRef);

  return (
    <section ref={containerRef} className="relative min-h-[92vh] bg-surface-black overflow-hidden flex flex-col justify-between">
      {/* Floating Particle Canvas */}
      <FloatingParticles />

      {/* Background Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-500/3 rounded-full blur-[100px]" />
      </div>

      {/* Hand & Orb Main Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Glowing auras behind the hand */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse pointer-events-none" />
          <div className="absolute w-[350px] h-[350px] rounded-full bg-brand-orange/5 blur-[80px] animate-pulse pointer-events-none" />
        </div>
        
        {/* Hand & Orb Graphic - Full Viewport Cover */}
        <img 
          src={heroBg} 
          alt="AI Advantage Background" 
          className="w-full h-full object-cover opacity-60 drop-shadow-[0_0_60px_rgba(59,130,246,0.4)]"
        />
        
        {/* Floating Tech Cards in 3D-like perspective */}
        <div className="absolute inset-0 w-full h-full max-w-site mx-auto px-4 lg:px-6">
          <div className="relative w-full h-full">
            {/* Sage copilot */}
            <div className="absolute top-[35%] left-[6%] z-20 flex items-center gap-2 px-3 py-1.5 bg-[#16213e]/85 border border-border-dark rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] hero-float-card-1 backdrop-blur-md pointer-events-auto">
              <span className="text-purple-400 font-bold">✦</span>
              <span className="text-[11px] font-bold text-white tracking-wide">Sage copilot</span>
            </div>
            
            {/* Node.js */}
            <div className="absolute top-[20%] left-[45%] z-20 flex items-center gap-2 px-3 py-1.5 bg-[#16213e]/85 border border-border-dark rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] hero-float-card-2 backdrop-blur-md pointer-events-auto">
              <svg className="w-3.5 h-3.5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm-1 15.5L6.5 15v-5L11 7.5v10zm6.5-2.5l-4.5 2.5v-10l4.5 2.5v5z" />
              </svg>
              <span className="text-[11px] font-bold text-white tracking-wide">Node.js</span>
            </div>
            
            {/* ChatGPT */}
            <div className="absolute bottom-[25%] left-[12%] z-20 flex items-center gap-2 px-3 py-1.5 bg-[#16213e]/85 border border-border-dark rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] hero-float-card-3 backdrop-blur-md pointer-events-auto">
              <svg className="w-3.5 h-3.5 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.7 10.4c.2-.6.3-1.3.2-2-.1-.7-.4-1.3-.8-1.9-.4-.5-1-.9-1.6-1.1-.6-.2-1.3-.3-2-.1l-1.5.4c-.4-.4-.9-.8-1.4-1.1L15 3.1c-.2-.6-.6-1.2-1.1-1.6C13.4 1.1 12.7 1 12 .9c-.7-.1-1.4.1-2 .4-.6.3-1.1.8-1.5 1.3-.4.5-.6 1.2-.6 1.9l.4 1.5c-.4.4-.8.9-1.1 1.4L5.7 6c-.6-.2-1.3-.3-2-.2-.7.1-1.3.4-1.9.8-.5.4-.9 1-1.1 1.6-.2.6-.3 1.3-.1 2l.4 1.5c-.4.4-.8.9-1.1 1.4L.9 12c-.2.6-.3 1.3-.2 2 .1.7.4 1.3.8 1.9.4.5 1 .9 1.6 1.1.6.2 1.3.3 2 .1l1.5-.4c.4.4.9.8 1.4 1.1l-.4 1.5c-.2.6-.2 1.3 0 2 .2.7.5 1.3 1 1.7.5.4 1.1.7 1.8.8.7.1 1.4 0 2-.3l1.5-.4c.4.4.9.8 1.4 1.1l.4-1.5c.2-.6.2-1.3 0-2-.2-.7-.5-1.3-1-1.7-.5-.4-1.1-.7-1.8-.8-.7-.1-1.4 0-2 .3z" />
              </svg>
              <span className="text-[11px] font-bold text-white tracking-wide">Chat GPT</span>
            </div>
            
            {/* crewAI */}
            <div className="absolute bottom-[28%] right-[12%] z-20 flex items-center gap-2 px-3 py-1.5 bg-[#16213e]/85 border border-border-dark rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] hero-float-card-4 backdrop-blur-md pointer-events-auto">
              <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              <span className="text-[11px] font-bold text-white tracking-wide">crewai</span>
            </div>
            
            {/* Python */}
            <div className="absolute top-[35%] right-[6%] z-20 flex items-center gap-2 px-3 py-1.5 bg-[#16213e]/85 border border-border-dark rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] hero-float-card-5 backdrop-blur-md pointer-events-auto">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M11.9 2C6.4 2 6.5 4.4 6.5 4.4L6.5 6.6C6.5 6.6 8.5 6.6 11.9 6.6C15.3 6.6 15.3 8.3 15.3 8.3L15.3 11.6C15.3 11.6 17.6 11.6 20.1 11.6C22.6 11.6 22 7.1 22 7.1L22 4.4C22 4.4 22 2 17.5 2C13 2 11.9 2 11.9 2Z" fill="#387EB8" />
                <path d="M12.1 22C17.6 22 17.5 19.6 17.5 19.6L17.5 17.4C17.5 17.4 15.5 17.4 12.1 17.4C8.7 17.4 8.7 15.7 8.7 15.7L8.7 12.4C8.7 12.4 6.4 12.4 3.9 12.4C1.4 12.4 2 16.9 2 16.9L2 19.6C2 19.6 2 22 6.5 22C11 22 12.1 22 12.1 22Z" fill="#FFE873" />
                <circle cx="9.2" cy="4.3" r="0.6" fill="#fff" />
                <circle cx="14.8" cy="19.7" r="0.6" fill="#387EB8" />
              </svg>
              <span className="text-[11px] font-bold text-white tracking-wide">Python</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container (Centered on top of Background) */}
      <div className="relative z-10 max-w-site mx-auto px-4 lg:px-6 pt-16 lg:pt-28 pb-16 w-full flex-grow flex flex-col items-center justify-start text-center">
        {/* Pill badge above the headline */}
        <div className="hero-animate-title inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-[#1a1a2e]/60 border border-brand-orange/30 rounded-full shadow-[0_0_15px_rgba(246,108,59,0.15)] backdrop-blur-sm">
          <span className="text-brand-orange font-bold text-xs animate-pulse">⚡</span>
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">Ready to 10X your career!</span>
        </div>

        <h1 className="hero-animate-title text-[36px] md:text-[50px] lg:text-[64px] font-extrabold text-white leading-tight mb-6 max-w-3xl">
          Give your career an{' '}
          <span className="text-gradient-orange relative inline-block">
            unfair AI advantage
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-orange/30" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0 7 Q50 0 100 5 Q150 10 200 3" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="hero-animate-desc text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl">
          The right AI tools integrated into your curriculum
        </p>
      </div>

      {/* AI Tools Marquee */}
      <div className="border-t border-b border-border-dark py-4 bg-surface-dark-2/50 backdrop-blur-sm relative z-10 w-full overflow-hidden">
        <InfiniteScroll speed={20}>
          {marqueeTools.map((tool, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-surface-dark-3/60 border border-border-dark rounded-full whitespace-nowrap hover:text-brand-orange hover:border-brand-orange/30 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              {tool.icon}
              <span className="text-text-muted hover:text-white transition-colors">{tool.name}</span>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
}
