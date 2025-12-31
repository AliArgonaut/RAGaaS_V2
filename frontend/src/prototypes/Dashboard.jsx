import React, { useState } from 'react';
import { 
  Database, Search, Settings, Bell, ChevronDown, Users, FileText, 
  Activity, TrendingUp, AlertCircle, CheckCircle, Clock, Zap,
  BarChart3, LineChart, Filter, Download, Plus, MoreVertical,
  Folder, Shield, Globe, ArrowUp, ArrowDown, Eye
} from 'lucide-react';

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', icon: BarChart3, label: 'Overview' },
    { id: 'knowledge', icon: Database, label: 'Knowledge Bases' },
    { id: 'queries', icon: Search, label: 'Query Analytics' },
    { id: 'documents', icon: FileText, label: 'Documents' },
    { id: 'users', icon: Users, label: 'Team & Access' },
    { id: 'security', icon: Shield, label: 'Security & Compliance' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="w-64 bg-[var(--card-bg)] border-r border-[var(--border-color)] h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[var(--border-color)]">
        <div className="flex items-center space-x-2">
          <Database className="w-8 h-8 text-[var(--brand-primary)]" />
          <span className="text-xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            Infera
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--section-bg)]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Usage Stats */}
      <div className="p-4 border-t border-[var(--border-color)]">
        <div className="bg-[var(--section-bg)] rounded-lg p-4">
          <div className="text-xs text-[var(--text-muted)] mb-2">Monthly Usage</div>
          <div className="flex items-baseline space-x-1 mb-2">
            <span className="text-2xl font-bold text-[var(--text-primary)]">847K</span>
            <span className="text-sm text-[var(--text-secondary)]">/ 1M</span>
          </div>
          <div className="w-full bg-[var(--border-color)] rounded-full h-2">
            <div className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] h-2 rounded-full" style={{width: '84.7%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="bg-[var(--card-bg)] border-b border-[var(--border-color)] h-16 fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6">
      <div className="flex items-center flex-1 max-w-2xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search knowledge bases, documents, queries..."
            className="w-full pl-10 pr-4 py-2 bg-[var(--section-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-3 pl-4 border-l border-[var(--border-color)]">
          <div className="w-8 h-8 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full flex items-center justify-center text-white font-semibold text-sm">
            AC
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-medium text-[var(--text-primary)]">Acme Corp</div>
            <div className="text-xs text-[var(--text-muted)]">Enterprise Plan</div>
          </div>
          <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
        </div>
      </div>
    </header>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, icon: Icon, trend }) => {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium text-[var(--text-secondary)]">{title}</div>
        <Icon className="w-5 h-5 text-[var(--brand-primary)]" />
      </div>
      <div className="flex items-baseline space-x-2 mb-2">
        <span className="text-3xl font-bold text-[var(--text-primary)]">{value}</span>
      </div>
      <div className="flex items-center space-x-1">
        {trend === 'up' ? (
          <ArrowUp className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDown className="w-4 h-4 text-red-500" />
        )}
        <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {change}%
        </span>
        <span className="text-sm text-[var(--text-muted)]">vs last month</span>
      </div>
    </div>
  );
};

// Knowledge Base Card Component
const KnowledgeBaseCard = ({ name, documents, queries, status, lastUpdated }) => {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6 hover:shadow-lg transition group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[var(--feature-1-bg)] rounded-lg flex items-center justify-center">
            <Folder className="w-5 h-5 text-[var(--feature-1-icon)]" />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition">
              {name}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                status === 'active' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {status === 'active' ? 'Active' : 'Syncing'}
              </span>
            </div>
          </div>
        </div>
        <button className="p-2 opacity-0 group-hover:opacity-100 transition">
          <MoreVertical className="w-5 h-5 text-[var(--text-muted)]" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-xs text-[var(--text-muted)] mb-1">Documents</div>
          <div className="text-lg font-semibold text-[var(--text-primary)]">{documents}</div>
        </div>
        <div>
          <div className="text-xs text-[var(--text-muted)] mb-1">Queries (24h)</div>
          <div className="text-lg font-semibold text-[var(--text-primary)]">{queries}</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
        <div className="flex items-center space-x-1">
          <Clock className="w-3 h-3" />
          <span>Updated {lastUpdated}</span>
        </div>
        <button className="text-[var(--brand-primary)] hover:underline">View details</button>
      </div>
    </div>
  );
};

