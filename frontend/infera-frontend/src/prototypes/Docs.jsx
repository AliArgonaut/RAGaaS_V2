import React, { useState } from 'react';
import { 
  Database, Search, ChevronRight, ChevronDown, Copy, Check,
  Book, Zap, Shield, Code, Key, Terminal, FileText, 
  Settings, Globe, Lock, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation.jsx'
// Documentation structure - easily add new sections here
const docsStructure = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Book,
    items: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'quickstart', title: 'Quickstart Guide' },
      { id: 'authentication', title: 'Authentication' },
      { id: 'rate-limits', title: 'Rate Limits' }
    ]
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    icon: Code,
    items: [
      { id: 'knowledge-bases', title: 'Knowledge Bases' },
      { id: 'documents', title: 'Documents' },
      { id: 'queries', title: 'Queries' },
      { id: 'embeddings', title: 'Embeddings' }
    ]
  },
  {
    id: 'guides',
    title: 'Guides',
    icon: FileText,
    items: [
      { id: 'creating-kb', title: 'Creating a Knowledge Base' },
      { id: 'uploading-docs', title: 'Uploading Documents' },
      { id: 'querying', title: 'Querying Your Data' },
      { id: 'best-practices', title: 'Best Practices' }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    icon: Shield,
    items: [
      { id: 'encryption', title: 'Data Encryption' },
      { id: 'access-control', title: 'Access Control' },
      { id: 'compliance', title: 'Compliance' }
    ]
  }
];

