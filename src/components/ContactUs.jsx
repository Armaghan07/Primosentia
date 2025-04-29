import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <style>
        {`
          /* Custom Scrollbar directly inside component */
          .scrollbar-thin::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: transparent;
            border-radius: 10px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }
        `}
      </style>

      <div className="relative min-h-screen bg-black text-white overflow-hidden pb-5">
        {/* Centered Background Gradient */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] h-[500px] bg-gradient-to-bl from-[#141E30] to-[#B14DFF] rounded-full blur-[180px] opacity-60 pointer-events-none z-0" />

        {/* Main Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <Header />

          {/* Content */}
          <main className="w-full py-16 mt-20 lg:mt-20 text-center">
            <h1
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-2xl md:text-3xl font-bold mb-6 text-purple-400 animate-fade-up"
            >
              Get in Touch
            </h1>
            <p className="text-white mb-12 max-w-2xl mx-auto animate-fade-up delay-200 text-[16px]">
              Let's collaborate, innovate, and build the future together. Fill
              the form below and we’ll connect with you shortly.
            </p>

            {/* Form Section */}
            <section className="w-full max-w-3xl mx-auto bg-zinc-900 rounded-2xl p-8 md:p-12 shadow-lg shadow-purple-500/30 animate-fade-in">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                autoComplete="off"
                className="space-y-8"
              >
                {/* First and Last Name */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="peer w-full border-b-2 border-gray-600 bg-transparent pt-7 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-all"
                      placeholder="First Name"
                    />
                    <label className="absolute left-0 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400 transition-all">
                      First Name
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="peer w-full border-b-2 border-gray-600 bg-transparent pt-7 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-all"
                      placeholder="Last Name"
                    />
                    <label className="absolute left-0 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400 transition-all">
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full">
                    <input
                      type="email"
                      name="email"
                      required
                      className="peer w-full border-b-2 border-gray-600 bg-transparent pt-7 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-all"
                      placeholder="Email"
                    />
                    <label className="absolute left-0 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400 transition-all">
                      Email
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="peer w-full border-b-2 border-gray-600 bg-transparent pt-7 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-all"
                      placeholder="Phone Number"
                    />
                    <label className="absolute left-0 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400 transition-all">
                      Phone Number
                    </label>
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    required
                    className="peer w-full border-b-2 border-gray-600 bg-transparent pt-7 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-all"
                    placeholder="Subject"
                  />
                  <label className="absolute left-0 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400 transition-all">
                    Subject
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-gray-400 text-sm mb-1 text-left pb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full border-2 border-gray-600 bg-transparent p-3 text-white rounded focus:outline-none focus:border-purple-500 transition-all resize-none scrollbar-thin"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md w-[150px] sm:w-[150px] cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