// Recent Query Component
const RecentQuery = ({ query, status, responseTime, timestamp }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--section-bg)] px-4 -mx-4 rounded-lg transition">
      <div className="flex items-center space-x-4 flex-1">
        <div className={`w-2 h-2 rounded-full ${
          status === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}></div>
        <div className="flex-1">
          <div className="text-sm font-medium text-[var(--text-primary)] mb-1">{query}</div>
          <div className="flex items-center space-x-4 text-xs text-[var(--text-muted)]">
            <span>{timestamp}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>{responseTime}ms</span>
            </span>
          </div>
        </div>
      </div>
      <button className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
        <Eye className="w-4 h-4" />
      </button>
    </div>
  );
};

// Main Dashboard Component
const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Queries"
          value="2.4M"
          change="12.5"
          icon={Search}
          trend="up"
        />
        <StatCard
          title="Avg Response Time"
          value="87ms"
          change="8.3"
          icon={Zap}
          trend="down"
        />
        <StatCard
          title="Knowledge Bases"
          value="24"
          change="3"
          icon={Database}
          trend="up"
        />
        <StatCard
          title="Success Rate"
          value="99.7%"
          change="0.2"
          icon={CheckCircle}
          trend="up"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Query Volume Chart */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Query Volume</h3>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm bg-[var(--section-bg)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                7D
              </button>
              <button className="px-3 py-1 text-sm bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-lg text-white">
                30D
              </button>
              <button className="px-3 py-1 text-sm bg-[var(--section-bg)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                90D
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[65, 78, 82, 95, 88, 92, 100, 85, 90, 94, 88, 96].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-t-lg hover:opacity-80 transition"
                  style={{ height: `${height}%` }}
                ></div>
                <div className="text-xs text-[var(--text-muted)] mt-2">{i + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Distribution */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Response Time Distribution</h3>
            <button className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[var(--text-secondary)]">&lt; 50ms</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">45%</span>
              </div>
              <div className="w-full bg-[var(--section-bg)] rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[var(--text-secondary)]">50-100ms</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">38%</span>
              </div>
              <div className="w-full bg-[var(--section-bg)] rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '38%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[var(--text-secondary)]">100-200ms</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">12%</span>
              </div>
              <div className="w-full bg-[var(--section-bg)] rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '12%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[var(--text-secondary)]">&gt; 200ms</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">5%</span>
              </div>
              <div className="w-full bg-[var(--section-bg)] rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '5%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Knowledge Bases Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">Active Knowledge Bases</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white rounded-lg hover:shadow-lg transition">
            <Plus className="w-4 h-4" />
            <span>New Knowledge Base</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <KnowledgeBaseCard
            name="Product Documentation"
            documents="1,247"
            queries="12.5K"
            status="active"
            lastUpdated="2 hours ago"
          />
          <KnowledgeBaseCard
            name="Customer Support"
            documents="892"
            queries="8.2K"
            status="active"
            lastUpdated="5 hours ago"
          />
          <KnowledgeBaseCard
            name="Internal Policies"
            documents="456"
            queries="3.1K"
            status="syncing"
            lastUpdated="10 minutes ago"
          />
        </div>
      </div>

      {/* Recent Queries */}
      <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">Recent Queries</h3>
          <button className="text-sm text-[var(--brand-primary)] hover:underline">View all</button>
        </div>
        <div>
          <RecentQuery
            query="How do I reset my password?"
            status="success"
            responseTime="76"
            timestamp="2 minutes ago"
          />
          <RecentQuery
            query="What is the return policy?"
            status="success"
            responseTime="92"
            timestamp="5 minutes ago"
          />
          <RecentQuery
            query="Where can I find the API documentation?"
            status="success"
            responseTime="68"
            timestamp="8 minutes ago"
          />
          <RecentQuery
            query="How to integrate with Salesforce?"
            status="success"
            responseTime="134"
            timestamp="12 minutes ago"
          />
          <RecentQuery
            query="What are the security certifications?"
            status="success"
            responseTime="89"
            timestamp="15 minutes ago"
          />
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function InferaDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="dark">
      <div className="min-h-screen bg-[var(--background)]">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Header />
        
        <main className="ml-64 pt-16">
          <div className="p-8">
            {activeTab === 'overview' && <Overview />}
            {activeTab !== 'overview' && (
              <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-12 text-center">
                <div className="text-[var(--text-muted)] text-lg">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} view coming soon
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
