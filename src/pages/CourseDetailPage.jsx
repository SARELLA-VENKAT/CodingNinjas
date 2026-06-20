import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Cpu, Award, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import Tabs from '../components/common/Tabs';
import Accordion from '../components/common/Accordion';
import coursesData from '../data/courses.json';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const course = coursesData.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-surface-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Course not found</h1>
          <Link to="/courses">
            <Button variant="primary">Browse Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const curriculumItems = course.curriculum.map(mod => ({
    title: mod.module,
    content: (
      <ul className="space-y-2">
        {mod.topics.map((topic, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
            <CheckCircle2 size={14} className="text-success flex-shrink-0" />
            {topic}
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <div className="min-h-screen bg-surface-black">
      {/* Hero */}
      <div className="bg-surface-dark border-b border-border-dark">
        <div className="max-w-site mx-auto px-4 lg:px-6 py-8 lg:py-12">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-orange transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Courses
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="orange">{course.category}</Badge>
                <Badge variant="default">{course.type}</Badge>
                {course.popular && <Badge variant="popular">POPULAR</Badge>}
              </div>
              <h1 className="text-[28px] lg:text-[36px] font-extrabold text-white leading-tight mb-4">
                {course.title}
              </h1>
              {course.partner !== 'Coding Ninjas' && (
                <p className="text-sm text-text-secondary mb-4">In partnership with <span className="text-white font-semibold">{course.partner}</span></p>
              )}
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1.5"><Clock size={15} /> {course.duration}</span>
                <span className="flex items-center gap-1.5"><Users size={15} /> {course.enrollmentCount} enrolled</span>
                <span className="flex items-center gap-1.5"><Cpu size={15} /> {course.aiToolsCount} AI Tools</span>
                <span className="flex items-center gap-1.5"><Award size={15} /> {course.type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-surface-dark-2 border-b border-border-dark">
        <div className="max-w-site mx-auto px-4 lg:px-6 py-4">
          <div className="flex flex-wrap gap-6">
            {course.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2 size={16} className="text-success" />
                <span className="text-white font-semibold">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-site mx-auto px-4 lg:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-grow lg:max-w-[640px]">
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              variant="underline"
              className="mb-8"
            />

            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-bold text-white mb-4">About this course</h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  This {course.duration} program is designed for {course.audience === 'working_professional' ? 'working professionals' : 'college students'} who
                  want to master {course.category} with hands-on projects and real-world applications.
                  You'll learn from industry experts and get access to {course.aiToolsCount} AI tools
                  to accelerate your learning journey.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {course.tags.map((tag, i) => (
                    <div key={i} className="p-4 bg-surface-dark-2 rounded-xl border border-border-dark">
                      <span className="text-sm font-bold text-white">{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'curriculum' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-bold text-white mb-4">Course Curriculum</h2>
                <p className="text-sm text-text-muted mb-6">{curriculumItems.length} modules · {course.duration}</p>
                <Accordion items={curriculumItems} />
              </motion.div>
            )}

            {activeTab === 'faculty' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-bold text-white mb-6">Our Faculty</h2>
                <div className="space-y-4">
                  {course.faculty.length > 0 ? course.faculty.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-surface-dark-2 rounded-xl border border-border-dark">
                      <img src={f.avatar} alt={f.name} className="w-14 h-14 rounded-full object-cover" loading="lazy" />
                      <div>
                        <h3 className="text-base font-bold text-white">{f.name}</h3>
                        <p className="text-sm text-text-muted">{f.designation}</p>
                        <p className="text-xs text-brand-orange font-semibold mt-1">{f.company}</p>
                      </div>
                    </div>
                  )) : (
                    <p className="text-sm text-text-muted">Faculty information will be updated soon.</p>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === 'faqs' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <Accordion items={[
                  { title: 'Who is this course for?', content: `This course is ideal for ${course.audience === 'working_professional' ? 'working professionals' : 'college students'} looking to build expertise in ${course.category}.` },
                  { title: 'What is the course duration?', content: `The course duration is ${course.duration}, with flexible self-paced learning options.` },
                  { title: 'Is there a certificate?', content: `Yes, upon successful completion you will receive a ${course.type} certificate that is recognized by industry.` },
                  { title: 'What AI tools will I learn?', content: `You will get hands-on experience with ${course.aiToolsCount} AI tools including ChatGPT, LangChain, and more.` },
                  { title: 'Is placement support provided?', content: 'Yes, our dedicated placement team helps with resume building, mock interviews, and job referrals.' },
                ]} />
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-[300px] flex-shrink-0">
            <div className="sticky top-24 bg-surface-dark-2 rounded-2xl border border-border-dark p-6">
              <div className="text-3xl font-extrabold text-white mb-1">{course.price}</div>
              <p className="text-xs text-text-muted mb-6">EMI options available</p>
              <Button variant="primary" size="lg" className="w-full mb-3">
                Enroll Now
              </Button>
              <Button variant="secondary" size="md" className="w-full">
                Download Brochure
              </Button>
              <div className="mt-6 pt-6 border-t border-border-dark space-y-3">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Clock size={14} className="text-brand-orange" />
                  <span>{course.duration} duration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Users size={14} className="text-brand-orange" />
                  <span>{course.enrollmentCount} enrolled</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Cpu size={14} className="text-brand-orange" />
                  <span>{course.aiToolsCount} AI Tools included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface-dark-2 border-t border-border-dark p-4 z-50 flex items-center gap-4">
        <div>
          <div className="text-lg font-extrabold text-white">{course.price}</div>
          <div className="text-xs text-text-muted">EMI available</div>
        </div>
        <Button variant="primary" size="md" className="flex-grow">Enroll Now</Button>
      </div>
    </div>
  );
}
