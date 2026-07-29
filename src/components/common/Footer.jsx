

import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaPinterestP, 
  FaYoutube, 
  FaTiktok, 
  FaLinkedinIn, 
  FaWhatsapp 
} from 'react-icons/fa';
const now = new Date()
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 mt-12 border-t border-gray-100 font-sans">
      <div className="container mx-auto px-2 md:px-4">
        
        {/* Top Section: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3 mb-16 text-center lg:text-left ">
          
          {/* Column 1: ABOUT US */}
          <div className="lg:col-span-2 lg:pr-12 flex flex-col items-center lg:items-start">
            <h4 className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-gray-900">ABOUT US</h4>
            <p className="text-[10px] md:text-[11px] leading-[1.8] text-gray-500 max-w-md lg:max-w-none">
              Zuria Dor is a digital-first, appointment-based brand crafting made-to-measure bridal, formal, and semi-formal collections; prioritising exceptional value and client care.
            </p>
          </div>

          {/* Column 2: CLIENT SERVICES */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-gray-900">CLIENT SERVICES</h4>
            <ul className="flex flex-col items-center lg:items-start space-y-4 text-[10px] md:text-[11px] text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Order & Delivery</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Payment Information</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Return & Refund Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">How To Measure</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQ's</a></li>
            </ul>
          </div>

          {/* Column 3: CONTACT */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-gray-900">CONTACT</h4>
            <ul className="flex flex-col items-center lg:items-start space-y-4 text-[10px] md:text-[11px] text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Visit Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: LEGAL */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-gray-900">LEGAL</h4>
            <ul className="flex flex-col items-center lg:items-start space-y-4 text-[10px] md:text-[11px] text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 5: STAY IN TOUCH */}
          <div className="flex flex-col lg:col-span-2 items-center lg:items-start">
            <h4 className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-gray-900">STAY IN TOUCH</h4>
            <form className="flex flex-col items-center lg:items-start gap-4 w-full max-w-xs lg:max-w-none">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full  border border-gray-200 px-4 py-3 text-[10px] md:text-[11px] outline-none focus:border-gray-400 transition-colors text-center lg:text-left"
                required
              />
              <button 
                type="submit" 
                className="bg-[#1a1a1a] text-white text-[10px] font-semibold tracking-[0.2em] uppercase py-3 px-8 border border-[#1a1a1a] hover:bg-transparent hover:text-[#1a1a1a] transition-colors duration-300 w-max"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* Middle Section: Social Icons */}
        <div className="flex justify-center lg:justify-start gap-5 mb-8 text-gray-600">
          <a href="#" className="hover:text-black transition-colors" aria-label="Facebook"><FaFacebookF size={15} /></a>
          <a href="#" className="hover:text-black transition-colors" aria-label="Instagram"><FaInstagram size={15} /></a>
          <a href="#" className="hover:text-black transition-colors" aria-label="Pinterest"><FaPinterestP size={15} /></a>
          <a href="#" className="hover:text-black transition-colors" aria-label="YouTube"><FaYoutube size={15} /></a>
          <a href="#" className="hover:text-black transition-colors" aria-label="TikTok"><FaTiktok size={15} /></a>
          <a href="#" className="hover:text-black transition-colors" aria-label="LinkedIn"><FaLinkedinIn size={15} /></a>
          <a href="#" className="hover:text-black transition-colors" aria-label="WhatsApp"><FaWhatsapp size={15} /></a>
        </div>

        {/* Bottom Section: Copyright & Payments */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-6">
          <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-gray-500 uppercase text-center lg:text-left">
            &copy; {now.getFullYear()} - ZURIA DOR
          </p>
          
          {/* Payment Icons Container */}
          <div className="flex gap-2 items-center justify-center flex-wrap">
            {/* Apple Pay */}
            <div className="h-[28px] w-[58px] flex items-center justify-center border border-gray-200 rounded-[3px] bg-white overflow-hidden p-1">
                <img src="/Imgs/Footer/Pay.webp" alt="Apple Pay" className="h-full object-cover" />
            </div>
            {/* Diners Club */}
            <div className="h-[28px] w-[58px] flex items-center justify-center border border-gray-200 rounded-[3px] bg-white overflow-hidden p-1">
                <img src="/Imgs/Footer/Dinners.webp" alt="Diners Club" className="h-full object-cover" />
            </div>
            {/* Discover */}
            <div className="h-[28px] w-[58px] flex items-center justify-center border border-gray-200 rounded-[3px] bg-white overflow-hidden p-1">
                <img src="/Imgs/Footer/Discover.webp" alt="Discover" className="h-full object-cover" />
            </div>
            {/* Google Pay */}
            <div className="h-[28px] w-[58px] flex items-center justify-center border border-gray-200 rounded-[3px] bg-white overflow-hidden p-1">
                <img src="/Imgs/Footer/googlePay.webp" alt="Google Pay" className="h-full object-cover" />
            </div>
            {/* JCB */}
            <div className="h-[28px] w-[58px] flex items-center justify-center border border-gray-200 rounded-[3px] bg-white overflow-hidden p-1">
                <img src="/Imgs/Footer/JBC.webp" alt="JCB" className="h-full object-cover" />
            </div>
            {/* Mastercard */}
            <div className="h-[28px] w-[58px] flex items-center justify-center border border-gray-200 rounded-[3px] bg-white overflow-hidden p-1">
                <img src="/Imgs/Footer/MasterCard.webp" alt="Mastercard" className="h-full object-cover" />
            </div>
            {/* Visa */}
            <div className="h-[28px] w-[58px] flex items-center justify-center border border-gray-200 rounded-[3px] bg-white overflow-hidden p-1">
                <img src="/Imgs/Footer/visa.webp" alt="Visa" className="h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
