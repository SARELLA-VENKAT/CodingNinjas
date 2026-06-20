import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Briefcase, ArrowRight } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import StatCounter from '../common/StatCounter';
import InfiniteScroll from '../common/InfiniteScroll';
import Button from '../common/Button';
import { useGsap } from '../../hooks';
import gsap from 'gsap';

const hiringPartners = [
  'Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Netflix', 'Salesforce',
  'Adobe', 'Uber', 'Flipkart', 'Razorpay', 'Swiggy', 'Zomato', 'Paytm',
];

const stats = [
  { end: 5000, suffix: '+', label: 'MAANG Placements' },
  { end: 400, suffix: '+', label: 'Live Job Opportunities' },
  { end: 9, suffix: '+', label: 'Years of Excellence' },
  { end: 200000, suffix: '+', label: 'Students Trained' },
];

const mockJobs = [
  { title: 'Front End Developer', company: 'Google', location: 'Bangalore', salary: '35 LPA' },
  { title: 'Data Scientist', company: 'Microsoft', location: 'Hyderabad', salary: '28 LPA' },
  { title: 'SDE-2', company: 'Amazon', location: 'Pune', salary: '32 LPA' },
  { title: 'AI Engineer', company: 'Meta', location: 'Remote', salary: '45 LPA' },
];

