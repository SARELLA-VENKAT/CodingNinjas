import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';


export default function SignupPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const passwordValue = watch('password');

  const onSubmit = async (data) => {
    // Mock signup delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Registered user:', data);
    // Redirect to homepage
    navigate('/');
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 bg-surface-black relative overflow-hidden">
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
            Create your account at <span className="text-brand-orange">Coding Ninjas</span>
          </h1>
          <p className="text-sm text-text-muted">
            Start learning from top educators today
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-text-muted pointer-events-none">
                <User size={18} />
              </span>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full pl-10 pr-4 py-2.5 bg-surface-dark-3 border rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors ${
                  errors.name ? 'border-red-500' : 'border-border-dark'
                }`}
                {...register('name', { required: 'Name is required' })}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

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
                className={`w-full pl-10 pr-4 py-2.5 bg-surface-dark-3 border rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors ${
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

          {/* Phone field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-text-muted pointer-events-none">
                <Phone size={18} />
              </span>
              <input
                type="tel"
                placeholder="9876543210"
                className={`w-full pl-10 pr-4 py-2.5 bg-surface-dark-3 border rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-border-dark'
                }`}
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number',
                  },
                })}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Password field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-text-muted pointer-events-none">
                <Lock size={18} />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-2.5 bg-surface-dark-3 border rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors ${
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

          {/* Confirm Password field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-text-muted pointer-events-none">
                <Lock size={18} />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-2.5 bg-surface-dark-3 border rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors ${
                  errors.confirmPassword ? 'border-red-500' : 'border-border-dark'
                }`}
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === passwordValue || 'Passwords do not match',
                })}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 accent-brand-orange"
              {...register('terms', {
                required: 'You must accept the terms and conditions',
              })}
            />
            <label htmlFor="terms" className="text-xs text-text-secondary leading-relaxed cursor-pointer select-none">
              I agree to the{' '}
              <a href="#" className="text-brand-orange hover:underline">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="#" className="text-brand-orange hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-xs text-red-500 mt-1">{errors.terms.message}</p>
          )}

          <Button
            type="submit"
            className="w-full justify-center gap-2 py-3 mt-4 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Create Account <ArrowRight size={18} />
              </>
            )}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border-dark" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-surface-dark-2 px-3 text-text-muted font-semibold">
              Or Sign Up with
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-border-dark bg-transparent hover:bg-surface-dark-3 text-white rounded-lg font-bold transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4 mr-1 text-brand-orange" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.357-2.847-6.357-6.357s2.847-6.357 6.357-6.357c1.6 0 3.06.59 4.18 1.56l3.024-3.024C19.16 2.052 15.89 1 12.24 1 5.92 1 1 5.92 1 12.24s4.92 11.24 11.24 11.24c6.34 0 11.24-4.8 11.24-11.24 0-.79-.08-1.55-.22-2.295H12.24z" />
          </svg>
          Google
        </button>

        <p className="text-sm text-text-muted text-center mt-6">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-brand-orange hover:text-brand-orange-hover font-semibold transition-colors"
          >
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
