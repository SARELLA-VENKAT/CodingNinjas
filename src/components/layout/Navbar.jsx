import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollY } from '../../hooks';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../common/Button';
import AuthDrawer from '../auth/AuthDrawer';
import coursesData from '../../data/courses.json';
import gsap from 'gsap';

const navLinks = [
  {
    label: 'For Working Professionals',
    href: '/courses',
    dropdown: true
  },
  {
    label: 'For College Students',
    href: '/courses',
    dropdown: true
  },
  { label: 'Community', href: '/about' }, // Links to about / sections
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeDomain, setActiveDomain] = useState('Data Analytics');
  const [authOpen, setAuthOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const isScrolled = scrollY > 60;

  // Set default active domain when switching main dropdown segments
  useEffect(() => {
    if (openDropdown === 0) {
      setActiveDomain('Data Analytics');
    } else if (openDropdown === 1) {
      setActiveDomain('Data Structures and Algorithms');
    }
  }, [openDropdown]);

  // Handle GSAP transitions on desktop mega dropdown menus
  useEffect(() => {
    navLinks.forEach((link, idx) => {
      if (!link.dropdown) return;
      const el = document.getElementById(`nav-dropdown-${idx}`);
      if (!el) return;

      const isOpen = openDropdown === idx;
      if (isOpen) {
        gsap.killTweensOf(el);
        gsap.fromTo(el,
          { opacity: 0, y: -12, scale: 0.96, transformOrigin: 'top center' },
          { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: 'power2.out', visibility: 'visible' }
        );
      } else {
        gsap.killTweensOf(el);
        gsap.to(el, {
          opacity: 0,
          y: -12,
          scale: 0.96,
          duration: 0.2,
          ease: 'power2.in',
          visibility: 'hidden'
        });
      }
    });
  }, [openDropdown]);

  const domainsForLink = (label) => {
    if (label.includes('Professionals')) {
      return ['Data Analytics', 'Generative AI', 'Software Development', 'Data Science'];
    }
    return ['Data Structures and Algorithms', 'Software Development', 'Data Analytics'];
  };

  const coursesForDomain = (label, domain) => {
    const isProfessional = label.includes('Professionals');
    const categoryMap = {
      'Data Analytics': 'Data Analytics',
      'Generative AI': 'Generative AI',
      'Software Development': 'Software Development',
      'Data Science': 'Data Science',
      'Data Structures and Algorithms': 'DSA'
    };
    const category = categoryMap[domain] || domain;
    return coursesData.filter(course => {
      const matchAudience = isProfessional 
        ? course.audience === 'working_professional' 
        : course.audience === 'college_student';
      return matchAudience && course.category === category;
    });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300',
          isScrolled
            ? 'bg-surface-dark-2/95 backdrop-blur-md border-b border-border-dark shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-site mx-auto px-4 lg:px-6">
          <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer" aria-label="Coding Ninjas Home">
              <div className="flex items-center">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
                  <rect width="40" height="40" rx="8" fill="#F66C3B"/>
                  <path d="M12 15L18 20L12 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 25H28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span className="ml-2 text-lg font-extrabold text-white tracking-tight">
                  Coding<span className="text-brand-orange">Ninjas</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <div key={i} className="relative group">
                  {link.dropdown ? (
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-text-secondary hover:text-white transition-colors cursor-pointer"
                      onMouseEnter={() => setOpenDropdown(i)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        'px-3 py-2 text-sm font-semibold transition-colors',
                        location.pathname === link.href
                          ? 'text-brand-orange'
                          : 'text-text-secondary hover:text-white'
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Mega Dropdown container animated by GSAP */}
                  {link.dropdown && (
                    <div
                      id={`nav-dropdown-${i}`}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-surface-dark-2 border border-border-dark rounded-2xl shadow-2xl p-6 flex gap-6 invisible opacity-0 z-50"
                      onMouseEnter={() => setOpenDropdown(i)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {/* Left Sidebar: Domains */}
                      <div className="w-[220px] border-r border-border-dark pr-4 flex flex-col gap-1">
                        <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 px-3">Domain</div>
                        {domainsForLink(link.label).map((domain) => (
                          <button
                            key={domain}
                            onMouseEnter={() => setActiveDomain(domain)}
                            className={cn(
                              "w-full flex items-center justify-between px-3 py-2 text-xs font-bold rounded-lg text-left transition-colors cursor-pointer",
                              activeDomain === domain 
                                ? "bg-brand-orange/10 text-brand-orange" 
                                : "text-text-secondary hover:bg-white/5 hover:text-white"
                            )}
                          >
                            {domain}
                            <ChevronRight size={14} className={cn("transition-transform duration-200", activeDomain === domain ? "translate-x-1" : "opacity-0")} />
                          </button>
                        ))}
                      </div>
                      
                      {/* Right Panel: Dynamic Courses List */}
                      <div className="flex-1 flex flex-col gap-4">
                        <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Programs</div>
                        <div className="grid grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-1 hide-scrollbar">
                          {coursesForDomain(link.label, activeDomain).map((course) => (
                            <Link
                              key={course.id}
                              to={`/courses/${course.slug}`}
                              onClick={() => setOpenDropdown(null)}
                              className="p-4 bg-surface-dark-3 border border-border-dark rounded-xl hover:border-brand-orange/40 transition-all duration-200 flex flex-col justify-between h-[130px] group/card"
                            >
                              <div>
                                <span className="text-[10px] text-text-muted font-bold block">{course.partner}</span>
                                <h4 className="text-xs font-bold text-white mt-1 group-hover/card:text-brand-orange transition-colors line-clamp-2 leading-relaxed">{course.title}</h4>
                              </div>
                              <div className="flex items-center justify-between mt-2 pt-2 border-t border-border-dark/50">
                                <span className="text-[9px] text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full font-bold uppercase">{course.type}</span>
                                <span className="text-[9px] text-text-muted font-medium">{course.duration}</span>
                              </div>
                            </Link>
                          ))}
                          {coursesForDomain(link.label, activeDomain).length === 0 && (
                            <div className="col-span-2 py-10 text-center text-xs text-text-muted">
                              No courses listed in this domain yet
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA using Slide-in Auth Drawer */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setAuthOpen(true)}
                className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-white transition-colors cursor-pointer"
              >
                Log In
              </button>
              <button
                onClick={() => setAuthOpen(true)}
                className="px-4 py-2 text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-lg transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-white cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-surface-dark-2 animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border-dark">
              <span className="text-lg font-bold text-white">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-text-muted hover:text-white cursor-pointer"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <div className="p-4 space-y-2">
              {navLinks.map((link, i) => (
                <div key={i}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                        className="w-full flex items-center justify-between py-3 text-sm font-bold text-white cursor-pointer"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={cn('transition-transform', openDropdown === i && 'rotate-180')}
                        />
                      </button>
                      {openDropdown === i && (
                        <div className="pl-4 space-y-1 mb-2">
                          {domainsForLink(link.label).map((domain) => (
                            <Link
                              key={domain}
                              to="/courses"
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm text-text-secondary hover:text-brand-orange transition-colors"
                            >
                              {domain}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-sm font-bold text-white hover:text-brand-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border-dark space-y-3">
                <button
                  onClick={() => { setMobileOpen(false); setAuthOpen(true); }}
                  className="w-full py-2.5 text-sm font-semibold text-text-secondary border border-border-dark hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                >
                  Log In
                </button>
                <button
                  onClick={() => { setMobileOpen(false); setAuthOpen(true); }}
                  className="w-full py-2.5 text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-lg transition-colors cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Auth Drawer */}
      <AuthDrawer isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
