import { cn } from '../../utils/cn';

export default function SectionWrapper({ children, className = '', dark = true, id = '' }) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 lg:py-20',
        dark ? 'bg-surface-black' : 'bg-white',
        className
      )}
    >
      <div className="max-w-site mx-auto px-4 lg:px-6">
        {children}
      </div>
    </section>
  );
}
