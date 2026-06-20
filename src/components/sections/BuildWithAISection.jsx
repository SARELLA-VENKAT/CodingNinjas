import { useRef } from 'react';
import { Play, Brain, Cpu, Zap } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import { useGsap } from '../../hooks';
import gsap from 'gsap';

const projects = [
  { title: 'US Healthcare Analysis', tag: 'Data Analytics', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop' },
  { title: 'Credit Risk Prediction', tag: 'Machine Learning', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=250&fit=crop' },
  { title: 'AI Meal Planner', tag: 'Generative AI', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop' },
  { title: 'Smart Resume Builder', tag: 'NLP', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop' },
  { title: 'Fraud Detection System', tag: 'Deep Learning', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop' },
];

const features = [
  { icon: Brain, title: 'Expert Curriculum', desc: 'Industry-aligned content designed by MAANG professionals and IIT faculty' },
  { icon: Cpu, title: '10+ AI Tools', desc: 'Hands-on experience with ChatGPT, LangChain, CrewAI, and more' },
  { icon: Zap, title: 'Real Projects', desc: 'Build production-grade projects that showcase your skills to employers' },
];

export default function BuildWithAISection() {
  const containerRef = useRef(null);

  useGsap(() => {
    // Stagger headers
    gsap.from('.buildai-animate-header', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.buildai-animate-header',
        start: 'top 85%'
      }
    });

    // Stagger project cards entry
    gsap.from('.buildai-animate-card', {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.buildai-animate-card',
        start: 'top 85%'
      }
    });

    // Stagger feature highlights entry
    gsap.from('.buildai-animate-feat', {
      y: 35,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.buildai-animate-feat',
        start: 'top 85%'
      }
    });
  }, [], containerRef);

  return (
    <SectionWrapper ref={containerRef}>
      <div className="buildai-animate-header">
        <h2 className="text-[28px] lg:text-[32px] font-bold text-white mb-3">
          Build with AI like never before
        </h2>
        <p className="text-base text-text-secondary mb-10 max-w-xl">
          Work on real-world projects powered by cutting-edge AI tools and technologies
        </p>
      </div>

      {/* Project Cards Carousel */}
      <div className="overflow-x-auto hide-scrollbar mb-14">
        <div className="flex gap-5 pb-4" style={{ minWidth: 'max-content' }}>
          {projects.map((project, i) => (
            <div
              key={i}
              className="buildai-animate-card group flex-shrink-0 w-[280px] bg-surface-dark-2 rounded-xl border border-border-dark overflow-hidden hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[160px] object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(246,108,59,0.5)] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={20} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">{project.tag}</span>
                <h3 className="text-sm font-bold text-white mt-1 group-hover:text-brand-orange transition-colors duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="buildai-animate-feat p-6 bg-surface-dark-2 rounded-xl border border-border-dark hover:border-white/10 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
              <feature.icon size={20} className="text-brand-orange" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
