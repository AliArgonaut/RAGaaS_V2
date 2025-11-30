import React, { useState } from 'react';
import { 
  Database, Search, Zap, Shield, BarChart3, Globe, Lock, 
  Layers, GitBranch, Settings, Users, CheckCircle, ArrowRight,
  Clock, TrendingUp, FileText, Code, Terminal, Cpu, Server,
  Activity, Eye, Filter, Download, Plus, MoreVertical, Folder
} from 'lucide-react';
import Navigation from '../components/Navigation.jsx'
// Feature categories configuration
const featureCategories = [
  {
    id: 'rag-engine',
    title: 'Advanced RAG Engine',
    icon: Cpu,
    tagline: 'State-of-the-art retrieval augmented generation',
    description: 'Our proprietary RAG engine combines cutting-edge vector search with intelligent context assembly to deliver accurate, relevant responses every time.',
    features: [
      {
        title: 'Hybrid Search Architecture',
        description: 'Combines dense vector embeddings with sparse keyword matching for superior retrieval accuracy. Our hybrid approach achieves 40% better precision than traditional vector-only search.',
        icon: Search,
        stats: ['40% better precision', 'Sub-100ms latency', '99.7% accuracy']
      },
      {
        title: 'Multi-Model Embedding Support',
        description: 'Choose from industry-leading embedding models or bring your own. Support for OpenAI, Cohere, Anthropic, and custom fine-tuned models with automatic fallback and version management.',
        icon: Layers,
        stats: ['15+ embedding models', 'Custom model support', 'Automatic optimization']
      },
      {
        title: 'Intelligent Chunking',
        description: 'Advanced document parsing with semantic-aware chunking that preserves context boundaries. Automatically detects document structure, tables, and code blocks for optimal retrieval.',
        icon: GitBranch,
        stats: ['Semantic boundaries', 'Multi-format support', 'Context preservation']
      },
      {
        title: 'Dynamic Context Assembly',
        description: 'Intelligently assembles retrieved chunks with relevance scoring, deduplication, and reranking. Automatically optimizes context window utilization for your specific LLM.',
        icon: Zap,
        stats: ['Smart reranking', 'Auto-deduplication', 'Token optimization']
      }
    ]
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise Security & Compliance',
    icon: Shield,
    tagline: 'Bank-grade security for your most sensitive data',
    description: 'Built from the ground up with enterprise security requirements in mind. SOC 2 Type II certified with comprehensive compliance coverage.',
    features: [
      {
        title: 'End-to-End Encryption',
        description: 'All data encrypted at rest using AES-256 and in transit using TLS 1.3. Customer-managed encryption keys (CMEK) available for Enterprise plans with hardware security module (HSM) backing.',
        icon: Lock,
        stats: ['AES-256 encryption', 'TLS 1.3', 'HSM-backed keys']
      },
      {
        title: 'Role-Based Access Control',
        description: 'Granular permissions system with support for custom roles, attribute-based access control (ABAC), and just-in-time access provisioning. Full audit trail of all access events.',
        icon: Users,
        stats: ['Custom roles', 'ABAC support', 'Complete audit logs']
      },
      {
        title: 'Compliance & Certifications',
        description: 'SOC 2 Type II, GDPR, HIPAA, and ISO 27001 compliant. Regular third-party penetration testing and vulnerability assessments. Data residency options for EU, US, and APAC.',
        icon: CheckCircle,
        stats: ['SOC 2 Type II', 'GDPR & HIPAA', 'ISO 27001']
      },
      {
        title: 'SSO & Identity Management',
        description: 'Enterprise SSO via SAML 2.0 and OpenID Connect. Integrates with Okta, Azure AD, Google Workspace, and custom identity providers. Support for SCIM 2.0 user provisioning.',
        icon: Globe,
        stats: ['SAML 2.0', 'SCIM provisioning', 'Major IdP support']
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Observability',
    icon: BarChart3,
    tagline: 'Deep insights into your RAG performance',
    description: 'Comprehensive analytics and monitoring tools give you complete visibility into query performance, user behavior, and system health.',
    features: [
      {
        title: 'Real-Time Performance Monitoring',
        description: 'Monitor query latency, throughput, and error rates in real-time. Automatic alerting on anomalies with configurable thresholds. Integration with Datadog, New Relic, and custom webhooks.',
        icon: Activity,
        stats: ['Real-time metrics', 'Custom alerts', 'Integration ready']
      },
      {
        title: 'Query Analytics Dashboard',
        description: 'Detailed analytics on query patterns, popular searches, and user intent. Identify knowledge gaps and opportunities to improve your content. Export reports in multiple formats.',
        icon: BarChart3,
        stats: ['Usage patterns', 'Gap analysis', 'Custom reports']
      },
      {
        title: 'Retrieval Quality Metrics',
        description: 'Track precision, recall, and relevance scores for your retrieval pipeline. A/B test different configurations and measure impact. Built-in quality scoring and feedback loops.',
        icon: TrendingUp,
        stats: ['Quality tracking', 'A/B testing', 'Feedback loops']
      },
      {
        title: 'Cost & Usage Analytics',
        description: 'Detailed breakdown of costs by knowledge base, user, and query type. Set budgets and receive alerts when approaching limits. Optimize spending with usage recommendations.',
        icon: Eye,
        stats: ['Cost tracking', 'Budget alerts', 'Optimization tips']
      }
    ]
  },
  {
    id: 'developer',
    title: 'Developer Experience',
    icon: Code,
    tagline: 'Built by developers, for developers',
    description: 'World-class API design with comprehensive SDKs, extensive documentation, and powerful developer tools.',
    features: [
      {
        title: 'RESTful API & SDKs',
        description: 'Intuitive REST API with OpenAPI 3.0 specification. Official SDKs for Python, JavaScript/TypeScript, Go, and Java. Community SDKs for Ruby, PHP, and .NET.',
        icon: Code,
        stats: ['REST API', '4 official SDKs', 'OpenAPI 3.0']
      },
      {
        title: 'Webhooks & Events',
        description: 'Real-time webhooks for document processing, query completion, and system events. Reliable delivery with automatic retries and exponential backoff. Event replay for debugging.',
        icon: Terminal,
        stats: ['Real-time events', 'Reliable delivery', 'Event replay']
      },
      {
        title: 'Sandbox Environment',
        description: 'Full-featured sandbox environment for testing and development. Separate API keys and data isolation. Free tier available for all sandbox usage.',
        icon: Settings,
        stats: ['Isolated testing', 'Free sandbox', 'Production parity']
      },
      {
        title: 'CLI & Infrastructure as Code',
        description: 'Command-line tool for rapid development and CI/CD integration. Terraform provider and CloudFormation templates for infrastructure as code workflows.',
        icon: Terminal,
        stats: ['CLI tool', 'Terraform provider', 'CI/CD ready']
      }
    ]
  },
  {
    id: 'scale',
    title: 'Scale & Performance',
    icon: Server,
    tagline: 'Built to handle billions of queries',
    description: 'Architected for massive scale with automatic horizontal scaling, intelligent caching, and global distribution.',
    features: [
      {
        title: 'Auto-Scaling Infrastructure',
        description: 'Automatically scales to handle traffic spikes without manual intervention. Handles 10,000+ concurrent queries per second. Zero-downtime deployments and updates.',
        icon: TrendingUp,
        stats: ['10K+ QPS', 'Auto-scaling', 'Zero downtime']
      },
      {
        title: 'Global CDN & Edge Caching',
        description: 'Deploy to 25+ regions worldwide with automatic request routing to the nearest edge location. Intelligent caching reduces latency by up to 80% for repeated queries.',
        icon: Globe,
        stats: ['25+ regions', '80% faster', 'Edge caching']
      },
      {
        title: 'High Availability Architecture',
        description: '99.99% uptime SLA with multi-region failover and automatic recovery. Real-time replication across availability zones. Disaster recovery with < 1 hour RPO.',
        icon: Server,
        stats: ['99.99% uptime', 'Multi-region', '< 1hr RPO']
      },
      {
        title: 'Query Optimization',
        description: 'Automatic query plan optimization with learned query patterns. Result caching with intelligent invalidation. Batch query support for high-throughput scenarios.',
        icon: Zap,
        stats: ['Auto-optimization', 'Smart caching', 'Batch queries']
      }
    ]
  }
];

// Mini Dashboard Component (Interactive Demo)
const MiniDashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [selectedKB, setSelectedKB] = useState(null);

  const knowledgeBases = [
    { id: 1, name: 'Product Docs', docs: '1,247', queries: '12.5K', status: 'active' },
    { id: 2, name: 'Customer Support', docs: '892', queries: '8.2K', status: 'active' },
    { id: 3, name: 'Internal Policies', docs: '456', queries: '3.1K', status: 'syncing' }
  ];

  const recentQueries = [
    { query: 'How do I reset my password?', time: '76ms', status: 'success' },
    { query: 'What is the return policy?', time: '92ms', status: 'success' },
    { query: 'API documentation location?', time: '68ms', status: 'success' },
    { query: 'Salesforce integration guide', time: '134ms', status: 'success' }
  ];

  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-2xl">
      {/* Mini Dashboard Header */}
      <div className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-white font-semibold">Interactive Demo</div>
            <div className="text-white/80 text-xs">Click around to explore</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveView('overview')}
            className={`px-3 py-1 rounded text-sm transition ${
              activeView === 'overview'
                ? 'bg-white text-purple-600 font-medium'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveView('queries')}
            className={`px-3 py-1 rounded text-sm transition ${
              activeView === 'queries'
                ? 'bg-white text-purple-600 font-medium'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Queries
          </button>
        </div>
      </div>

      {/* Mini Dashboard Content */}
      <div className="p-6">
        {activeView === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[var(--section-bg)] rounded-lg p-4">
                <div className="text-xs text-[var(--text-muted)] mb-1">Queries</div>
                <div className="text-2xl font-bold text-[var(--text-primary)]">2.4M</div>
                <div className="text-xs text-green-500 mt-1">↑ 12.5%</div>
              </div>
              <div className="bg-[var(--section-bg)] rounded-lg p-4">
                <div className="text-xs text-[var(--text-muted)] mb-1">Avg Time</div>
                <div className="text-2xl font-bold text-[var(--text-primary)]">87ms</div>
                <div className="text-xs text-green-500 mt-1">↓ 8.3%</div>
              </div>
              <div className="bg-[var(--section-bg)] rounded-lg p-4">
                <div className="text-xs text-[var(--text-muted)] mb-1">Knowledge Bases</div>
                <div className="text-2xl font-bold text-[var(--text-primary)]">24</div>
                <div className="text-xs text-green-500 mt-1">↑ 3</div>
              </div>
              <div className="bg-[var(--section-bg)] rounded-lg p-4">
                <div className="text-xs text-[var(--text-muted)] mb-1">Success</div>
                <div className="text-2xl font-bold text-[var(--text-primary)]">99.7%</div>
                <div className="text-xs text-green-500 mt-1">↑ 0.2%</div>
              </div>
            </div>

            {/* Chart Simulation */}
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)] mb-3">Query Volume (30 Days)</div>
              <div className="h-32 flex items-end justify-between space-x-1">
                {[65, 78, 82, 95, 88, 92, 100, 85, 90, 94, 88, 96, 82, 87, 91, 86, 93, 89, 95, 92].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-t hover:opacity-80 transition cursor-pointer"
                    style={{ height: `${height}%` }}
                    title={`Day ${i + 1}: ${Math.round(height * 120)}K queries`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Knowledge Bases */}
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)] mb-3">Knowledge Bases</div>
              <div className="space-y-2">
                {knowledgeBases.map((kb) => (
                  <button
                    key={kb.id}
                    onClick={() => setSelectedKB(selectedKB === kb.id ? null : kb.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition ${
                      selectedKB === kb.id
                        ? 'border-[var(--brand-primary)] bg-[var(--section-bg)]'
                        : 'border-[var(--border-color)] hover:bg-[var(--section-bg)]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Folder className="w-5 h-5 text-[var(--brand-primary)]" />
                      <div className="text-left">
                        <div className="text-sm font-medium text-[var(--text-primary)]">{kb.name}</div>
                        <div className="text-xs text-[var(--text-muted)]">{kb.docs} docs • {kb.queries} queries</div>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      kb.status === 'active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {kb.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeView === 'queries' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-[var(--text-primary)]">Recent Queries</div>
              <button className="text-xs text-[var(--brand-primary)] hover:underline">View All</button>
            </div>
            {recentQueries.map((query, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-color)] hover:bg-[var(--section-bg)] transition cursor-pointer"
              >
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm text-[var(--text-primary)] mb-1">{query.query}</div>
                    <div className="text-xs text-[var(--text-muted)]">{query.time} • Just now</div>
                  </div>
                </div>
                <Eye className="w-4 h-4 text-[var(--text-muted)]" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Feature Detail Card Component
const FeatureDetailCard = ({ feature }) => {
  const Icon = feature.icon;
  
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-8 hover:shadow-xl transition group">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
            {feature.title}
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
      
      {feature.stats && (
        <div className="flex flex-wrap gap-3 mt-6">
          {feature.stats.map((stat, index) => (
            <div
              key={index}
              className="px-3 py-1 bg-[var(--section-bg)] border border-[var(--border-color)] rounded-full text-xs font-medium text-[var(--text-primary)]"
            >
              {stat}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Feature Category Section Component
const FeatureCategorySection = ({ category, index }) => {
  const Icon = category.icon;
  
  return (
    <section id={category.id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-2xl mb-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-wider mb-2">
            {category.tagline}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {category.title}
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {category.features.map((feature, idx) => (
            <FeatureDetailCard key={idx} feature={feature} />
          ))}
        </div>

        {/* Show demo after Analytics section */}
        {category.id === 'analytics' && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                See It In Action
              </h3>
              <p className="text-[var(--text-secondary)]">
                Explore a live demo of the Infera dashboard
              </p>
            </div>
            <MiniDashboard />
          </div>
        )}
      </div>
    </section>
  );
};

// Main App Component
export default function InferaFeatures() {
  const [darkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[var(--background)]">
        {/* Header */}
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--hero-gradient-from)] via-[var(--hero-gradient-via)] to-[var(--hero-gradient-to)]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Enterprise-Grade RAG
              <br />
              Built for Scale
            </h1>
            
            <p className="text-xl md:text-2xl text-black mb-12 max-w-4xl mx-auto">
              From startups to Fortune 500 companies, Infera provides the infrastructure, security, and performance needed to deploy production-grade RAG applications at any scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
              <button className="px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition">
                Explore Pricing
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-black">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">99.99% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Sub-100ms Latency</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        {featureCategories.map((category, index) => (
          <FeatureCategorySection key={category.id} category={category} index={index} />
        ))}

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--hero-gradient-from)] via-[var(--hero-gradient-via)] to-[var(--hero-gradient-to)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Transform Your AI Applications?
            </h2>
            <p className="text-xl text-black/90 mb-10">
              Join thousands of developers building smarter applications with Infera's enterprise RAG platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-white text-purple-600 text-lg rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition">
                Start Free Trial
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-black border-2 border-black text-lg rounded-lg font-semibold hover:bg-white/20 transition">
                Contact Sales
              </button>
            </div>
            <p className="mt-6 text-white/70 text-sm">
              14-day free trial • No credit card required • Full feature access
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Database className="w-6 h-6 text-[var(--brand-primary)]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-black">
                Infera
              </span>
            </div>
            <div className="text-sm text-[var(--text-muted)]">
              © 2024 Infera. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
