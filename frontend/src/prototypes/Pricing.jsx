import React, { useState } from 'react';
import { 
  Database, Check, X, ArrowRight, Zap, Shield, Users, 
  Headphones, Globe, TrendingUp, Building2, Sparkles, Crown
} from 'lucide-react';
import Navigation from '../components/Navigation.jsx'
// Pricing tiers configuration
const pricingTiers = [
  {
    name: 'Starter',
    icon: Zap,
    description: 'Perfect for small teams and side projects',
    price: { monthly: 49, annual: 470 },
    popular: false,
    cta: 'Start Free Trial',
    features: {
      included: [
        '100,000 queries/month',
        '5 knowledge bases',
        '1GB storage',
        'Up to 3 team members',
        'Email support',
        'API access',
        'Basic analytics',
        '99.9% uptime SLA'
      ],
      excluded: [
        'Custom embedding models',
        'Advanced security features',
        'Dedicated support',
        'SSO/SAML'
      ]
    },
    limits: {
      queries: '100K',
      knowledgeBases: '5',
      storage: '1GB',
      teamMembers: '3'
    }
  },
  {
    name: 'Professional',
    icon: Building2,
    description: 'For growing teams that need more power',
    price: { monthly: 199, annual: 1910 },
    popular: true,
    cta: 'Start Free Trial',
    features: {
      included: [
        '500,000 queries/month',
        '25 knowledge bases',
        '10GB storage',
        'Up to 15 team members',
        'Priority email & chat support',
        'Advanced API access',
        'Advanced analytics & reporting',
        '99.95% uptime SLA',
        'Custom embedding models',
        'Advanced security features',
        'Role-based access control',
        'Audit logs'
      ],
      excluded: [
        'Dedicated account manager',
        'SSO/SAML'
      ]
    },
    limits: {
      queries: '500K',
      knowledgeBases: '25',
      storage: '10GB',
      teamMembers: '15'
    }
  },
  {
    name: 'Enterprise',
    icon: Crown,
    description: 'Custom solutions for large organizations',
    price: null,
    popular: false,
    cta: 'Contact Sales',
    features: {
      included: [
        'Unlimited queries',
        'Unlimited knowledge bases',
        'Unlimited storage',
        'Unlimited team members',
        '24/7 phone & email support',
        'Dedicated account manager',
        'Custom SLA (up to 99.99%)',
        'SSO/SAML authentication',
        'Custom contracts & invoicing',
        'On-premise deployment option',
        'Advanced compliance (SOC 2, HIPAA)',
        'Custom integrations',
        'Training & onboarding',
        'Volume discounts'
      ],
      excluded: []
    },
    limits: {
      queries: 'Unlimited',
      knowledgeBases: 'Unlimited',
      storage: 'Unlimited',
      teamMembers: 'Unlimited'
    }
  }
];

// Add-ons configuration
const addOns = [
  {
    name: 'Additional Queries',
    description: 'Extra query capacity beyond your plan',
    price: '$0.50 per 1,000 queries',
    icon: TrendingUp
  },
  {
    name: 'Additional Storage',
    description: 'Extra storage for documents and embeddings',
    price: '$10 per 10GB/month',
    icon: Database
  },
  {
    name: 'Premium Support',
    description: '24/7 priority support with 1-hour response time',
    price: '$500/month',
    icon: Headphones
  },
  {
    name: 'Dedicated Infrastructure',
    description: 'Isolated compute and storage resources',
    price: 'Custom pricing',
    icon: Shield
  }
];

// FAQ configuration
const faqs = [
  {
    question: 'What counts as a query?',
    answer: 'A query is a single API request to search your knowledge base. Each request counts as one query, regardless of the number of results returned.'
  },
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle.'
  },
  {
    question: 'What happens if I exceed my query limit?',
    answer: 'If you exceed your monthly query limit, your queries will continue to work but you will be charged overage fees at $0.50 per 1,000 additional queries.'
  },
  {
    question: 'Do you offer discounts for nonprofits or educational institutions?',
    answer: 'Yes! We offer 50% discounts for qualified nonprofits and educational institutions. Contact our sales team for more information.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and ACH transfers for annual plans. Enterprise customers can also use custom invoicing.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, all paid plans include a 14-day free trial with no credit card required. You get full access to all features during your trial period.'
  }
];

