export default function CTASection(){
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
          Ready to Transform Your AI Applications?
        </h2>
        <p className="text-xl text-[var(--text-secondary)] mb-10">
          Join thousands of developers building smarter applications with Infera
        </p>
        <button className="px-10 py-5 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-[var(--text-on-primary)] text-lg rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition">
          Get Started for Free
        </button>
        <p className="mt-4 text-[var(--text-muted)]">
          No credit card required • 14-day free trial
        </p>
      </div>
    </section>
  );
};


