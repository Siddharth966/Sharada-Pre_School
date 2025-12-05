import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ProgramsPage from "./pages/ProgramsPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app d-flex flex-column" style={{ minHeight: "100vh" }}>

        {/* Navigation */}
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
