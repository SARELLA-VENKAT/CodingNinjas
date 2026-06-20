import HeroSection from '../components/sections/HeroSection';
import CourseFinderSection from '../components/sections/CourseFinderSection';
import CoursesSection from '../components/sections/CoursesSection';
import BuildWithAISection from '../components/sections/BuildWithAISection';
import NextGenLearning from '../components/sections/NextGenLearning';
import CareerOutcomes from '../components/sections/CareerOutcomes';
import Testimonials from '../components/sections/Testimonials';
import CommunitySection from '../components/sections/CommunitySection';
import NewsSection from '../components/sections/NewsSection';
import CTABanner from '../components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CourseFinderSection />
      <CoursesSection />
      <BuildWithAISection />
      <NextGenLearning />
      <CareerOutcomes />
      <Testimonials />
      <CommunitySection />
      <NewsSection />
      <CTABanner />
    </>
  );
}

