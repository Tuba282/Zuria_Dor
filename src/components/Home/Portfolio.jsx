// import PropTypes from 'prop-types';

const Portfolio = ({ 
  imageDesktop, 
  imageMobile, 
  buttonPosition, 
  buttonText, 
  link = "#" 
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden my-8 md:my-12 group">
      
      {/* Background Images (Responsive) */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Image - Subtle zoom on hover */}
        <div 
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageDesktop})` }}
        ></div>
        
        {/* Mobile Image - Subtle zoom on hover */}
        <div 
          className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageMobile})` }}
        ></div>
        
        {/* Subtle gradient overlay to make text/button pop */}
        <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/20"></div>
      </div>

      {/* Slide Content */}
      <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-16 lg:p-24 pb-24 md:pb-32`}>
        <div className={`w-full flex flex-col ${buttonPosition}`}>
            
            {/* Button - Exact same styling and wipe effect as Hero */}
            <a 
              href={link}
              className="relative inline-flex overflow-hidden border border-white px-6 py-2 sm:px-10 sm:py-3 md:px-14 md:py-4 text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] uppercase text-black hover:text-white transition-colors duration-500 ease-in-out group/btn"
            >
              {/* Text */}
              <span className="relative z-10">{buttonText}</span>
              
              {/* Hover Wipe Animation Background */}
              <div className="absolute inset-0 bg-white w-full h-full origin-right transition-transform duration-500 ease-in-out group-hover/btn:scale-x-0"></div>
            </a>

        </div>
      </div>
    </div>
  );
};

// Portfolio.propTypes = {
//   imageDesktop: PropTypes.string.isRequired,
//   imageMobile: PropTypes.string.isRequired,
//   buttonPosition: PropTypes.string,
//   link: PropTypes.string
// };

export default Portfolio;
