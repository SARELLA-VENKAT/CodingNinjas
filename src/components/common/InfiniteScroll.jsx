export default function InfiniteScroll({ children, speed = 30, direction = 'left', className = '' }) {
  return (
    <div className={`overflow-hidden relative group ${className}`}>
      {/* Edge fade masks for premium look */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface-black to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-8 ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
