import React from "react";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import NpuTechnology from "./components/NpuTechnology";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import CompanyInfo from "./components/CompanyInfo";
import Manifesto from "./components/Menifesto";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/npu-technology" element={<NpuTechnology />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/company-info" element={<CompanyInfo />} />
      </Routes>
    </>
  );
};

export default App;
