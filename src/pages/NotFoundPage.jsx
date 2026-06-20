import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Compass } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-surface-black relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 max-w-md"
      >
        <div className="w-20 h-20 bg-brand-orange/15 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <Compass size={40} className="text-brand-orange" />
        </div>

        <h1 className="text-7xl font-extrabold text-white mb-4 tracking-tighter">
          4<span className="text-brand-orange">0</span>4
        </h1>

        <h2 className="text-xl font-bold text-white mb-3">
          Lost in Space?
        </h2>

        <p className="text-sm text-text-secondary mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/" className="w-full sm:w-auto">
            <Button className="w-full justify-center gap-2 cursor-pointer">
              <Home size={18} /> Back to Home
            </Button>
          </Link>
          <Link to="/courses" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full justify-center cursor-pointer">
              Explore Courses
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
