import React, { useState, useEffect, useRef } from 'react';
import { heroSlides } from '../../data/home';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideDuration = 6000; // 6 seconds per slide
  const requestRef = useRef();
  const startTimeRef = useRef(null);

  const animate = (time) => {
    if (!startTimeRef.current) startTimeRef.current = time;
    const elapsedTime = time - startTimeRef.current;
    
    // Calculate progress 0 to 100
    const currentProgress = Math.min((elapsedTime / slideDuration) * 100, 100);
    setProgress(currentProgress);

    if (elapsedTime >= slideDuration) {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      startTimeRef.current = time; // Reset start time for next slide
    }
    
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Handle manual pagination click
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Slides Container */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        
        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-screen transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Images with Zoom-in Effect (Responsive) */}
            <div className="absolute inset-0 w-full h-full">
              {/* Desktop Image */}
              <div 
                className={`hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-linear ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${slide.imageDesktop})` }}
              ></div>
              {/* Mobile Image */}
              <div 
                className={`block md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-linear ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${slide.imageMobile})` }}
              ></div>
              
              {/* Subtle gradient overlay to make text pop */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Slide Content */}
            <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-16 lg:p-24 pb-24 md:pb-32`}>
              <div className={`w-full flex flex-col ${slide.buttonPosition}`}>
                 
                 {/* Title - Smooth slide up entrance with improved responsive text sizing */}
                 <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-[70px] text-white font-serif mb-6 md:mb-10 tracking-[0.15em] uppercase transition-all duration-1000 delay-300 transform ${
                   isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                 }`}>
                   {slide.title}
                 </h1>

                 {/* Button - Smooth slide up entrance & hover wipe effect with responsive sizing */}
                 <div className={`transition-all duration-1000 delay-500 transform ${
                   isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                 }`}>
                   <a 
                     href={slide.buttonLink}
                     className="relative group inline-flex overflow-hidden border border-white px-6 py-2 sm:px-10 sm:py-3 md:px-14 md:py-4 text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] uppercase text-black hover:text-white transition-colors duration-500 ease-in-out"
                   >
                     {/* Text that sits above the background */}
                     <span className="relative z-10">{slide.buttonText}</span>
                     
                     {/* 
                        Solid white background that wipes from left to right on hover.
                        origin-right makes it shrink towards the right side, so the left side reveals first.
                     */}
                     <div className="absolute inset-0 bg-white w-full h-full origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-0"></div>
                   </a>
                 </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination Container - Bottom Right */}
      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20 flex items-center">
        {heroSlides.map((_, index) => {
          const isActive = index === currentSlide;
          
          return (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              className="relative flex items-center justify-center w-6 h-6 outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              {isActive ? (
                /* Active SVG Progress Circle - Smaller Size */
                <svg width="10" height="10" className="-rotate-90">
                  <circle cx="5" cy="5" r="3.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
                  <circle 
                    cx="5" cy="5" r="3.5" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    fill="none" 
                    // 2 * PI * r = 2 * 3.14159 * 5 = 31.42
                    strokeDasharray="31.42" 
                    strokeDashoffset={31.42 - (31.42 * progress) / 200}
                    className="transition-all duration-75 ease-linear"
                  />
                  {/* Inner Solid White Dot */}
                  {/* <circle cx="5" cy="5" r="1.5" fill="white" /> */}
                </svg>
              ) : (
                /* Inactive Dot */
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full hover:bg-white transition-colors duration-300"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
