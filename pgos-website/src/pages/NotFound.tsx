import React, { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft, MapPin, Clock, Zap } from 'lucide-react';

interface FloatingIconProps {
  icon: React.ComponentType<{ className?: string }>;
  delay: number;
  size?: string;
}

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: Icon, delay, size = "w-8 h-8" }) => (
    <div 
      className={`absolute opacity-10 text-[#f4a024] animate-bounce ${size}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      <Icon className="w-full h-full" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#083056] to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(207, 165, 58, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Icons */}
      <FloatingIcon icon={MapPin} delay={0} size="w-6 h-6" />
      <FloatingIcon icon={Clock} delay={1} size="w-8 h-8" />
      <FloatingIcon icon={Zap} delay={2} size="w-5 h-5" />
      <div className="absolute top-20 right-20">
        <FloatingIcon icon={Search} delay={0.5} size="w-7 h-7" />
      </div>
      <div className="absolute bottom-32 left-16">
        <FloatingIcon icon={Home} delay={1.5} size="w-9 h-9" />
      </div>
      <div className="absolute top-1/3 left-1/4">
        <FloatingIcon icon={MapPin} delay={2.5} size="w-6 h-6" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f4a024] via[#f4a025] to[#f4a025] leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text[#f4a025] opacity-10 blur-sm leading-none select-none">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Oops! Page Not Found
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Looks like you've wandered into uncharted territory. The page you're looking for seems to have gone on an adventure without us.
            </p>
          </div>

          {/* Interactive Elements */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-6 py-3 text-slate-300">
                <span className="text[#f4a025] font-semibold">Error Code:</span> 404
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-6 py-3 text-slate-300">
                <span className="text[#f4a025] font-semibold">Status:</span> Not Found
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-6 py-3 text-slate-300">
                <span className="text[#f4a025] font-semibold">Time:</span> {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleGoHome}
              className="group relative bg-[#f4a025] hover:yellow-400  text-slate-900 font-bold py-4 px-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow[#f4a025]/25 focus:outline-none focus:ring-4 focus:ring[#f4a025]/50"
            >
              <span className="flex items-center">
                <Home className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Go Home
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
            </button>

            <button
              onClick={handleGoBack}
              className="group relative bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl border-2 border-slate-600 hover:border-slate-500 shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
            >
              <span className="flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Go Back
              </span>
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-16 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">What can you do?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#f4a025] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Search className="w-4 h-4 text-slate-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Check the URL</h4>
                  <p className="text-slate-300 text-sm">Make sure the web address is spelled correctly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#f4a025] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Home className="w-4 h-4 text-slate-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Start Fresh</h4>
                  <p className="text-slate-300 text-sm">Return to our homepage and navigate from there</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-slate-200 text-sm">
            <p>Lost but not forgotten • Pioneer Group of Schools • {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from[#f4a025]/10 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from[#f4a025]/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-0 w-2 h-64 bg-gradient-to-b from-transparent via[#f4a025]/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-2 h-32 bg-gradient-to-b from-transparent via[#f4a025]/20 to-transparent" />
    </div>
  );
}