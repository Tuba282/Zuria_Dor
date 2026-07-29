import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const messages = [
  "HANDCRAFTED IN LAHORE. SHIPPED WORLDWIDE.",
  "BOOK AN APPOINTMENT! GET STARTED",
  "SHIPMENTS MIGHT BE DELAYED AMID ONGOING REGIONAL CONFLICT."
];

const TopBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('up'); 
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (isAnimating) return;
      setDirection('up');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 200); // 500ms matches the transition duration for a smooth slide
    }, 3000); // Changes text every 4 seconds

    return () => clearInterval(timer);
  }, [currentIndex, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('up');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
      setIsAnimating(false);
    }, 200); 
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('down');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
      setIsAnimating(false);
    }, 200); 
  };

  return (
    <div className="w-full py-1 md:py-2 bg-white">
      <div className="flex justify-center items-center w-full px-2 h-6">
        
        <button 
          onClick={handlePrev} 
          className="text-gray-400 hover:text-black transition-colors p-1 cursor-pointer flex items-center justify-center"
          aria-label="Previous message"
        >
          <BsChevronLeft size={15} className="text-black" />
        </button>

        {/* Text Container - Centered and with fixed min-width so arrows stay put */}
        <div className="relative h-full overflow-hidden flex items-center justify-center min-w-[250px] sm:min-w-[400px] md:min-w-[480px] mx-2 md:mx-4">
          
          {/* Outgoing/Current Text */}
          <div 
            className={`absolute w-full text-center text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.15em] text-gray-800 transition-transform duration-500 ease-in-out ${
              isAnimating 
                ? (direction === 'up' ? '-translate-y-full opacity-0' : 'translate-y-full opacity-0')
                : 'translate-y-0 opacity-100'
            }`}
          >
            {messages[currentIndex]}
          </div>

          {/* Incoming Text (Necessary for the smooth up/down sliding effect) */}
          {/* <div 
            className={`absolute w-full text-center text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.15em] text-gray-800 transition-transform duration-500 ease-in-out ${
              isAnimating 
                ? 'translate-y-0 opacity-100'
                : (direction === 'up' ? 'translate-y-full opacity-0' : '-translate-y-full opacity-0')
            }`}
          >
            {isAnimating && 
              (direction === 'up' 
                ? messages[(currentIndex + 1) % messages.length] 
                : messages[(currentIndex - 1 + messages.length) % messages.length])
            }
          </div> */}
        </div>

        <button 
          onClick={handleNext} 
          className="text-gray-400 hover:text-black transition-colors p-1 cursor-pointer flex items-center justify-center"
          aria-label="Next message"
        >
          <BsChevronRight size={15} className="text-black" />
        </button>

      </div>
    </div>
  );
};

export default TopBar;
