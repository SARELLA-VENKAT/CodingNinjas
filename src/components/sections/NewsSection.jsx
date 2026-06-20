import { useRef } from 'react';
import { Award, ExternalLink, Newspaper } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import { useGsap } from '../../hooks';
import gsap from 'gsap';

const pressLinks = [
  { name: 'CXO Today', quote: 'Coding Ninjas revolutionizing tech education with AI-first approach' },
  { name: 'Times of India', quote: 'InfoEdge acquires Coding Ninjas to strengthen career ecosystem' },
  { name: 'Economic Times', quote: 'EdTech platform sees 200% growth in GenAI course enrollments' },
];

export default function NewsSection() {
  const containerRef = useRef(null);

  useGsap(() => {
    gsap.from('.news-animate-left', {
      x: -30,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%'
      }
    });

    gsap.from('.news-animate-right', {
      x: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%'
      }
    });

    gsap.from('.news-animate-nsdc', {
      y: 15,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.news-animate-nsdc',
        start: 'top 90%'
      }
    });
  }, [], containerRef);

  return (
    <SectionWrapper ref={containerRef} className="bg-surface-dark">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* InfoEdge Announcement */}
        <div className="news-animate-left p-6 lg:p-8 bg-surface-dark-2 rounded-2xl border border-border-dark hover:border-brand-orange/20 transition-colors duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Award size={24} className="text-brand-orange" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Announcement</span>
              <h3 className="text-lg font-bold text-white">InfoEdge × Coding Ninjas</h3>
            </div>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            Coding Ninjas is now part of the InfoEdge family (parent company of Naukri.com), 
            combining India's largest job platform with cutting-edge tech education to deliver 
            unmatched career outcomes.
          </p>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-surface-dark-3 rounded-lg hover:bg-surface-dark-4 transition-colors cursor-pointer">
              <span className="text-xs font-bold text-text-muted">Naukri.com</span>
            </div>
            <div className="px-4 py-2 bg-surface-dark-3 rounded-lg hover:bg-surface-dark-4 transition-colors cursor-pointer">
              <span className="text-xs font-bold text-text-muted">InfoEdge</span>
            </div>
          </div>
        </div>

        {/* Press Mentions + NSDC */}
        <div className="space-y-4">
          {pressLinks.map((press, i) => (
            <a
              key={i}
              href="#"
              className="news-animate-right flex items-center gap-4 p-4 bg-surface-dark-2 rounded-xl border border-border-dark hover:border-brand-orange/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-surface-dark-3 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/10 transition-colors">
                <Newspaper size={16} className="text-text-muted group-hover:text-brand-orange transition-colors" />
              </div>
              <div className="flex-grow min-w-0">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">{press.name}</span>
                <p className="text-sm text-white font-semibold mt-1 truncate group-hover:text-brand-orange transition-colors">{press.quote}</p>
              </div>
              <ExternalLink size={16} className="text-text-muted flex-shrink-0 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}

          {/* NSDC Badge */}
          <div className="news-animate-nsdc p-4 bg-success/5 border border-success/20 rounded-xl flex items-center gap-4 hover:border-success/40 transition-colors duration-300">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award size={20} className="text-success" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">NSDC Approved</h4>
              <p className="text-xs text-text-muted">Courses approved by National Skill Development Corporation</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
