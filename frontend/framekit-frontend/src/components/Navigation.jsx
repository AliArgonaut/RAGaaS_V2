
import { Moon, Sun, Database, Zap, Shield, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';

export default function Navigation({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className="fixed w-full bg-[var(--nav-bg)] backdrop-blur-md z-50 border-b border-[var(--nav-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Database className="w-8 h-8 text-[var(--brand-primary)]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text">
              Infera
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
              Features
            </a>
            <a href="#pricing" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
              Pricing
            </a>
            <a href="#docs" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
              Docs
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-[var(--button-secondary-bg)] text-[var(--text-secondary)] hover:bg-[var(--button-secondary-hover)] transition"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-[var(--text-on-primary)] rounded-lg hover:shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--nav-border)]">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-[var(--text-secondary)] hover:text-[var(--brand-primary)]">
              Features
            </a>
            <a href="#pricing" className="block text-[var(--text-secondary)] hover:text-[var(--brand-primary)]">
              Pricing
            </a>
            <a href="#docs" className="block text-[var(--text-secondary)] hover:text-[var(--brand-primary)]">
              Docs
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center space-x-2 text-[var(--text-secondary)]"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>Toggle Theme</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};


