import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import BackToTop from "../components/common/BackToTop";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header role="user" />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default UserLayout;
