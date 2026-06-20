import { cn } from '../../utils/cn';

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange';
  
  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-brand-orange-hover active:scale-[0.98]',
    secondary: 'bg-transparent text-white border border-white/20 hover:bg-white/10 active:scale-[0.98]',
    ghost: 'bg-transparent text-text-secondary hover:text-white hover:bg-white/5',
    dark: 'bg-surface-dark-2 text-white border border-border-dark hover:bg-surface-dark-3',
    white: 'bg-white text-surface-dark border border-border-light hover:bg-surface-light',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
