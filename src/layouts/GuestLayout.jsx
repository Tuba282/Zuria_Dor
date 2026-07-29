import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BackToTop from '../components/common/BackToTop';

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      
      <Header role="guest" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default GuestLayout;
