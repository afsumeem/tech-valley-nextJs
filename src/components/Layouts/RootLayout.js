import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
