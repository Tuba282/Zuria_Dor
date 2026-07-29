import React from 'react';

/**
 * CardSection - A reusable section component with image cards.
 *
 * @param {string} heading - The section heading displayed above the cards.
 * @param {Array} cards - Array of card objects: { image, buttonText, link }
 *
 * Usage:
 * <CardSection
 *   heading="DISCOVER BY OCCASSION"
 *   cards={[
 *     { image: "/Imgs/nikkah.webp", buttonText: "NIKKAH", link: "#" },
 *     { image: "/Imgs/wedding.webp", buttonText: "WEDDING", link: "#" },
 *     { image: "/Imgs/reception.webp", buttonText: "RECEPTION", link: "#" },
 *   ]}
 * />
 */

const CardSection = ({ heading, cards = [] }) => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-12">
      
      {/* Section Heading */}
      {heading && (
        <h2 className="text-center text-[13px] md:text-[20px] tracking-[0.08em] uppercase text-gray-800 mb-8 md:mb-12 font-normal">
          {heading}
        </h2>
      )}

      {/* Cards Grid - responsive: 1 col on mobile, 2 on sm, 3 on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link || '#'}
            className="relative group block overflow-hidden"
          >
            {/* Image Wrapper - clips the zoom-in effect */}
            <div className="w-full overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src={card.image}
                alt={card.buttonText || `Card ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Button - positioned at the bottom of the image */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <span className="relative group/btn inline-flex overflow-hidden border border-white px-6 py-2 sm:px-8 sm:py-2.5 text-[9px] sm:text-[10px] font-normal tracking-[0.25em] uppercase text-gray-900 hover:text-white transition-colors duration-500 ease-in-out whitespace-nowrap">
                {/* Text above the sliding background */}
                <span className="relative z-10 uppercase">{card.buttonText}</span>
                {/* White background that wipes left-to-right on hover */}
                <div className="absolute inset-0 bg-white w-full h-full origin-right transition-transform duration-500 ease-in-out group-hover/btn:scale-x-0"></div>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
