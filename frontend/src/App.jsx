import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Hero";
import About from "./pages/AboutIntro";
import ProgramsPage from "./pages/Programs";
import Contact from "./pages/ContactSection";
import BackToTop from "./components/BackToTop";



function App() {
  return (
    <BrowserRouter>
      <div className="app d-flex flex-column" style={{ minHeight: "100vh" }}>

        <Navbar />

        {/* Page Content */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer + Scroll Button */}
        <Footer />
        <BackToTop />

      </div>
    </BrowserRouter>
  );
}

export default App;