// Documentation content - easily add new content here
const docsContent = {
  'introduction': {
    title: 'Introduction',
    sections: [
      {
        heading: 'Welcome to Infera',
        content: 'Infera provides a powerful RAG (Retrieval Augmented Generation) API that enables you to build intelligent applications with contextual understanding. Our API allows you to create knowledge bases, upload documents, and query them with natural language.',
      },
      {
        heading: 'Key Features',
        content: 'Our platform offers enterprise-grade features including sub-100ms response times, advanced vector search, automatic embedding generation, and comprehensive security controls.',
        list: [
          'Lightning-fast vector search with sub-100ms latency',
          'Support for 50+ document formats',
          'Automatic chunking and embedding generation',
          'Enterprise-grade security and compliance',
          'Scalable infrastructure with 99.9% uptime SLA'
        ]
      }
    ]
  },
  'quickstart': {
    title: 'Quickstart Guide',
    sections: [
      {
        heading: 'Get Started in 5 Minutes',
        content: 'This guide will walk you through setting up your first knowledge base and making your first query.',
      },
      {
        heading: 'Step 1: Get Your API Key',
        content: 'First, sign up for an Infera account and retrieve your API key from the dashboard.',
        code: {
          language: 'bash',
          code: `# Set your API key as an environment variable
export INFERA_API_KEY="your_api_key_here"`
        }
      },
      {
        heading: 'Step 2: Create a Knowledge Base',
        content: 'Create your first knowledge base to store and organize your documents.',
        code: {
          language: 'bash',
          code: `curl -X POST https://api.infera.ai/v1/knowledge-bases \\
  -H "Authorization: Bearer $INFERA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My First Knowledge Base",
    "description": "Product documentation"
  }'`
        }
      },
      {
        heading: 'Step 3: Upload a Document',
        content: 'Upload your first document to the knowledge base.',
        code: {
          language: 'bash',
          code: `curl -X POST https://api.infera.ai/v1/documents \\
  -H "Authorization: Bearer $INFERA_API_KEY" \\
  -F "file=@/path/to/document.pdf" \\
  -F "knowledge_base_id=kb_123456"`
        }
      },
      {
        heading: 'Step 4: Query Your Data',
        content: 'Now you can query your knowledge base with natural language.',
        code: {
          language: 'bash',
          code: `curl -X POST https://api.infera.ai/v1/queries \\
  -H "Authorization: Bearer $INFERA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "knowledge_base_id": "kb_123456",
    "query": "What is the return policy?",
    "max_results": 5
  }'`
        }
      }
    ]
  },
  'authentication': {
    title: 'Authentication',
    sections: [
      {
        heading: 'API Key Authentication',
        content: 'Infera uses API keys to authenticate requests. You can manage your API keys in the dashboard under Settings > API Keys.',
      },
      {
        heading: 'Including Your API Key',
        content: 'Include your API key in the Authorization header of every request.',
        code: {
          language: 'bash',
          code: `curl https://api.infera.ai/v1/knowledge-bases \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      },
      {
        heading: 'Best Practices',
        content: 'Keep your API keys secure and never expose them in client-side code or public repositories.',
        list: [
          'Store API keys in environment variables',
          'Rotate keys regularly',
          'Use different keys for development and production',
          'Revoke compromised keys immediately'
        ]
      }
    ]
  },
  'knowledge-bases': {
    title: 'Knowledge Bases',
    sections: [
      {
        heading: 'Overview',
        content: 'Knowledge bases are containers for organizing your documents and data. Each knowledge base has its own set of embeddings and can be queried independently.',
      },
      {
        heading: 'Create a Knowledge Base',
        content: 'Create a new knowledge base to store your documents.',
        endpoint: {
          method: 'POST',
          path: '/v1/knowledge-bases',
          description: 'Creates a new knowledge base'
        },
        code: {
          language: 'json',
          title: 'Request Body',
          code: `{
  "name": "Product Documentation",
  "description": "All product-related documentation",
  "settings": {
    "chunk_size": 512,
    "chunk_overlap": 50,
    "embedding_model": "text-embedding-3-large"
  }
}`
        },
        response: {
          language: 'json',
          title: 'Response',
          code: `{
  "id": "kb_7f8d9e0a1b2c3d4e",
  "name": "Product Documentation",
  "description": "All product-related documentation",
  "status": "active",
  "created_at": "2024-11-30T10:30:00Z",
  "document_count": 0
}`
        }
      },
      {
        heading: 'List Knowledge Bases',
        content: 'Retrieve a list of all your knowledge bases.',
        endpoint: {
          method: 'GET',
          path: '/v1/knowledge-bases',
          description: 'Returns a list of knowledge bases'
        },
        code: {
          language: 'bash',
          code: `curl https://api.infera.ai/v1/knowledge-bases \\
  -H "Authorization: Bearer $INFERA_API_KEY"`
        }
      },
      {
        heading: 'Get Knowledge Base Details',
        content: 'Retrieve details about a specific knowledge base.',
        endpoint: {
          method: 'GET',
          path: '/v1/knowledge-bases/{id}',
          description: 'Returns knowledge base details'
        }
      },
      {
        heading: 'Delete a Knowledge Base',
        content: 'Permanently delete a knowledge base and all its documents.',
        endpoint: {
          method: 'DELETE',
          path: '/v1/knowledge-bases/{id}',
          description: 'Deletes a knowledge base'
        }
      }
    ]
  },
  'queries': {
    title: 'Queries',
    sections: [
      {
        heading: 'Query a Knowledge Base',
        content: 'Search your knowledge base using natural language queries.',
        endpoint: {
          method: 'POST',
          path: '/v1/queries',
          description: 'Performs a semantic search query'
        },
        code: {
          language: 'json',
          title: 'Request Body',
          code: `{
  "knowledge_base_id": "kb_123456",
  "query": "How do I reset my password?",
  "max_results": 5,
  "filters": {
    "category": "account"
  }
}`
        },
        response: {
          language: 'json',
          title: 'Response',
          code: `{
  "results": [
    {
      "content": "To reset your password, go to Settings...",
      "score": 0.94,
      "document_id": "doc_abc123",
      "metadata": {
        "title": "Account Management",
        "page": 5
      }
    }
  ],
  "query_time_ms": 87
}`
        }
      },
      {
        heading: 'Query Parameters',
        content: 'Customize your queries with various parameters.',
        table: {
          headers: ['Parameter', 'Type', 'Description'],
          rows: [
            ['knowledge_base_id', 'string', 'ID of the knowledge base to query'],
            ['query', 'string', 'Natural language query'],
            ['max_results', 'integer', 'Maximum number of results (default: 10)'],
            ['min_score', 'float', 'Minimum similarity score (0-1)'],
            ['filters', 'object', 'Metadata filters to apply']
          ]
        }
      }
    ]
  }
};

// Sidebar Navigation Component
const Sidebar = ({ activeSection, setActiveSection, expandedSections, toggleSection }) => {
  return (
    <div className="w-64 bg-[var(--card-bg)] border-r border-[var(--border-color)] h-screen fixed left-0 top-0 flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-[var(--border-color)]">
        <div className="flex items-center space-x-2">
          <Link to="/"> 
              <Database className="w-8 h-8 text-[var(--brand-primary)]" />
          </Link> 
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-black">
              Infera
            </span>
            <div className="text-xs text-[var(--text-muted)]">API Documentation</div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-[var(--border-color)]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search docs..."
            className="w-full pl-9 pr-3 py-2 bg-[var(--section-bg)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {docsStructure.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSections.includes(section.id);
          
          return (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--section-bg)] rounded-lg transition"
              >
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                  <span>{section.title}</span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-black" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-black" />
                )}
              </button>
              
              {isExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--section-bg)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer Links */}
      <div className="p-4 border-t border-[var(--border-color)] space-y-2">
        <a href="#" className="flex items-center space-x-2 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
          <Globe className="w-4 h-4" />
          <span>API Status</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
          <Key className="w-4 h-4" />
          <span>Get API Key</span>
        </a>
      </div>
    </div>
  );
};

// Code Block Component
const CodeBlock = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6">
      {title && (
        <div className="text-sm font-medium text-[var(--text-primary)] mb-2">{title}</div>
      )}
      <div className="relative bg-[var(--section-bg)] border border-[var(--border-color)] rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border-color)]">
          <span className="text-xs font-medium text-[var(--text-muted)] uppercase">{language}</span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-xs text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-[var(--text-primary)] font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
};

// Endpoint Badge Component
const EndpointBadge = ({ method, path, description }) => {
  const methodColors = {
    GET: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    POST: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    PUT: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    DELETE: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="my-6 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4">
      <div className="flex items-center space-x-3 mb-2">
        <span className={`px-2 py-1 rounded text-xs font-bold ${methodColors[method]}`}>
          {method}
        </span>
        <code className="text-sm font-mono text-[var(--text-primary)]">{path}</code>
      </div>
      {description && (
        <p className="text-sm text-[var(--text-secondary)]">{description}</p>
      )}
    </div>
  );
};

// Table Component
const Table = ({ headers, rows }) => {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border border-[var(--border-color)] rounded-lg overflow-hidden">
        <thead className="bg-[var(--section-bg)]">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider border-b border-[var(--border-color)]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-[var(--card-bg)]">
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[var(--border-color)] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-sm text-[var(--text-secondary)]">
                  {j === 0 ? <code className="text-[var(--brand-primary)]">{cell}</code> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Content Area Component
const ContentArea = ({ activeSection }) => {
  const content = docsContent[activeSection];

  if (!content) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-4" />
          <p className="text-[var(--text-secondary)]">Select a topic from the sidebar</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">{content.title}</h1>
      
      {content.sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
            {section.heading}
          </h2>
          
          {section.content && (
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              {section.content}
            </p>
          )}

          {section.list && (
            <ul className="space-y-2 mb-4">
              {section.list.map((item, i) => (
                <li key={i} className="flex items-start space-x-2 text-[var(--text-secondary)]">
                  <Check className="w-5 h-5 text-[var(--success-color)] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {section.endpoint && (
            <EndpointBadge {...section.endpoint} />
          )}

          {section.code && (
            <CodeBlock {...section.code} />
          )}

          {section.response && (
            <CodeBlock {...section.response} />
          )}

          {section.table && (
            <Table {...section.table} />
          )}
        </div>
      ))}
    </div>
  );
};

// Main App Component
export default function InferaDocs() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState(['getting-started', 'api-reference']);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="dark">
      <div className="min-h-screen bg-[var(--background)]">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          expandedSections={expandedSections}
          toggleSection={toggleSection}
        />
        
        <main className="ml-64 p-12">
          <ContentArea activeSection={activeSection} />
        </main>
      </div>
    </div>
  );
}
