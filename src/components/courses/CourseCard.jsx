import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import { Users, Clock, Cpu, ArrowRight } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group block bg-surface-dark-2 rounded-xl border border-border-dark overflow-hidden card-hover cursor-pointer"
    >
      {/* Banner Image */}
      <div className="relative overflow-hidden m-4 rounded-xl">
        <img
          src={course.bannerImage}
          alt={course.title}
          className="w-full h-[140px] object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {course.popular && (
          <Badge variant="popular" className="absolute top-3 left-3 text-[10px]">
            POPULAR
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        {/* Partner & Type */}
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="default" className="text-[10px]">{course.type}</Badge>
          {course.partner !== 'Coding Ninjas' && (
            <span className="text-[11px] text-text-muted font-medium">{course.partner}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-bold text-white leading-snug mb-3 line-clamp-2 group-hover:text-brand-orange transition-colors">
          {course.title}
        </h3>

        {/* Meta Row */}
        <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} />
            {course.enrollmentCount}
          </span>
          <span className="flex items-center gap-1">
            <Cpu size={13} />
            {course.aiToolsCount} AI Tools
          </span>
        </div>

        {/* CTA */}
        <div className="flex items-center text-sm font-bold text-brand-orange group-hover:gap-2 transition-all">
          Visit course page
          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
