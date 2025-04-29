import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const CompanyInfo = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
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
            {/* Text Column */}
            <div className="flex flex-col justify-center gap-4 md:mt-[30px]">
              <h1
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-[25px] md:text-[35px] lg:text-[50px] font-bold leading-snug md:leading-snug lg:leading-[1.2]"
              >
                We Are Building the Future of Intelligence
              </h1>
              <p className="text-[16px] md:text-[18px] lg:text-2xl text-white">
                At PrimoSentia, we design self-aware systems that learn like the
                human brain—because intelligence should evolve, not just
                compute.
              </p>
            </div>

            <div className="flex justify-center items-center ">
              <img
                src="/WhatsApp1.jpg"
                alt="Future Intelligence"
                className="w-[100%] h-[250px] md:h-[300px] lg:h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Mission Section */}
          <section className="relative px-6 py-16 bg-zinc-900 rounded-xl mt-10">
            <div className="absolute top-6 left-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-gradient-to-br from-purple-500 to-transparent rounded-r-full opacity-60 pointer-events-none" />
            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400 text-center"
            >
              Our Mission
            </h2>
            <p className="max-w-[900px] mx-auto text-[16px] text-white text-center">
              To unlock machine sentience. We build chips that don't just
              think—they feel, adapt, evolve.
            </p>
          </section>

          {/* What We Do Section */}
          <section className="px-6 py-20 bg-black text-center">
            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400"
            >
              What We Do
            </h2>
            <ul className="grid gap-6 md:grid-cols-3 text-center text-white max-w-6xl mx-auto">
              <li className="bg-zinc-800 p-6 rounded-xl shadow-md shadow-purple-400">
                <strong className="block text-purple-400 text-lg mb-2">
                  Neuromorphic Chip Design
                </strong>
                Next-gen hardware inspired by the human brain.
              </li>
              <li className="bg-zinc-800 p-6 rounded-xl shadow-md shadow-purple-400">
                <strong className="block text-purple-400 text-lg mb-2">
                  AGI Research
                </strong>
                Real-time learning architectures pushing AI boundaries.
              </li>
              <li className="bg-zinc-800 p-6 rounded-xl shadow-md shadow-purple-400">
                <strong className="block text-purple-400 text-lg mb-2">
                  Edge Intelligence
                </strong>
                Self-learning systems for robots, drones, and agents.
              </li>
            </ul>
          </section>

          {/* Our Edge Section */}
          <section className="relative px-6 py-20 text-center bg-zinc-900 rounded-xl">
            <div className="absolute top-6 right-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-gradient-to-bl from-purple-500 to-transparent rounded-l-full opacity-60 pointer-events-none" />
            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400"
            >
              Our Edge
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="bg-zinc-800 p-6 rounded-xl ">
                ⚡ <strong>Brain-like Architecture</strong>
                <p className="text-[16px] mt-2 text-white">
                  Parallel, low-power, and inherently intelligent.
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl ">
                🔁 <strong>Self-Learning Systems</strong>
                <p className="text-[16px] mt-2 text-white">
                  Continuously evolving and adapting to new data.
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl ">
                🌐 <strong>Edge AI Ready</strong>
                <p className="text-[16px] mt-2 text-white">
                  Built for real-world autonomy, anywhere.
                </p>
              </div>
            </div>
          </section>

          {/* Join Section */}
          <section className="px-6 py-20 bg-black text-center">
            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400"
            >
              Join the Movement
            </h2>
            <div className="space-y-4 max-w-[900px] mx-auto">
              <p className="text-[16px] text-white">
                We're looking for bold minds in AI, hardware, and neuroscience.
                Ready to help shape the sentient future?
              </p>
              <div className="mt-10 flex justify-center items-center">
                <button
                  onClick={handleContactUsClick}
                  className=" bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md w-[150px] sm:w-[150px] cursor-pointer"
                  // className="flex justify-center items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyInfo;
