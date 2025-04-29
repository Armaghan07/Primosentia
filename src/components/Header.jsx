import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled ? "bg-black py-3 shadow-lg shadow-[#202020] " : "py-3"
      }`}
    >
      <div className="mx-auto max-w-[1440px] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 ">
        {/* Logo */}
        <div className="w-[90px] md:w-[100px] lg:w-[120px]">
          <NavLink to="/" onClick={closeDrawer}>
            <img src="/Primm1.png" alt="NPU Logo" className="w-full h-[70px]" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className="hidden md:flex md:space-x-2 md:text-[10px] lg:space-x-6 lg:text-[15px] font-light tracking-widest"
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about-us", label: "About Us" },
            { path: "/npu-technology", label: "NPU Technology" },
            { path: "/manifesto", label: "Manifesto" },
            { path: "/contact-us", label: "Contact" },
            { path: "/company-info", label: "Company Info" },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400"
                  : "hover:text-purple-400 transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            <MenuIcon style={{ fontSize: 30 }} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white transform transition-transform duration-300 ease-in-out  ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <div className="w-[100px] pt-3 ">
            <NavLink to="/" onClick={closeDrawer}>
              <img src="/Primm1.png" alt="NPU Logo" className="w-full h-[70px]" />
            </NavLink>
          </div>
          <button onClick={toggleDrawer}>
            <CloseIcon style={{ fontSize: 30 }} />
          </button>
        </div>

        <div
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className="flex flex-col px-6 pt-6 space-y-4 text-[14px] font-light tracking-widest"
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about-us", label: "About Us" },
            { path: "/npu-technology", label: "NPU Technology" },
            { path: "/manifesto", label: "Manifesto" },
            { path: "/contact-us", label: "Contact" },
            { path: "/company-info", label: "Company Info" },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeDrawer}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400"
                  : "hover:text-purple-400 transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
