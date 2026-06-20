import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const footerLinks = {
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Contact Us', href: '/contact' },
  ],
  'Courses': [
    { label: 'Data Analytics', href: '/courses' },
    { label: 'Generative AI', href: '/courses' },
    { label: 'Data Science', href: '/courses' },
    { label: 'Full Stack Development', href: '/courses' },
    { label: 'DSA & CP', href: '/courses' },
  ],
  'Resources': [
    { label: 'Blog', href: '/blog' },
    { label: 'Community', href: '/community' },
    { label: 'Events', href: '#' },
    { label: 'Webinars', href: '#' },
  ],
  'Support': [
    { label: 'Help Center', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Report an Issue', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
};

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/codingninjas', icon: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
  )},
  { label: 'YouTube', href: 'https://youtube.com/c/CodingNinjasIndia', icon: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
  )},
  { label: 'Instagram', href: 'https://instagram.com/coding.ninjas', icon: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
  )},
  { label: 'Twitter', href: 'https://twitter.com/CodingNinjasOff', icon: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.7 1.8-1.56 2.46-2.55z"/></svg>
  )},
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-border-dark">
      <div className="max-w-site mx-auto px-4 lg:px-6 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="group-hover:scale-110 transition-transform duration-300">
                <rect width="40" height="40" rx="8" fill="#F66C3B"/>
                <path d="M12 15L18 20L12 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 25H28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <span className="text-base font-extrabold text-white">
                Coding<span className="text-brand-orange">Ninjas</span>
              </span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Transforming careers with outcome-focused, AI-first courses taught by MAANG faculty.
            </p>
            <div className="space-y-2 text-xs text-text-muted">
              <div className="flex items-center gap-2 hover:text-brand-orange transition-colors cursor-pointer">
                <Mail size={14} className="text-brand-orange flex-shrink-0" />
                <span>contact@codingninjas.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-brand-orange transition-colors cursor-pointer">
                <Phone size={14} className="text-brand-orange flex-shrink-0" />
                <span>1800-123-3598</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span>Navi Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold text-white mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-text-muted hover:text-brand-orange hover:translate-x-1 transition-all inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant Shimmering Brand Title */}
        <div className="w-full text-center overflow-hidden py-10 select-none border-t border-border-dark/30 mt-12 mb-6">
          <span className="shimmer-footer-title block text-[10vw] md:text-[8vw] lg:text-[90px] xl:text-[100px] font-black leading-none uppercase tracking-tighter whitespace-nowrap">
            Coding Ninjas
          </span>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-border-dark gap-4">
          <p className="text-xs text-text-muted flex items-center gap-1">
            © {new Date().getFullYear()} Coding Ninjas. Made with
            <Heart size={12} className="text-brand-orange inline" fill="#F66C3B" />
            in India
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-text-muted hover:text-brand-orange hover:bg-brand-orange/10 rounded-lg transition-all duration-300 cursor-pointer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
