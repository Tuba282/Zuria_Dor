import React, { useState, useEffect } from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const BackToTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  // Close modal when pressing escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsPhoneModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Phone Modal */}
      {isPhoneModalOpen && (
        <div className="absolute bottom-16 right-0 mb-4 w-64 sm:w-72 bg-white rounded shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300">
          <div className="bg-[#E65100] text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={14} />
              <span className="font-semibold text-sm">Phone</span>
            </div>
            <button onClick={() => setIsPhoneModalOpen(false)} className="hover:text-gray-200 transition-colors">
              <IoMdClose size={20} />
            </button>
          </div>
          <div className="p-8 text-center text-xl sm:text-2xl font-normal text-gray-800 tracking-wider">
            +92-323-477-1355
          </div>
        </div>
      )}

      {/* Clickable Trigger Area */}
      <div className="flex flex-col items-center gap-3 relative">
        {/* Secondary Buttons (Phone & WA) */}
        <div 
          className={`flex flex-col gap-3 transition-all duration-300 ease-in-out origin-bottom ${
            isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-50 pointer-events-none'
          }`}
        >
          {/* Phone */}
          <button 
            onClick={() => { setIsPhoneModalOpen(true); setIsOpen(false); }}
            className="w-[45px] h-[45px] bg-[#E65100] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Phone Call"
          >
            <FaPhoneAlt size={18} />
          </button>
          {/* WhatsApp */}
          <a 
            href="https://wa.me/923234771355" 
            target="_blank" 
            rel="noreferrer"
            className="w-[45px] h-[45px] bg-[#4CAF50] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>

        {/* Main Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-500 ease-in-out"
          style={{ transform: isOpen ? 'rotate(360deg)' : 'rotate(0deg)' }}
          aria-label="Contact Options"
        >
          {isOpen ? (
            <IoMdClose size={26} />
          ) : (
            <IoChatbubblesOutline size={26} />
          )}
        </button>
      </div>
    </div>
  );
};

export default BackToTop;