// Pricing Card Component
const PricingCard = ({ tier, isAnnual }) => {
  const Icon = tier.icon;
  const monthlyPrice = tier.price?.monthly || 0;
  const annualPrice = tier.price?.annual || 0;
  const displayPrice = tier.price ? (isAnnual ? annualPrice : monthlyPrice) : null;
  const monthlyEquivalent = isAnnual && annualPrice > 0 ? Math.round(annualPrice / 12) : monthlyPrice;
  const savings = tier.price && annualPrice > 0 ? Math.round(((monthlyPrice * 12 - annualPrice) / (monthlyPrice * 12)) * 100) : 0;

  return (
    <div className={`bg-[var(--card-bg)] rounded-2xl p-8 transition-all ${
      tier.popular 
        ? 'border-2 border-[var(--brand-primary)] shadow-2xl scale-105 relative' 
        : 'border border-[var(--border-color)] shadow-lg hover:shadow-xl'
    }`}>
      {tier.popular && (
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
          <span className=" text-green-600  px-4 py-1 mb-2 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
          tier.popular ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]' : 'bg-[var(--section-bg)]'
        }`}>
          <Icon className={`w-6 h-6 ${tier.popular ? 'text-white' : 'text-[var(--brand-primary)]'}`} />
        </div>
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{tier.name}</h3>
        <p className="text-sm text-[var(--text-secondary)]">{tier.description}</p>
      </div>

      <div className="text-center mb-8">
        {displayPrice ? (
          <>
            <div className="flex items-baseline justify-center space-x-2 mb-2">
              <span className="text-5xl font-bold text-[var(--text-primary)]">${displayPrice.toLocaleString()}</span>
              <span className="text-[var(--text-secondary)]">/{isAnnual ? 'year' : 'month'}</span>
            </div>
            {isAnnual && savings > 0 && (
              <>
                <div className="text-sm text-green-600  font-medium mb-1">
                  Save {savings}% with annual billing
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  ${monthlyEquivalent}/month billed annually
                </div>
              </>
            )}
            {!isAnnual && annualPrice > 0 && (
              <div className="text-sm text-[var(--text-muted)]">
                ${annualPrice.toLocaleString()}/year if billed annually
              </div>
            )}
          </>
        ) : (
          <div className="text-3xl font-bold text-[var(--text-primary)] mb-2">Custom</div>
        )}
      </div>

      <button className={`w-full py-3 rounded-lg font-semibold transition mb-8 flex items-center justify-center space-x-2 ${
        tier.popular
          ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white hover:shadow-lg hover:scale-105'
          : 'bg-[var(--section-bg)] text-[var(--text-primary)] hover:bg-[var(--button-secondary-hover)] border border-[var(--border-color)]'
      }`}>
        <span>{tier.cta}</span>
        <ArrowRight className="w-5 h-5" />
      </button>

      <div className="space-y-4 mb-6">
        <div className="text-sm font-semibold text-[var(--text-primary)] mb-3">INCLUDES:</div>
        {tier.features.included.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-[var(--success-color)] flex-shrink-0 mt-0.5" />
            <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
          </div>
        ))}
      </div>

      {tier.features.excluded.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-[var(--border-color)]">
          {tier.features.excluded.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <X className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[var(--text-muted)]">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Comparison Table Component
const ComparisonTable = () => {
  const features = [
    { category: 'Usage', items: [
      { name: 'Queries per month', starter: '100,000', professional: '500,000', enterprise: 'Unlimited' },
      { name: 'Knowledge bases', starter: '5', professional: '25', enterprise: 'Unlimited' },
      { name: 'Storage', starter: '1GB', professional: '10GB', enterprise: 'Unlimited' },
      { name: 'Team members', starter: '3', professional: '15', enterprise: 'Unlimited' }
    ]},
    { category: 'Features', items: [
      { name: 'API access', starter: true, professional: true, enterprise: true },
      { name: 'Analytics dashboard', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
      { name: 'Custom embedding models', starter: false, professional: true, enterprise: true },
      { name: 'Role-based access control', starter: false, professional: true, enterprise: true },
      { name: 'SSO/SAML', starter: false, professional: false, enterprise: true },
      { name: 'Audit logs', starter: false, professional: true, enterprise: true }
    ]},
    { category: 'Support', items: [
      { name: 'Support channels', starter: 'Email', professional: 'Email & Chat', enterprise: '24/7 Phone & Email' },
      { name: 'Response time', starter: '24 hours', professional: '4 hours', enterprise: '1 hour' },
      { name: 'Dedicated account manager', starter: false, professional: false, enterprise: true },
      { name: 'Training & onboarding', starter: false, professional: false, enterprise: true }
    ]},
    { category: 'Security & Compliance', items: [
      { name: 'SOC 2 Type II', starter: true, professional: true, enterprise: true },
      { name: 'HIPAA compliance', starter: false, professional: false, enterprise: true },
      { name: 'On-premise deployment', starter: false, professional: false, enterprise: true },
      { name: 'Custom SLA', starter: false, professional: false, enterprise: true }
    ]}
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-[var(--border-color)]">
            <th className="text-left py-4 px-4 text-[var(--text-primary)] font-semibold">Feature</th>
            <th className="text-center py-4 px-4 text-[var(--text-primary)] font-semibold">Starter</th>
            <th className="text-center py-4 px-4 text-[var(--text-primary)] font-semibold">Professional</th>
            <th className="text-center py-4 px-4 text-[var(--text-primary)] font-semibold">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((category, catIndex) => (
            <React.Fragment key={catIndex}>
              <tr className="bg-[var(--section-bg)]">
                <td colSpan="4" className="py-3 px-4 font-semibold text-[var(--text-primary)] text-sm uppercase">
                  {category.category}
                </td>
              </tr>
              {category.items.map((item, itemIndex) => (
                <tr key={itemIndex} className="border-b border-[var(--border-color)]">
                  <td className="py-4 px-4 text-[var(--text-secondary)]">{item.name}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof item.starter === 'boolean' ? (
                      item.starter ? (
                        <Check className="w-5 h-5 text-[var(--success-color)] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-[var(--text-muted)] mx-auto" />
                      )
                    ) : (
                      <span className="text-[var(--text-secondary)]">{item.starter}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof item.professional === 'boolean' ? (
                      item.professional ? (
                        <Check className="w-5 h-5 text-[var(--success-color)] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-[var(--text-muted)] mx-auto" />
                      )
                    ) : (
                      <span className="text-[var(--text-secondary)]">{item.professional}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof item.enterprise === 'boolean' ? (
                      item.enterprise ? (
                        <Check className="w-5 h-5 text-[var(--success-color)] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-[var(--text-muted)] mx-auto" />
                      )
                    ) : (
                      <span className="text-[var(--text-secondary)]">{item.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-[var(--border-color)] last:border-0">
      <button
        onClick={toggle}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[var(--brand-primary)] transition"
      >
        <span className="text-lg font-semibold text-[var(--text-primary)]">{question}</span>
        <span className="text-2xl text-[var(--text-muted)]">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-6 text-[var(--text-secondary)] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

// Main Pricing Component
export default function InferaPricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="dark">
      <div className="min-h-screen bg-[var(--background)]">
        {/* Header */}
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--section-bg)] border border-[var(--border-color)] rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4 text-[var(--brand-primary)]" />
              <span className="text-[var(--text-secondary)]">14-day free trial • No credit card required</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Simple, transparent pricing
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto">
              Choose the plan that fits your needs. Scale up or down at any time. All plans include our core features with 99.9% uptime SLA.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-16">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-7 rounded-full transition ${
                  isAnnual ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]' : 'bg-[var(--border-color)]'
                }`}
              >
                <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}></span>
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>
                Annual
              </span>
              <span className="text-sm text-green-600 font-semibold">Save up to 20%</span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {pricingTiers.map((tier, index) => (
                <PricingCard key={index} tier={tier} isAnnual={isAnnual} />
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--section-bg)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Add-ons & Extras
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                Extend your plan with additional capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => {
                const Icon = addon.icon;
                return (
                  <div key={index} className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6 hover:shadow-lg transition">
                    <div className="w-10 h-10 bg-[var(--section-bg)] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[var(--brand-primary)]" />
                    </div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">{addon.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{addon.description}</p>
                    <div className="text-lg font-bold text-[var(--brand-primary)]">{addon.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Compare all features
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                See exactly what's included in each plan
              </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden">
              <ComparisonTable />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--section-bg)]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                Everything you need to know about pricing
              </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  toggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Our sales team is here to help you find the perfect plan for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-lg font-semibold hover:bg-[var(--section-bg)] transition">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto text-center text-sm text-[var(--text-muted)]">
            © 2024 Infera. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
