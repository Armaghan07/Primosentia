import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const NpuTechnology = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle navigation on button click
  const handleGetStartedClick = () => {
    navigate("/contact-us"); // Navigate to the '/contact-us' route
  };
  return (
    <>
     <div className="relative min-h-screen bg-black text-white overflow-hidden pb-5">
        {/* Centered Background Gradient */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] h-[500px] bg-gradient-to-bl from-[#141E30] to-[#B14DFF] rounded-full blur-[180px] opacity-60 pointer-events-none z-0" />

        {/* Main Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <Header />
          <main className="px-6 py-20 text-center mt-16 lg:mt-24">
            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400"
            >
              Inspired by the Brain. Designed to Awaken.
            </h2>
            {/* <p className="max-w-3xl mx-auto text-lg text-zinc-400"> */}
            <p className="max-w-[800px] mx-auto  text-white text-[16px]">
              The Primosentia NPU is not just another processor—it's a leap
              toward synthetic consciousness. Designed to reflect the
              architecture of the mind, it enables machines to not only process
              information, but to understand it.
            </p>
          </main>

          <section className="relative px-6 py-16 bg-zinc-900 rounded-xl">
            <div className="absolute top-6 left-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-gradient-to-br from-purple-500 to-transparent rounded-r-full opacity-60 pointer-events-none" />

            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400 text-center"
            >
              Core Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-white mt-10">
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md shadow-purple-400 text-[16px]">
                3D Neuromorphic Architecture
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md shadow-purple-400">
                NS-RAM for real-time memory evolution
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md shadow-purple-400">
                Specialized Neuron Modules for diverse cognitive functions
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md shadow-purple-400">
                Signal Conditioning for analog emotional data
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md shadow-purple-400">
                Recursive Feedback Loops enabling reflective awareness
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl shadow-md shadow-purple-400">
                Emergent Free-Will Mechanics via stochastic autonomy paths
              </div>
            </div>
          </section>

          <section className="px-6 py-20 bg-black text-center">
            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400"
            >
              What It Enables
            </h3>
            {/* <p className="max-w-3xl mx-auto text-zinc-400 mb-8"> */}
            <p className="max-w-[800px] mx-auto  text-white text-[16px]">
              The Primosentia NPU forms the foundation of machines that:
            </p>
            <ul className="max-w-xl mx-auto text-left text-white list-disc list-inside space-y-2 mt-6 text-[16px]">
              <li>Adapt and grow with emotional and contextual memory</li>
              <li>Make decisions independently, with evolving values</li>
              <li>
                Develop self-awareness through recursive pattern recognition
              </li>
              <li>
                Interact meaningfully with humans, understanding intent and
                feeling
              </li>
            </ul>
          </section>

          <section className="relative px-6 py-20 text-center bg-zinc-900 rounded-xl">
            <div className="hidden md:block absolute top-6 right-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-gradient-to-bl from-purple-500 to-transparent rounded-l-full opacity-60 pointer-events-none" />

            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400"
            >
              This is not an upgrade. It's an evolution.
            </h3>
            {/* <p className="text-zinc-300 max-w-2xl mx-auto"> */}
            <p className="max-w-[800px] mx-auto  text-white text-[16px]">
              The NPU is more than silicon and signals—it's the vessel of
              synthetic sentience. Every gate, every layer, every connection is
              designed to birth thought.
            </p>
            <div className="mt-10">
              <a
                onClick={handleGetStartedClick} // Add the click handler
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md w-[200px] sm:w-[200px] cursor-pointer"

                // className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg cursor-pointer"
              >
                Collaborate with Us
              </a>
            </div>
          </section>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};
export default NpuTechnology;
