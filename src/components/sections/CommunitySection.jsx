import { useRef } from 'react';
import { Users, Calendar, Trophy } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import InfiniteScroll from '../common/InfiniteScroll';
import { useGsap } from '../../hooks';
import gsap from 'gsap';

const leaders = [
  { name: 'Ankush Singla', title: 'Co-founder, Coding Ninjas', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face' },
  { name: 'Prateek Narang', title: 'CTO, Coding Ninjas', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face' },
  { name: 'Ritika Gupta', title: 'VP Engineering, Google', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face' },
  { name: 'Aditya Verma', title: 'SDE-3, Amazon', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face' },
  { name: 'Meera Shah', title: 'Data Lead, Meta', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face' },
  { name: 'Raj Malhotra', title: 'Director, Microsoft', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face' },
];

export default function CommunitySection() {
  const containerRef = useRef(null);

  useGsap(() => {
    // Stagger fade-in headers
    gsap.from('.comm-animate-header', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.comm-animate-header',
        start: 'top 85%'
      }
    });

    // Stagger entry of the two feature cards
    gsap.from('.comm-animate-card', {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.comm-animate-card',
        start: 'top 85%'
      }
    });

    // Fade-in marquee container
    gsap.from('.comm-animate-marquee', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.comm-animate-marquee',
        start: 'top 90%'
      }
    });
  }, [], containerRef);

  return (
    <SectionWrapper ref={containerRef}>
      <div className="comm-animate-header text-center mb-10">
        <h2 className="text-[28px] lg:text-[32px] font-bold text-white mb-3">
          Access CN's premium Student community — the{' '}
          <span className="text-brand-orange">10X Club</span>
        </h2>
        <p className="text-base text-text-secondary max-w-lg mx-auto">
          Network with industry leaders, attend exclusive events, and accelerate your growth
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: Calendar,
            title: 'Weekly CXO Talks',
            desc: 'Hear directly from C-level executives at top tech companies about industry trends, career paths, and insider knowledge.',
          },
          {
            icon: Trophy,
            title: 'Workshops & Hackathons',
            desc: 'Participate in hands-on workshops, competitive hackathons, and project showcases with real prizes and career opportunities.',
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="comm-animate-card p-6 bg-surface-dark-2 rounded-xl border border-border-dark hover:border-brand-orange/40 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon size={20} className="text-brand-orange" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white group-hover:text-brand-orange transition-colors">{feature.title}</h3>
                <span className="text-[10px] font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full">EXCLUSIVE</span>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Industry Leaders Marquee */}
      <div className="comm-animate-marquee">
        <InfiniteScroll speed={30}>
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-surface-dark-2 border border-border-dark rounded-xl hover:border-white/20 transition-colors cursor-pointer"
            >
              <img
                src={leader.avatar}
                alt={leader.name}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-bold text-white whitespace-nowrap">{leader.name}</p>
                <p className="text-[11px] text-text-muted whitespace-nowrap">{leader.title}</p>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </SectionWrapper>
  );
}
