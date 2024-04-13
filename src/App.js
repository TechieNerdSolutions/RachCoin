import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import NavbarSection from "./components/Navbar";
import HeroHeader from "./components/Home/Home";
import AboutSection from "./components/About/About";
import FactsSection from "./components/Fact/Fact"
import FeaturesSection from "./components/Features/Features"
import ServiceSection from "./components/Service/Service"
import RoadmapSection from "./components/Roadmap/Roadmap"
import TokenSaleSection from "./components/TokenSale/TokenSale"
import FAQSection from "./components/Faq/Faq"
import FooterSection from "./components/Footer";

import {
  BrowserRouter as Router,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./style.css";
import "./main.js";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavbarSection />
        <ScrollToTop />
        <HeroHeader />
        <AboutSection />
        <FactsSection />
        <FeaturesSection />
        <ServiceSection />
        <RoadmapSection />
        <TokenSaleSection />
        <FAQSection />
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
