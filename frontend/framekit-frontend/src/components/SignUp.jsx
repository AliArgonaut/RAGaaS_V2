import React, { useState } from 'react';
import { Database, Mail, Lock, User, ArrowRight, Check, Github, Chrome } from 'lucide-react';

export default function SignUpPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[var(--background)] transition-colors duration-300 flex items-center justify-center p-4">
        {/* Background Gradient Decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[var(--hero-gradient-from)] to-[var(--hero-gradient-via)] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[var(--hero-gradient-via)] to-[var(--hero-gradient-to)] rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="w-full max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Branding & Benefits */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 mb-8">
                <Database className="w-10 h-10 text-[var(--brand-primary)]" />
                <span className="text-3xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                  Infera
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Start building with RAG in minutes
              </h1>

              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Join thousands of developers already using Infera to power their AI applications.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--feature-1-bg)] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[var(--feature-1-icon)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">Free tier included</h3>
                    <p className="text-[var(--text-secondary)] text-sm">10,000 queries per month at no cost</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--feature-2-bg)] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[var(--feature-2-icon)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">No credit card required</h3>
                    <p className="text-[var(--text-secondary)] text-sm">Start building immediately</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--feature-3-bg)] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[var(--feature-3-icon)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">Deploy in seconds</h3>
                    <p className="text-[var(--text-secondary)] text-sm">API-first design for rapid integration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="bg-[var(--card-bg)] p-8 md:p-10 rounded-2xl shadow-2xl border border-[var(--border-color)]">
              {/* Mobile Logo */}
              <div className="md:hidden flex items-center justify-center space-x-2 mb-6">
                <Database className="w-8 h-8 text-[var(--brand-primary)]" />
                <span className="text-2xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                  Infera
                </span>
              </div>

              <div className="text-center md:text-left mb-8">
                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                  Create your account
                </h2>
                <p className="text-[var(--text-secondary)]">
                  Get started with your free account today
                </p>
              </div>

              {/* Social Sign Up */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-[var(--button-secondary-bg)] hover:bg-[var(--button-secondary-hover)] text-[var(--text-primary)] rounded-lg transition border border-[var(--border-color)]">
                  <Github className="w-5 h-5" />
                  <span className="font-medium">Continue with GitHub</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-[var(--button-secondary-bg)] hover:bg-[var(--button-secondary-hover)] text-[var(--text-primary)] rounded-lg transition border border-[var(--border-color)]">
                  <Chrome className="w-5 h-5" />
                  <span className="font-medium">Continue with Google</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[var(--border-color)]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[var(--card-bg)] text-[var(--text-muted)]">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Sign Up Form */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[var(--section-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[var(--section-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[var(--section-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[var(--section-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-[var(--brand-primary)] bg-[var(--section-bg)] border-[var(--border-color)] rounded focus:ring-[var(--brand-primary)]"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-[var(--text-secondary)]">
                    I agree to the{' '}
                    <a href="#" className="text-[var(--brand-primary)] hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[var(--brand-primary)] hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-[var(--text-on-primary)] rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition"
                >
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-[var(--text-secondary)]">
                  Already have an account?{' '}
                  <a href="#" className="text-[var(--brand-primary)] hover:underline font-medium">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
