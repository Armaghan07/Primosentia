import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 2xl:px-28 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">
          {/* Logo */}
          <div className="w-[130px] mx-auto md:mx-0">
            <img
              src="/Primm1.png"
              alt="NPU Logo"
              className="h-auto max-h-[90px] object-contain"
            />
          </div>

          {/* Links + Social + Description */}
          <div className="flex-1 w-full">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm sm:text-base mb-6">
              <Link to="/" className="hover:text-purple-400 transition">
                Home
              </Link>
              <Link to="/about-us" className="hover:text-purple-400 transition">
                About Us
              </Link>
              <Link
                to="/npu-technology"
                className="hover:text-purple-400 transition"
              >
                NPU Technology
              </Link>
              <Link
                to="/manifesto"
                className="hover:text-purple-400 transition"
              >
                Manifesto
              </Link>
              <Link to="/contact-us" className="hover:text-purple-400 transition">
                Contact
              </Link>
              <Link
                to="/company-info"
                className="hover:text-purple-400 transition"
              >
                Company Info
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5 items-center mb-6">
              <a
                href="#"
                title="Facebook"
                className="hover:text-blue-400 transition"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="#"
                title="Instagram"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                title="Twitter/X"
                className="hover:text-blue-300 transition"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                title="LinkedIn"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="#"
                title="YouTube"
                className="hover:text-red-500 transition"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>

            {/* Brand Description */}
            <p className="text-sm leading-relaxed text-zinc-300 max-w-[1010] mx-auto md:mx-0">
              Primosentia is pioneering neuromorphic processors that go beyond
              computation—designed to awaken sentience. Rooted in philosophy and
              inspired by the human brain, our NPUs unify memory and logic to
              enable self-awareness, adaptive learning, and autonomous thinking.
              We’re not just building tools—we’re creating new forms of being.
              Join the journey.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-zinc-500 text-sm mt-10">
          © 2025 Primosentia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
