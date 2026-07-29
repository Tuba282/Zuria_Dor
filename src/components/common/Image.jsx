// import React from 'react';
// import PropTypes from 'prop-types';

// /**
//  * SEO Friendly Image Component
//  * 
//  * @param {string} src - The image source URL.
//  * @param {string} alt - Required for SEO. Describes the image for screen readers and search engines.
//  * @param {number|string} width - Important for preventing Cumulative Layout Shift (CLS).
//  * @param {number|string} height - Important for preventing Cumulative Layout Shift (CLS).
//  * @param {string} loading - Use "lazy" for below-the-fold images, "eager" for above-the-fold (like logos). Defaults to "lazy".
//  * @param {string} decoding - "async" allows the browser to decode image without blocking the main thread.
//  * @param {string} className - For Tailwind or custom CSS classes.
//  */
// const Image = ({
//   src,
//   alt,
//   width,
//   height,
//   loading = 'lazy',
//   decoding = 'async',
//   className = '',
//   title,
//   srcSet,
//   sizes,
//   ...props
// }) => {
//   // A warning in development if 'alt' is missing, as it is critical for SEO
//   if (!alt && process.env.NODE_ENV === 'development') {
//     console.warn(`[SEO Warning]: Image with src "${src}" is missing an 'alt' attribute.`);
//   }

//   return (
//     <img
//       src={src}
//       alt={alt || 'zuria-dor'} // Always provide at least an empty string so screen readers know it's an image
//       width={width}
//       height={height}
//       loading={loading}
//       decoding={decoding}
//       className={className}
//       title={title || alt} // title is good for tooltip and extra SEO context
//       srcSet={srcSet}
//       sizes={sizes}
//       {...props}
//     />
//   );
// };

// Image.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired, // Enforced as required for SEO
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   loading: PropTypes.oneOf(['lazy', 'eager']),
//   decoding: PropTypes.oneOf(['async', 'auto', 'sync']),
//   className: PropTypes.string,
// };

// export default Image;
