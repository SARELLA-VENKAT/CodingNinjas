import { useState, useRef } from 'react';
import { Code2, MessageCircle, FileText, Mic } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import { useGsap } from '../../hooks';
import gsap from 'gsap';

export default function NextGenLearning() {
  const [typedLines, setTypedLines] = useState([]);
  const containerRef = useRef(null);

  // Scroll entrance and typing animation
  useGsap(() => {
    // 1. Scroll-triggered entrance animations
    gsap.from('.nextgen-animate-left', {
      x: -40,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.nextgen-animate-left',
        start: 'top 80%'
      }
    });

    gsap.from('.nextgen-animate-right-card', {
      x: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.nextgen-animate-right-card',
        start: 'top 80%'
      }
    });

    // 2. Continuous Code typing simulation using GSAP timeline
    const codeData = [
      { text: "def find_max_profit(prices):", indent: 0, color: "text-purple-400" },
      { text: '    """AI-optimized solution"""', indent: 4, color: "text-text-muted italic" },
      { text: "    if not prices:", indent: 4, color: "text-purple-400" },
      { text: "        return 0", indent: 8, color: "text-purple-400" },
      { text: "    min_price = prices[0]", indent: 4, color: "text-white" },
      { text: "    max_profit = 0", indent: 4, color: "text-white" },
      { text: "    for price in prices:", indent: 4, color: "text-purple-400" },
      { text: "        max_profit = max(max_profit, price - min_price)", indent: 8, color: "text-yellow-300" },
      { text: "    return max_profit", indent: 4, color: "text-purple-400" }
    ];

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });

    // Reset lines
    tl.call(() => setTypedLines([]));

    codeData.forEach((line, index) => {
      const obj = { charIndex: 0 };
      
      tl.to(obj, {
        charIndex: line.text.length,
        duration: line.text.length * 0.035 + 0.1, // Adjust speed per line
        ease: "none",
        onUpdate: () => {
          const currentText = line.text.slice(0, Math.ceil(obj.charIndex));
          setTypedLines((prev) => {
            const next = [...prev];
            next[index] = { ...line, text: currentText };
            return next;
          });
        }
      });
      // Small pause between typing lines
      tl.to({}, { duration: 0.2 });
    });
  }, [], containerRef);

  return (
    <SectionWrapper ref={containerRef} className="bg-surface-dark overflow-hidden">
      <h2 className="text-[28px] lg:text-[32px] font-bold text-white mb-3">
        Step into the next generation of learning
      </h2>
      <p className="text-base text-text-secondary mb-10 max-w-xl">
        AI-powered tools that accelerate your learning and career preparation
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* AI Code Editor */}
        <div className="nextgen-animate-left p-6 lg:p-8 bg-surface-dark-2 rounded-2xl border border-border-dark flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                <Code2 size={20} className="text-brand-orange" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AI Code Editor</h3>
                <p className="text-xs text-text-muted">Write, debug, and learn faster</p>
              </div>
            </div>
            
            {/* Mock Code Editor */}
            <div className="bg-surface-black rounded-xl border border-border-dark overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border-dark">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-text-muted ml-2">solution.py</span>
              </div>
              
              <div className="p-4 font-mono text-xs leading-6 min-h-[220px] relative">
                {typedLines.map((line, idx) => (
                  <div key={idx} className="flex whitespace-pre">
                    <span className={line.color}>{line.text}</span>
                    {idx === typedLines.length - 1 && (
                      <span className="w-1.5 h-4 bg-brand-orange ml-0.5 inline-block animate-pulse" />
                    )}
                  </div>
                ))}
                {typedLines.length === 0 && (
                  <div className="flex">
                    <span className="w-1.5 h-4 bg-brand-orange inline-block animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Stack */}
        <div className="space-y-4">
          {[
            {
              icon: MessageCircle,
              title: 'Doubt Support 24/7',
              desc: 'Get instant help from TAs and AI-powered doubt resolution — average response time under 2 minutes.',
              color: 'text-blue-400',
              bg: 'bg-blue-400/10',
            },
            {
              icon: FileText,
              title: 'AI Resume Builder',
              desc: 'Auto-generate ATS-friendly resumes based on your completed projects, skills, and career goals.',
              color: 'text-green-400',
              bg: 'bg-green-400/10',
            },
            {
              icon: Mic,
              title: 'AI Interview Prep',
              desc: 'Practice mock interviews with AI feedback on your communication, coding, and problem-solving.',
              color: 'text-purple-400',
              bg: 'bg-purple-400/10',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="nextgen-animate-right-card p-5 bg-surface-dark-2 rounded-xl border border-border-dark flex gap-4 hover:border-brand-orange/40 transition-colors group cursor-pointer"
            >
              <div className={`w-10 h-10 ${feature.bg} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <feature.icon size={20} className={feature.color} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{feature.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
