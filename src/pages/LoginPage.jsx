import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';


export default function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // Mock authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Logged in user:', data);
    // Redirect to home or courses page
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-surface-black relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 bg-brand-orange-hover/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md p-8 bg-surface-dark-2 border border-border-dark rounded-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Welcome back to <span className="text-brand-orange">Coding Ninjas</span>
          </h1>
          <p className="text-sm text-text-muted">
            Log in to continue your learning journey
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-text-muted pointer-events-none">
                <Mail size={18} />
              </span>
              <input
                type="email"
                placeholder="name@company.com"
                className={`w-full pl-10 pr-4 py-3 bg-surface-dark-3 border rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-border-dark'
                }`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password field */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-brand-orange hover:text-brand-orange-hover transition-colors font-semibold"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-text-muted pointer-events-none">
                <Lock size={18} />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-3 bg-surface-dark-3 border rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors ${
                  errors.password ? 'border-red-500' : 'border-border-dark'
                }`}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full justify-center gap-2 py-3 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Log In <ArrowRight size={18} />
              </>
            )}
          </Button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border-dark" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-surface-dark-2 px-3 text-text-muted font-semibold">
              Or continue with
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-border-dark bg-transparent hover:bg-surface-dark-3 text-white rounded-lg font-bold transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4 mr-1 text-brand-orange" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.357-2.847-6.357-6.357s2.847-6.357 6.357-6.357c1.6 0 3.06.59 4.18 1.56l3.024-3.024C19.16 2.052 15.89 1 12.24 1 5.92 1 1 5.92 1 12.24s4.92 11.24 11.24 11.24c6.34 0 11.24-4.8 11.24-11.24 0-.79-.08-1.55-.22-2.295H12.24z" />
          </svg>
          Google
        </button>

        <p className="text-sm text-text-muted text-center mt-8">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-brand-orange hover:text-brand-orange-hover font-semibold transition-colors"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
