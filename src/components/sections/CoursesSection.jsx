import { useState, useMemo, useRef } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Tabs from '../common/Tabs';
import CourseCard from '../courses/CourseCard';
import coursesData from '../../data/courses.json';
import { useGsap } from '../../hooks';
import gsap from 'gsap';

const categories = ['Popular', 'Data Analytics', 'Generative AI', 'Software Development', 'Data Science', 'DSA'];
const audiences = ['working_professional', 'college_student'];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('Popular');
  const [activeAudience, setActiveAudience] = useState('working_professional');
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const filteredCourses = useMemo(() => {
    let filtered = coursesData;

    if (activeCategory !== 'Popular') {
      filtered = filtered.filter(c => c.category === activeCategory);
    } else {
      filtered = filtered.filter(c => c.popular);
    }

    return filtered;
  }, [activeCategory, activeAudience]);

  useGsap(() => {
    gsap.from('.courses-animate-header', {
      y: 25,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%'
      }
    });
  }, [], containerRef);

  // Animate grid cards when filters change
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    // Animate the cards after React re-renders
    setTimeout(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.course-card-animate');
        gsap.fromTo(cards,
          { y: 20, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.06, duration: 0.4, ease: 'power2.out' }
        );
      }
    }, 30);
  };

  const handleAudienceChange = (id) => {
    setActiveAudience(id);
    setTimeout(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.course-card-animate');
        gsap.fromTo(cards,
          { y: 20, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.06, duration: 0.4, ease: 'power2.out' }
        );
      }
    }, 30);
  };

  return (
    <SectionWrapper ref={containerRef} id="explore-courses">
      <div className="courses-animate-header mb-10">
        <h2 className="text-[28px] lg:text-[32px] font-bold text-white mb-8">
          Explore our courses
        </h2>

        {/* Audience Toggle */}
        <div className="flex gap-4 mb-6">
          {[
            { id: 'working_professional', label: 'For Working Professionals' },
            { id: 'college_student', label: 'For College Students' },
          ].map((aud) => (
            <button
              key={aud.id}
              onClick={() => handleAudienceChange(aud.id)}
              className={`text-sm font-bold pb-2 transition-all cursor-pointer relative ${
                activeAudience === aud.id
                  ? 'text-white'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              {aud.label}
              {activeAudience === aud.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Category Tabs */}
        <Tabs
          tabs={categories}
          activeTab={activeCategory}
          onChange={handleCategoryChange}
          variant="default"
          className="mb-8"
        />
      </div>

      {/* Course Grid */}
      <div
        ref={gridRef}
        key={activeCategory + activeAudience}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="course-card-animate">
              <CourseCard course={course} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center">
            <p className="text-lg text-text-muted">No courses found for this selection.</p>
            <p className="text-sm text-text-muted mt-2">Try a different category or audience.</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
