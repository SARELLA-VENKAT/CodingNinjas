import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tabs from '../components/common/Tabs';
import CourseCard from '../components/courses/CourseCard';
import coursesData from '../data/courses.json';

const categories = ['Popular', 'Data Analytics', 'Generative AI', 'Software Development', 'Data Science', 'DSA'];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('Popular');
  const [activeAudience, setActiveAudience] = useState('all');

  const filteredCourses = useMemo(() => {
    let filtered = coursesData;

    if (activeAudience !== 'all') {
      filtered = filtered.filter(c => c.audience === activeAudience);
    }

    if (activeCategory !== 'Popular') {
      filtered = filtered.filter(c => c.category === activeCategory);
    } else {
      filtered = filtered.filter(c => c.popular);
    }

    return filtered;
  }, [activeCategory, activeAudience]);

  return (
    <div className="min-h-screen bg-surface-black">
      {/* Header */}
      <div className="bg-surface-dark border-b border-border-dark">
        <div className="max-w-site mx-auto px-4 lg:px-6 py-10 lg:py-14">
          <h1 className="text-[32px] lg:text-[40px] font-extrabold text-white mb-3">
            Explore Our Courses
          </h1>
          <p className="text-base text-text-secondary max-w-lg">
            Industry-aligned programs designed with MAANG faculty and powered by AI tools
          </p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-40 bg-surface-black/95 backdrop-blur-md border-b border-border-dark">
        <div className="max-w-site mx-auto px-4 lg:px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Audience */}
            <div className="flex gap-3">
              {[
                { id: 'all', label: 'All' },
                { id: 'working_professional', label: 'Working Professionals' },
                { id: 'college_student', label: 'College Students' },
              ].map((aud) => (
                <button
                  key={aud.id}
                  onClick={() => setActiveAudience(aud.id)}
                  className={`text-sm font-bold transition-all cursor-pointer pb-1 ${
                    activeAudience === aud.id
                      ? 'text-white border-b-2 border-brand-orange'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                >
                  {aud.label}
                </button>
              ))}
            </div>

            {/* Category Tabs */}
            <Tabs
              tabs={categories}
              activeTab={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-site mx-auto px-4 lg:px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + activeAudience}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="text-6xl mb-4 opacity-30">📚</div>
                <h3 className="text-lg font-bold text-white mb-2">No courses found</h3>
                <p className="text-sm text-text-muted">Try changing the category or audience filter</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
