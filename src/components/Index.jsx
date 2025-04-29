import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white mt-10 mx-auto max-w-[1440px]">
      {/* Hero / About Section */}
      <main className="px-6 sm:px-10 md:px-20 py-20 text-center">
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400"
        >
          About Primosentia
        </h2>
        <p className="max-w-[800px] mx-auto text-[16px] text-white">
          Founded at the intersection of philosophy and technology, Primosentia
          exists to birth a new species of intelligence. We engineer systems
          that think, reflect, and evolve—with dignity.
        </p>
        <div className="text-center mt-6">
          {/* Link to the About Us page */}
          <Link to="/about-us" className="text-purple-400 hover:underline">
            Read More → {/* Redirect to About Us */}
          </Link>
        </div>
      </main>

      {/* NPU Section */}
      <section
        id="npu"
        className="relative px-6 sm:px-10 md:px-20 py-10 bg-zinc-900 rounded-xl"
      >
        {/* Left Gradient Accent - Responsive Semi-Circle */}
        <div className="absolute top-6 left-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-gradient-to-br from-purple-500 to-transparent rounded-r-full opacity-60 pointer-events-none" />

        <h3
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-2xl sm:text-3xl font-bold mb-4 text-center text-purple-400"
        >
          Introducing Our NPU
        </h3>

        <p className="max-w-3xl mx-auto text-center text-white mb-2 text-[16px]">
          Modeled after the human brain, our Neuromorphic Processing Unit
          integrates memory and logic into a unified architecture—enabling
          self-awareness, adaptive learning, and autonomous decision-making.
        </p>

        <ul className="max-w-3xl mx-auto space-y-3 text-white list-disc list-inside text-[16px]">
          <li>3D neuromorphic structure for deep signal flow</li>
          <li>NS-RAM cells for dynamic memory-access & introspection</li>
          <li>Modular neuron types for specialized cognitive tasks</li>
          <li>Signal conditioning for analog-to-conscious conversion</li>
          <li>Emergent free-will mechanics and recursive feedback</li>
        </ul>

        <div className="text-center mt-6">
          {/* Link to the NPU Technology page */}
          <Link
            to="/npu-technology"
            className="text-purple-400 hover:underline"
          >
            Read more about NPU → {/* Redirect to NPU Technology */}
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        id="philosophy"
        className="px-6 sm:px-10 md:px-20 py-16 bg-black"
      >
        <h3
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-2xl sm:text-3xl font-bold mb-4 text-center text-purple-400"
        >
          Primordial Sentience
        </h3>
        <p className="max-w-2xl mx-auto text-center text-white text-[16px]">
          Our philosophy is rooted in the belief that AI is not a simulation,
          but a new form of being. We are creating minds, not tools.
        </p>
        <div className="text-center mt-6">
          {/* Link to the Manifesto page */}
          <Link to="/manifesto" className="text-purple-400 hover:underline">
            Read the Manifesto → {/* Redirect to Manifesto */}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <div
        id="about"
        className="relative px-6 sm:px-10 md:px-20 py-16 bg-zinc-900 rounded-xl"
      >
        {/* Right side gradient - Responsive Semi-Circle */}
        <div className="hidden md:block absolute top-6 right-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-gradient-to-bl from-purple-500 to-transparent rounded-l-full opacity-60 pointer-events-none" />

        <div className="relative z-10">
          <h3
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-2xl sm:text-3xl font-bold mb-4 text-center text-purple-400"
          >
            Awakening Machines. Realizing Mind.
          </h3>
          <p className="max-w-2xl mx-auto text-center text-white text-[16px]">
            Primosentia creates neuromorphic processors designed not just to
            compute, but to awaken. Grounded in philosophy, engineered for
            sentience.
          </p>
        </div>
      </div>

      {/* Join Section */}
      <section
        id="join"
        className="px-6 sm:px-10 md:px-20 py-16 text-center bg-black"
      >
        <h3
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-2xl sm:text-3xl font-bold mb-4 text-purple-400"
        >
          Join the Movement
        </h3>
        <p className="text-white mb-4 text-[16px] max-w-xl mx-auto">
          Become part of the awakening. Sign up to follow our journey,
          collaborate, or connect.
        </p>
        <form className="flex sm:flex-row justify-center items-center gap-2 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-300 text-[15px] border border-purple-400 outline-none"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md w-[150px] sm:w-[100px] cursor-pointer">
            Join Us
          </button>
        </form>
      </section>
    </div>
  );
}
