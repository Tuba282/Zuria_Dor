import React, { useState, useEffect } from 'react';
import {   FiChevronRight } from 'react-icons/fi';
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import TopBar from '../TopBar';
import { VscSearchLarge } from "react-icons/vsc";
import { BsChevronRight, BsHandbag } from "react-icons/bs";
// import Image from './Image';

const navLinks = [
  "WHAT'S NEW",
  "BRIDAL",
  "FORMALS",
  "MOST LOVED",
  "DISCOVER",
  "BY OCCASSION",
  "ABOUT US",
  "BOOK AN APPOINTMENT",
  "WORLD OF ZD",
  "BRIDES OF ZD",
  "DARA ENZO"
];

const Header = ({ role }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener to make header solid white when scrolled down (standard luxury UX)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if header should be solid white or transparent
  const isSolid = isHovered || isScrolled || isDrawerOpen;

  return (
    <>
      {/* 
        Header Wrapper - fixed positioning to overlay on top of hero images. 
        TopBar collapses on scroll so only the navigation remains sticky.
      */}
      <header className="fixed top-0 left-0 w-full z-50">
        
        {/* TopBar Wrapper - smoothly hides when scrolled */}
        <div 
          className={`w-full transition-all duration-500 origin-top overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-[50px] opacity-100'
          }`}
        >
          <TopBar />
        </div>
        
        {/* Main Navigation Area */}
        <div 
          className={`w-full transition-colors duration-300 ${
            isSolid ? 'bg-white text-black shadow-sm' : 'bg-transparent text-white'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col w-full">
            
            {/* Top Row: Hamburger, Logo, Icons */}
            <div className="flex justify-between items-center w-full px-4 md:px-8 py-4">
              
              {/* Left: Hamburger (Mobile Only) */}
              <div className="lg:hidden flex-1 flex items-center">
                <IoIosMenu 
                  size={24} 
                  className="cursor-pointer hover:opacity-70 transition-opacity" 
                  onClick={() => setIsDrawerOpen(true)} 
                />
              </div>

              {/* Left Spacer (Desktop Only) - Keeps Logo Centered */}
              <div className="hidden lg:block flex-1"></div>

              {/* Center: Logo */}
              <div className="flex-1 flex justify-center items-center">
                <a href="/" className="flex items-center justify-center">
                  <img 
                    src={isSolid ? "/Logo_black.webp" : "/Logo_white.webp"} 
                    alt="Zuria Dor" 
                    className="w-[120px] md:w-[150px] object-contain transition-opacity duration-300"
                  />
                </a>
              </div>

              {/* Right: Icons */}
              <div className="flex-1 flex justify-end items-center gap-4 md:gap-5">
                <VscSearchLarge size={22} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <BsHandbag size={22} className="cursor-pointer hover:opacity-70 transition-opacity" />
              </div>
            </div>

            {/* Bottom Row: Navigation Links (Desktop Only) */}
            <nav className="hidden lg:flex justify-center flex-wrap gap-x-7 gap-y-2 pb-5 px-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="relative group text-[9px] md:text-[10px] tracking-[0.12em] uppercase pb-1"
                >
                  {link}
                  {/* Animated Hover Underline */}
                  <span 
                    className={`absolute left-0 bottom-0 h-[1px] w-0 transition-all duration-300 ease-out group-hover:w-full ${
                      isSolid ? 'bg-black' : 'bg-white'
                    }`}
                  ></span>
                </a>
              ))}
            </nav>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} 
        onClick={() => setIsDrawerOpen(false)} 
      />

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-[380px] bg-white z-[70] transform transition-transform duration-300 overflow-y-auto lg:hidden ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-start border-b border-transparent">
          <button 
            onClick={() => setIsDrawerOpen(false)} 
            className="p-1 text-black hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            <IoCloseOutline size={28}  className='font-thin'/>
          </button>
        </div>

        <div className="flex flex-col px-6 pb-12 pt-2 text-black">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
              className="flex justify-between items-center py-4 border-b border-gray-100 group"
              onClick={() => setIsDrawerOpen(false)}
            >
              <span className="text-[10px] sm:text-xs tracking-[0.1em]">
                {link}
              </span>
              <BsChevronRight size={16} className="text-black" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
