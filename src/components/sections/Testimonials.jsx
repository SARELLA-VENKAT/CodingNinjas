import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, Play, Quote } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import testimonials from '../../data/testimonials.json';
import { useGsap } from '../../hooks';
import gsap from 'gsap';

export default function Testimonials() {
  const containerRef = useRef(null);

  useGsap(() => {
    gsap.from('.testimonial-animate-header', {
      y: 25,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.testimonial-animate-header',
        start: 'top 85%'
      }
    });

    gsap.from('.testimonial-animate-swiper', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.testimonial-animate-swiper',
        start: 'top 85%'
      }
    });
  }, [], containerRef);

  return (
    <SectionWrapper ref={containerRef} className="bg-surface-dark overflow-hidden">
      <div className="testimonial-animate-header flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
            <Star size={12} className="text-yellow-400" fill="#FACC15" />
            <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider">Student Reviews</span>
          </div>
          <h2 className="text-[28px] lg:text-[32px] font-bold text-white mb-3">
            Our students loved an AI-first certification
          </h2>
          <p className="text-base text-text-secondary">
            Real stories from real people who transformed their careers
          </p>
        </div>
      </div>

      <div className="testimonial-animate-swiper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            980: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-surface-dark-2 rounded-xl border border-border-dark p-6 h-full flex flex-col hover:border-brand-orange/30 transition-all duration-300 group">
                {/* Quote */}
                <Quote size={24} className="text-brand-orange/30 mb-3 flex-shrink-0 group-hover:text-brand-orange/50 transition-colors" />
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow line-clamp-4">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border-dark">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-border-dark group-hover:ring-brand-orange/30 transition-all"
                    loading="lazy"
                  />
                  <div className="flex-grow min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{t.name}</h4>
                    <p className="text-xs text-text-muted truncate">{t.role}</p>
                  </div>
                  {t.hasVideo && (
                    <button className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-brand-orange/20 hover:scale-110 transition-all" aria-label="Play testimonial video">
                      <Play size={14} className="text-brand-orange ml-0.5" fill="#F66C3B" />
                    </button>
                  )}
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400" fill="#FACC15" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
