
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      
      backgroundRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;

      // Animate the dot based on mouse position
      if (dotRef.current) {
        const dotXPos = (clientX / window.innerWidth - 0.5) * 5;
        const dotYPos = (clientY / window.innerHeight - 0.5) * 5;
        dotRef.current.style.transform = `translate(${dotXPos}px, ${dotYPos}px) scale(${1 + Math.abs(dotXPos/20)})`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-factor-black py-20">
      {/* Animated background shapes */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-200 ease-out"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#e30613]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#e30613]/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="bg-[#e30613]/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-fade-in">
            <span className="text-sm font-medium text-white">Full-Service Digital Agency</span>
          </div>
          
          <div className="mb-4 text-6xl md:text-7xl font-bold text-white animate-fade-in">
            Factor
            <span 
              ref={dotRef} 
              className="text-[#e30613] inline-block animate-pulse-dynamic"
              style={{transformOrigin: 'center'}}
            >.</span>
          </div>
          
          <AnimatedText
            text="We craft digital experiences that transform brands"
            tag="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          />
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in animate-delay-500">
            Factor helps ambitious brands elevate their digital presence through strategic creativity and technical excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-1000">
            <a href="#services" className="btn-primary px-8 py-3 text-lg">
              Explore Services
            </a>
            <a href="#work" className="btn-outline px-8 py-3 text-lg">
              View Our Work
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M12 5V19M12 19L5 12M12 19L19 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