export default function CareerOutcomes() {
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const [activeJobIdx, setActiveJobIdx] = useState(0);

  // Auto-scroll job alerts with smooth transition
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveJobIdx((prev) => (prev + 1) % mockJobs.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useGsap(() => {
    // Stagger headers
    gsap.from('.career-animate-header', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.career-animate-header',
        start: 'top 85%'
      }
    });

    // Animate salary graph bars from 0 to target height
    gsap.from('.career-graph-bar-high', {
      scaleY: 0,
      transformOrigin: 'bottom center',
      stagger: 0.1,
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: chartRef.current,
        start: 'top 85%'
      }
    });

    gsap.from('.career-graph-bar-avg', {
      scaleY: 0,
      transformOrigin: 'bottom center',
      stagger: 0.1,
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: chartRef.current,
        start: 'top 85%'
      }
    });

    // Stagger entry of stats cards
    gsap.from('.career-animate-stat-card', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.career-animate-stat-card',
        start: 'top 90%'
      }
    });

    // Pulsing glow on the highest bar
    gsap.to('.career-bar-glow', {
      boxShadow: '0 0 15px rgba(246, 108, 59, 0.6), 0 -5px 20px rgba(246, 108, 59, 0.3)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, [], containerRef);

  return (
    <SectionWrapper ref={containerRef}>
      <div className="career-animate-header text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full">
          <TrendingUp size={12} className="text-brand-orange" />
          <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider">Career Outcomes</span>
        </div>
        <h2 className="text-[28px] lg:text-[32px] font-bold text-white mb-3">
          9+ years of transforming careers
        </h2>
        <p className="text-base text-text-secondary max-w-lg mx-auto">
          Our graduates work at the world's leading tech companies
        </p>
      </div>

      {/* Hiring Partner Logos Marquee */}
      <div className="mb-14">
        <InfiniteScroll speed={35}>
          {hiringPartners.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 bg-surface-dark-2 border border-border-dark rounded-lg hover:border-brand-orange/20 transition-colors duration-300"
            >
              <span className="text-sm font-bold text-text-muted whitespace-nowrap">{partner}</span>
            </div>
          ))}
        </InfiniteScroll>
      </div>

      {/* Interactive Graph & Job Alerts Area */}
      <div ref={chartRef} className="grid md:grid-cols-2 gap-8 mb-16">
        
        {/* CTC Salary Comparison Charts */}
        <div className="bg-surface-dark-2 border border-border-dark p-6 rounded-2xl flex flex-col justify-between hover:border-brand-orange/15 transition-colors duration-300">
          <div>
            <span className="text-[10px] font-bold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full uppercase">Placements Overview</span>
            <h3 className="text-lg font-bold text-white mt-4 mb-2">Industry-Leading Salary growth</h3>
            <p className="text-xs text-text-secondary">Comparing packages of our graduates to standard entries.</p>
          </div>

          {/* Bar Charts Row */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            
            {/* Highest CTC */}
            <div className="bg-surface-black border border-border-dark p-4 rounded-xl text-center">
              <div className="text-xs text-text-muted mb-2 font-bold uppercase">Highest CTC</div>
              <div className="text-2xl font-black text-brand-orange">32 LPA</div>
              
              <div className="h-28 flex items-end justify-center gap-1.5 mt-4">
                <div className="career-graph-bar-high w-3 bg-brand-orange/20 rounded-t-sm" style={{ height: '30%' }} />
                <div className="career-graph-bar-high w-3 bg-brand-orange/40 rounded-t-sm" style={{ height: '50%' }} />
                <div className="career-graph-bar-high w-3 bg-brand-orange/60 rounded-t-sm" style={{ height: '70%' }} />
                <div className="career-graph-bar-high career-bar-glow w-3 bg-brand-orange rounded-t-sm" style={{ height: '100%' }} />
              </div>
              
              <div className="flex justify-between text-[8px] text-text-muted mt-2 font-bold px-1">
                <span>15 LPA</span>
                <span>20 LPA</span>
                <span>25 LPA</span>
                <span>32 LPA</span>
              </div>
            </div>

            {/* Average CTC */}
            <div className="bg-surface-black border border-border-dark p-4 rounded-xl text-center">
              <div className="text-xs text-text-muted mb-2 font-bold uppercase">Average CTC</div>
              <div className="text-2xl font-black text-white">15 LPA</div>
              
              <div className="h-28 flex items-end justify-center gap-1.5 mt-4">
                <div className="career-graph-bar-avg w-3 bg-white/10 rounded-t-sm" style={{ height: '20%' }} />
                <div className="career-graph-bar-avg w-3 bg-white/20 rounded-t-sm" style={{ height: '40%' }} />
                <div className="career-graph-bar-avg career-bar-glow w-3 bg-brand-orange rounded-t-sm" style={{ height: '80%' }} />
                <div className="career-graph-bar-avg w-3 bg-white/10 rounded-t-sm" style={{ height: '20%' }} />
              </div>
              
              <div className="flex justify-between text-[8px] text-text-muted mt-2 font-bold px-1">
                <span>5 LPA</span>
                <span>10 LPA</span>
                <span>15 LPA</span>
                <span>32 LPA</span>
              </div>
            </div>

          </div>
        </div>

        {/* Curated Job Board Cards */}
        <div className="bg-surface-dark-2 border border-border-dark p-6 rounded-2xl flex flex-col justify-between hover:border-success/20 transition-colors duration-300">
          <div>
            <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-1 rounded-full uppercase">Job Portal</span>
            <h3 className="text-lg font-bold text-white mt-4 mb-1">Curated Job boards</h3>
            <p className="text-xs text-text-secondary">400+ active openings added daily by recruitment partners.</p>
          </div>

          {/* Active Job Alert Card */}
          <div className="relative overflow-hidden bg-surface-black border border-border-dark rounded-xl p-4 flex items-center justify-between transition-all duration-500 hover:border-brand-orange/20 group my-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Briefcase size={12} className="text-brand-orange" />
                <span className="text-[9px] font-bold text-brand-orange uppercase">{mockJobs[activeJobIdx].company}</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-1 group-hover:text-brand-orange transition-colors">{mockJobs[activeJobIdx].title}</h4>
              <p className="text-xs text-text-secondary mt-0.5">{mockJobs[activeJobIdx].location}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-black text-white">{mockJobs[activeJobIdx].salary}</span>
              <div className="mt-2">
                <span className="inline-flex items-center gap-1 text-[8px] bg-success/15 text-success border border-success/20 px-2 py-0.5 rounded-full font-bold uppercase cursor-pointer hover:bg-success/25 transition-colors">
                  Apply Now <ArrowRight size={8} />
                </span>
              </div>
            </div>
          </div>

          {/* Job dots indicator */}
          <div className="flex justify-center gap-1.5 mb-1">
            {mockJobs.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === activeJobIdx ? 'w-4 bg-brand-orange' : 'bg-border-dark'
                }`}
              />
            ))}
          </div>

          <div className="text-xs text-text-muted text-center">
            Updated a few seconds ago
          </div>
        </div>

      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="career-animate-stat-card p-6 bg-surface-dark-2 rounded-xl border border-border-dark text-center hover:border-brand-orange/20 hover:-translate-y-1 transition-all duration-300"
          >
            <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link to="/courses">
          <Button variant="primary" size="lg">Explore Courses</Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
