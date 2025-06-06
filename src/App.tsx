import React, { useState, useEffect } from 'react';
import { ExternalLink, Server, Users, Zap, Shield, Clock, ArrowRight, Disc as Discord } from 'lucide-react';

function App() {
  const [countdown, setCountdown] = useState(5);
  const [autoRedirect, setAutoRedirect] = useState(true);

  // Discord server invite link - updated with your actual Discord invite
  const discordInvite = 'https://discord.gg/QQPeuFVyc5';

  useEffect(() => {
    if (autoRedirect && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (autoRedirect && countdown === 0) {
      window.location.href = discordInvite;
    }
  }, [countdown, autoRedirect, discordInvite]);

  const handleJoinNow = () => {
    window.open(discordInvite, '_blank');
  };

  const handleCancelRedirect = () => {
    setAutoRedirect(false);
  };

  const handleBrowseWebsite = () => {
    window.location.href = 'https://hexonode.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.3),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(139,92,246,0.2),_transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Hexonode</h1>
                <p className="text-purple-200 text-sm">Premium Hosting</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-purple-200">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">Services</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Auto-redirect notice */}
          {autoRedirect && (
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Clock className="w-5 h-5 text-purple-300" />
                <span className="text-white">
                  Auto-redirecting to Discord in <span className="font-bold text-purple-300">{countdown}</span> seconds
                </span>
                <button
                  onClick={handleCancelRedirect}
                  className="text-purple-300 hover:text-white text-sm underline ml-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Hero Section */}
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight animate-gradient-x bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:400%_400%] tracking-tight">
              HEXONODE HOSTING
            </h1>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Community
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow developers, get instant support, and stay updated with the latest from Hexonode Hosting. 
              Join thousands of satisfied customers in our Discord community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleJoinNow}
                className="group bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Join Discord Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleBrowseWebsite}
                className="text-purple-300 hover:text-white px-8 py-4 rounded-full border border-purple-400/30 hover:border-purple-300 transition-all duration-200 font-medium"
              >
                Browse Website Instead
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Active Community</h3>
              <p className="text-purple-200">Connect with 10,000+ developers and hosting enthusiasts worldwide.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Support</h3>
              <p className="text-purple-200">Get help from our expert team and community members 24/7.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Exclusive Updates</h3>
              <p className="text-purple-200">Be the first to know about new features, promotions, and announcements.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-center">
            <div>
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-purple-300">Community Members</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-purple-400/30"></div>
            <div>
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-purple-300">Uptime Guarantee</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-purple-400/30"></div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-purple-300">Expert Support</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-purple-300">
          <p className="mb-2">© 2025 Hexonode Hosting. All rights reserved.</p>
          <p className="text-sm">Empowering developers with premium hosting solutions.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;