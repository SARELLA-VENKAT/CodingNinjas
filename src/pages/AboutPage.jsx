import { motion } from 'framer-motion';
import { Target, Award, Users, BookOpen, ChevronRight } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';
import StatCounter from '../components/common/StatCounter';

const leaders = [
  {
    name: 'Ankush Singla',
    role: 'Co-founder',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    bio: 'IIT Delhi, Stanford Alumnus. Ex-Amazon, Ex-Facebook. Ankush is passionate about tech education.',
  },
  {
    name: 'Kannu Mittal',
    role: 'Co-founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    bio: 'NSIT alumnus. Ex-SDE at Adobe, Microsoft. Kannu loves solving algorithms and mentorship.',
  },
  {
    name: 'Dhruv Sharma',
    role: 'Head of Content',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    bio: 'Ex-Google SDE. Dhruv oversees curriculum alignment with modern industry needs like Generative AI.',
  },
];

const milestones = [
  { year: '2016', title: 'Coding Ninjas Founded', desc: 'Started with a vision to make tech education accessible and industry-relevant.' },
  { year: '2019', title: 'Info Edge Investment', desc: 'Received strategic backing from Info Edge to expand course offerings.' },
  { year: '2022', title: 'NSDC Partnership', desc: 'Partnered with NSDC to bridge the skills gap in Indian tech industry.' },
  { year: '2026', title: 'AI-First Curriculum Launch', desc: 'Revamped all courses with Generative AI tools and co-pilot training.' },
];

export default function AboutPage() {
  return (
    <div className="bg-surface-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-border-dark bg-gradient-to-b from-brand-orange/5 to-transparent">
        <div className="max-w-[976px] mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full uppercase tracking-wider">
              Our Journey
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-6 leading-tight">
              Bridging the gap between{' '}
              <span className="text-brand-orange">Classroom</span> &{' '}
              <span className="text-brand-orange">Industry</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We are a team of educators and tech veterans on a mission to build India's premier tech education ecosystem. Over 9+ years, we have empowered 100,000+ students to achieve their dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <SectionWrapper dark={false} className="border-b border-border-dark bg-surface-dark-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter end={100} suffix="K+" label="Students Graduated" />
          <StatCounter end={500} suffix="+" label="Hiring Partners" />
          <StatCounter end={9} suffix="+" label="Years of Experience" />
          <StatCounter end={10} suffix="X" label="Averaging Salary Growth" />
        </div>
      </SectionWrapper>

      {/* Mission Section */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center">
              <Target className="text-brand-orange" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Core Mission</h2>
            <p className="text-text-secondary leading-relaxed">
              Coding Ninjas was founded with a single goal: to provide high-quality learning resources to students, empowering them to become top software professionals. We believe that coding education is not just about syntax, but about logical thinking, problem-solving, and continuous learning.
            </p>
            <p className="text-text-secondary leading-relaxed">
              With the rise of Generative AI, we have transformed our curriculum to make it AI-first, teaching students not just how to code, but how to prompt, build, and deploy with the assistance of AI tools.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-surface-dark-2 border border-border-dark rounded-2xl space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">Why Coding Ninjas?</h3>
            <div className="space-y-4">
              {[
                { icon: BookOpen, title: 'AI-Enhanced Curriculum', desc: 'Learn programming with Google Gemini, Copilot, and LLMs integrated.' },
                { icon: Users, title: '24/7 Doubt Support', desc: 'Over 2,000 teaching assistants to resolve your doubts instantly.' },
                { icon: Award, title: 'Top Institutional Faculty', desc: 'Instructors from Stanford, IITs, and industry giants.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <item.icon className="text-brand-orange" size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Leadership Section */}
      <SectionWrapper dark={false} className="bg-surface-dark-2 border-t border-b border-border-dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
          <p className="text-sm text-text-secondary max-w-lg mx-auto">
            Meet the founders and mentors behind Coding Ninjas who guide our vision and courses.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 bg-surface-black border border-border-dark rounded-xl text-center flex flex-col items-center"
            >
              <img
                src={leader.avatar}
                alt={leader.name}
                className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-brand-orange/20"
              />
              <h3 className="text-lg font-bold text-white">{leader.name}</h3>
              <span className="text-xs text-brand-orange font-semibold mt-1 mb-3">{leader.role}</span>
              <p className="text-xs text-text-muted leading-relaxed mt-2">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Milestones / Timeline */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Milestones</h2>
          <p className="text-sm text-text-secondary max-w-lg mx-auto">
            A chronological timeline of how we grew from a single classroom into India's leading platform.
          </p>
        </div>

        <div className="relative border-l border-border-dark max-w-2xl mx-auto pl-8 space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 bg-surface-black border-2 border-brand-orange rounded-full flex items-center justify-center">
                <ChevronRight size={12} className="text-brand-orange" />
              </div>
              <span className="text-xs font-bold text-brand-orange">{milestone.year}</span>
              <h3 className="text-base font-bold text-white mt-1">{milestone.title}</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">{milestone.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
