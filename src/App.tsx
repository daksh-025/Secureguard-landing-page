import { Shield, Mail, Phone, Link2, Mic, ChevronRight, AlertTriangle, Sparkles, Lock, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Mail,
      title: 'Email & Text Scanner',
      description: 'AI-powered analysis to detect phishing attempts and scam messages in real-time',
      gradient: 'from-blue-500 to-cyan-500',
      path: '/email-scanner',
      stats: '10M+ scans'
    },
    {
      icon: Phone,
      title: 'Phone Number Lookup',
      description: 'Instantly verify caller identity and check scam likelihood ratings',
      gradient: 'from-emerald-500 to-teal-500',
      path: '/phone-lookup',
      stats: '5M+ lookups'
    },
    {
      icon: Link2,
      title: 'Link Scanner',
      description: 'Analyze URLs for malicious content and fraudulent websites before you click',
      gradient: 'from-orange-500 to-red-500',
      path: '/link-scanner',
      stats: '15M+ URLs'
    },
    {
      icon: Mic,
      title: 'Voice Deepfake Detector',
      description: 'Advanced AI detection to identify synthetic voices and deepfake audio',
      gradient: 'from-rose-500 to-pink-500',
      path: '/voice-detector',
      stats: '1M+ voices'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-glow"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-glow"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            animationDelay: '1s'
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-glow"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
            animationDelay: '2s'
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className={`border-b backdrop-blur-xl sticky top-0 z-50 transition-all duration-500 ${
            scrollY > 50
              ? 'border-slate-700/50 bg-slate-950/80 shadow-lg shadow-cyan-500/5'
              : 'border-slate-800/30 bg-slate-950/50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <Shield className="w-9 h-9 text-cyan-400 relative z-10" strokeWidth={2.5} />
                  <div className="absolute inset-0 blur-2xl bg-cyan-400/40 group-hover:bg-cyan-400/60 transition-all duration-500 animate-pulse-glow" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  SecureGuard
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-5 py-2 text-slate-300 hover:text-white transition-colors duration-300 font-medium">
                  Features
                </button>
                <button className="px-5 py-2 text-slate-300 hover:text-white transition-colors duration-300 font-medium">
                  Pricing
                </button>
                <button className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold overflow-hidden group">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 animate-slide-up backdrop-blur-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>AI-Powered Protection • Real-Time Detection</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight animate-slide-up stagger-1">
                Your Digital
                <br />
                <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Security Shield
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-2">
                Advanced AI-powered tools to detect scams, verify identities, and protect you from cyber threats.
                <span className="text-slate-300"> Stay one step ahead.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center justify-center gap-4 pt-8 animate-slide-up stagger-3">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-lg overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Try It Free
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
                <button className="group px-10 py-5 bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-white rounded-2xl font-bold text-lg hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 pt-12 animate-slide-up stagger-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">Bank-level encryption</span>
                </div>
                <div className="w-px h-4 bg-slate-700" />
                <div className="flex items-center gap-2 text-slate-400">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">SOC 2 certified</span>
                </div>
                <div className="w-px h-4 bg-slate-700" />
                <div className="flex items-center gap-2 text-slate-400">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">99.9% accuracy</span>
                </div>
              </div>
            </div>

            {/* Floating Dashboard Preview */}
            <div
              className="mt-20 relative animate-float"
              style={{
                animationDelay: '0.5s'
              }}
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />

                {/* Mock Dashboard */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs text-slate-400">Active Scans</span>
                    </div>
                    <div className="text-2xl font-bold text-white">1,247</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                      <span className="text-xs text-slate-400">Threats Blocked</span>
                    </div>
                    <div className="text-2xl font-bold text-white">89</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-xs text-slate-400">Protection Score</span>
                    </div>
                    <div className="text-2xl font-bold text-white">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Comprehensive Security</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Enterprise-Grade Protection
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Powered by cutting-edge AI to keep you safe from emerging threats
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-slate-900/30 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-10 hover:border-slate-700 transition-all duration-700 cursor-pointer overflow-hidden"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    {/* Animated Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-all duration-700`}
                    />

                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${feature.gradient} blur-xl -z-10`} />

                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative`}>
                        <Icon className="w-10 h-10 text-white relative z-10" strokeWidth={2} />
                        <div className={`absolute inset-0 blur-2xl bg-gradient-to-br ${feature.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500">
                          {feature.title}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium px-3 py-1 bg-slate-800/50 rounded-full">
                          {feature.stats}
                        </span>
                      </div>

                      <p className="text-slate-400 text-lg leading-relaxed">
                        {feature.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-3 text-cyan-400 font-semibold pt-4 group-hover:gap-5 transition-all duration-500">
                        <span className="text-base">Explore Feature</span>
                        <ChevronRight
                          className={`w-5 h-5 transition-all duration-500 ${
                            hoveredFeature === index ? 'translate-x-2' : ''
                          }`}
                        />
                      </div>
                    </div>

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-16 overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse-glow" />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl -z-10" />

              <div className="relative grid md:grid-cols-3 gap-16">
                <div className="text-center group">
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                    99.9%
                  </div>
                  <div className="text-slate-300 font-semibold text-lg mb-2">Detection Accuracy</div>
                  <div className="text-slate-500 text-sm">Across all threat types</div>
                </div>
                <div className="text-center group">
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                    &lt;1s
                  </div>
                  <div className="text-slate-300 font-semibold text-lg mb-2">Analysis Time</div>
                  <div className="text-slate-500 text-sm">Real-time protection</div>
                </div>
                <div className="text-center group">
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                    24/7
                  </div>
                  <div className="text-slate-300 font-semibold text-lg mb-2">Protection Active</div>
                  <div className="text-slate-500 text-sm">Always monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-gradient" />

              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

              <div className="relative p-20 text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Ready to Secure Your
                  <br />Digital Life?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
                  Join thousands who trust SecureGuard to protect them from scams and cyber threats
                </p>
                <div className="flex items-center justify-center gap-4">
                  <button className="group relative px-12 py-6 bg-white text-cyan-600 rounded-2xl font-bold text-lg overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Start Free Trial
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <button className="px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 backdrop-blur-xl mt-20">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Shield className="w-7 h-7 text-cyan-400" />
                  <div className="absolute inset-0 blur-xl bg-cyan-400/30 animate-pulse-glow" />
                </div>
                <span className="text-xl font-bold text-white">SecureGuard</span>
              </div>

              <div className="flex items-center gap-8 text-slate-400 text-sm">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Security</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
              </div>

              <div className="text-slate-500 text-sm">
                © 2025 SecureGuard. Protecting your digital world.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
