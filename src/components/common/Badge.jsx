import { cn } from '../../utils/cn';

export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-surface-dark-3 text-text-secondary border-border-dark',
    orange: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    success: 'bg-success/10 text-success border-success/20',
    popular: 'bg-brand-orange text-white border-brand-orange',
  };

  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 text-xs font-bold rounded-full border',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
