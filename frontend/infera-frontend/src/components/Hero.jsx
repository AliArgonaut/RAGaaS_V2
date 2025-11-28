
import { Moon, Sun, Database, Zap, Shield, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--hero-gradient-from)] via-[var(--hero-gradient-via)] to-[var(--hero-gradient-to)]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--badge-bg)] backdrop-blur-sm rounded-full text-[var(--text-on-primary)] text-sm mb-8">
          <Zap className="w-4 h-4" />
          <span>Powered by Advanced RAG Technology</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-on-primary)] mb-6 leading-tight">
          Enterprise RAG infrastructure without the complexity

          <br />
          <span className="bg-gradient-to-r from-[var(--hero-accent-from)] to-[var(--hero-accent-to)] bg-clip-text text-transparent">
            Made Simple
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--hero-text-muted)] mb-10 max-w-3xl mx-auto">
          Deploy production-ready Retrieval Augmented Generation in minutes. 
          Connect your data, scale effortlessly, and get accurate AI responses.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition flex items-center space-x-2">
            <span>Start Building Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-[var(--button-ghost-bg)] backdrop-blur-sm text-[var(--text-on-primary)] border-2 border-[var(--button-ghost-border)] rounded-lg font-semibold hover:bg-[var(--button-ghost-hover)] transition">
            View Documentation
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--text-on-primary)] mb-2">99.9%</div>
            <div className="text-[var(--hero-text-muted)] text-sm">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--text-on-primary)] mb-2">&lt;100ms</div>
            <div className="text-[var(--hero-text-muted)] text-sm">Avg Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--text-on-primary)] mb-2">10M+</div>
            <div className="text-[var(--hero-text-muted)] text-sm">Queries/Month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--text-on-primary)] mb-2">SOC 2</div>
            <div className="text-[var(--hero-text-muted)] text-sm">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};


