
import { Moon, Sun, Database, Zap, Shield, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';


const FeatureCard = ({ icon: Icon, title, description, features, bgColor, iconColor }) => {
  return (
    <div className="bg-[var(--card-bg)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
      <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] mb-4">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-[var(--text-primary)]">
            <CheckCircle className="w-5 h-5 text-[var(--success-color)] mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Features Section Component
export default function Features() {
  const features = [
    {
      icon: Database,
      title: "Instant Integration",
      description: "Connect your documents, databases, and APIs in seconds. Support for 50+ data sources out of the box.",
      features: [
        "PDF, Word, Excel support",
        "Database connectors",
        "REST API integration"
      ],
      bgColor: "bg-[var(--feature-1-bg)]",
      iconColor: "text-[var(--feature-1-icon)]"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized vector search and caching deliver sub-100ms response times at any scale.",
      features: [
        "Advanced vector indexing",
        "Intelligent caching",
        "Global CDN delivery"
      ],
      bgColor: "bg-[var(--feature-2-bg)]",
      iconColor: "text-[var(--feature-2-icon)]"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption and comprehensive access controls.",
      features: [
        "Data encryption at rest",
        "Role-based access",
        "Audit logs & compliance"
      ],
      bgColor: "bg-[var(--feature-3-bg)]",
      iconColor: "text-[var(--feature-3-icon)]"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--section-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Enterprise-grade RAG infrastructure without the complexity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};


