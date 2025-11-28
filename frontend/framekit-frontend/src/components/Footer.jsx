import { Moon, Sun, Database, Zap, Shield, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';



export default function Footer(){
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--section-bg)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Database className="w-6 h-6 text-[var(--brand-primary)]" />
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
              Infera
            </span>
          </div>
          <div className="flex space-x-6 text-[var(--text-secondary)]">
            <a href="#" className="hover:text-[var(--brand-primary)] transition">About</a>
            <a href="#" className="hover:text-[var(--brand-primary)] transition">Blog</a>
            <a href="#" className="hover:text-[var(--brand-primary)] transition">Privacy</a>
            <a href="#" className="hover:text-[var(--brand-primary)] transition">Terms</a>
          </div>
        </div>
        <div className="mt-8 text-center text-[var(--text-muted)] text-sm">
          © 2024 Infera. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


