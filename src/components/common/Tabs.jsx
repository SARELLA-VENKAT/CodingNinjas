import { cn } from '../../utils/cn';

export default function Tabs({ tabs, activeTab, onChange, variant = 'default', className = '' }) {
  const variants = {
    default: {
      container: 'flex gap-2 overflow-x-auto hide-scrollbar',
      tab: 'px-4 py-2 text-sm font-bold rounded-full border whitespace-nowrap transition-all duration-200 cursor-pointer',
      active: 'bg-surface-dark-2 border-white/80 text-white',
      inactive: 'bg-surface-dark-3 border-border-dark text-text-muted hover:text-text-secondary hover:border-border-dark/80',
    },
    pills: {
      container: 'flex gap-2 overflow-x-auto hide-scrollbar',
      tab: 'px-5 py-2.5 text-sm font-bold rounded-full border whitespace-nowrap transition-all duration-200 cursor-pointer',
      active: 'bg-brand-orange text-white border-brand-orange',
      inactive: 'bg-transparent border-border-dark text-text-secondary hover:text-white hover:border-white/30',
    },
    underline: {
      container: 'flex gap-6 border-b border-border-dark overflow-x-auto hide-scrollbar',
      tab: 'pb-3 text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer relative',
      active: 'text-brand-orange after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-orange',
      inactive: 'text-text-muted hover:text-text-secondary',
    },
  };

  const style = variants[variant];

  return (
    <div className={cn(style.container, className)} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id || tab}
          onClick={() => onChange(tab.id || tab)}
          className={cn(
            style.tab,
            (tab.id || tab) === activeTab ? style.active : style.inactive
          )}
          role="tab"
          aria-selected={(tab.id || tab) === activeTab}
        >
          {tab.label || tab}
        </button>
      ))}
    </div>
  );
}
