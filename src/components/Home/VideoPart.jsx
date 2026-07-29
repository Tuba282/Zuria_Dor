import React, { useRef, useState } from 'react';
import { PiSpeakerHigh , PiSpeakerSimpleSlash  } from "react-icons/pi";

const VideoPart = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* Responsive Video Sources */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Large screen video */}
        <source
          src="/Imgs/Home/VideoPart/large.mp4"
          media="(min-width: 768px)"
          type="video/mp4"
        />
        {/* Small screen video (default fallback) */}
        <source
          src="/Imgs/Home/VideoPart/small.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-white text-xl sm:text-2xl uppercase font-light drop-shadow-lg">
          Khanom
        </h2>
      </div>

      {/* Bottom-left Mute/Unmute Toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/10 backdrop-blur-xs text-white hover:bg-black/60 transition-colors duration-300"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <PiSpeakerHigh size={18} />
        ) : (
          <PiSpeakerSimpleSlash  size={18} />
        )}
      </button>

    </section>
  );
};

export default VideoPart;
