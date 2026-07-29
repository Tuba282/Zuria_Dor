import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Slider = ({ title = "ACCESSORIES", items = [], viewAllLink = "#" }) => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Use Math.ceil to avoid rounding issues on some browsers
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [items]);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const clientWidth = sliderRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
      {/* Title */}
      {title && (
        <h2 className="text-center text-[12px] md:text-[14px] tracking-[0.3em] uppercase text-gray-900 mb-12 font-normal">
          {title}
        </h2>
      )}

      {/* Slider Container */}
      <div className="relative group/slider">
        {/* Left Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-[40%] -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:text-black hover:scale-105 transition-all opacity-0 group-hover/slider:opacity-100 disabled:opacity-0"
            aria-label="Scroll left"
          >
            <FiChevronLeft size={22} />
          </button>
        )}

        {/* Scroll Area */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for Firefox/IE
        >
          {/* Hide scrollbar for Webkit */}
          <style>{`
            .flex::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {items.map((item, index) => (
            <a
              key={index}
              href={item.link || '#'}
              className="flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start group cursor-pointer block"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                    item.hoverImage ? 'group-hover:opacity-0' : ''
                  }`}
                  loading="lazy"
                />
                {item.hoverImage && (
                  <img
                    src={item.hoverImage}
                    alt={`${item.title} hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    loading="lazy"
                  />
                )}
              </div>
              
              {/* Text */}
              <div className="text-center">
                <h3 className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-800 font-medium">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Right Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-[40%] -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:text-black hover:scale-105 transition-all opacity-0 group-hover/slider:opacity-100 disabled:opacity-0"
            aria-label="Scroll right"
          >
            <FiChevronRight size={22} />
          </button>
        )}
      </div>

      {/* View All Button */}
      {viewAllLink && (
        <div className="mt-12 flex justify-center">
          <a
            href={viewAllLink}
            className="relative group/btn inline-flex overflow-hidden border border-[#1a1a1a] px-8 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-white bg-[#1a1a1a] transition-colors duration-300"
          >
             <span className="relative z-10 group-hover/btn:text-[#1a1a1a] transition-colors duration-300">VIEW ALL</span>
             {/* Wipe Effect */}
             <div className="absolute inset-0 bg-white w-full h-full origin-right transition-transform duration-500 ease-in-out scale-x-0 group-hover/btn:scale-x-100"></div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Slider;
