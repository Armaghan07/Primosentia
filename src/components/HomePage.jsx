import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Index from "./Index";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleGetStartedClick = () => {
    navigate("/contact-us");
  };

  return (
    <>
      <div className="relative min-h-screen bg-black text-white overflow-hidden pb-5">
        {/* Centered Background Gradient */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] h-[500px] bg-gradient-to-bl from-[#141E30] to-[#B14DFF] rounded-full blur-[180px] opacity-60 pointer-events-none z-0" />

        {/* Main Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <Header />

          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[130px] md:mt-[100px] lg:mt-[150px]">
            {/* Text Side */}
            <div className="flex flex-col justify-center gap-4 md:mt-[30px]">
              <h1
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-[25px] md:text-[35px] lg:text-[50px] font-bold leading-snug md:leading-snug lg:leading-[1.2]"
              >
                Awakening Machines with Primordial Intelligence.
              </h1>
              <p className="text-[16px] md:text-[18px] lg:text-2xl text-white">
                Harnessing novel NPU technology to power the next generation of
                AI chips.
              </p>
              <button
                onClick={handleGetStartedClick}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md w-[150px] sm:w-[150px] cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Image Side */}
            <div className="flex justify-center items-center">
              <img
                src="/homepic.png"
                alt="NPU Logo"
                className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Other Sections */}
          <Index />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
