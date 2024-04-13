import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import NavbarSection from './components/Navbar';
import HeroHeader from './components/Home/Home';
import AboutSection from './components/About/About';
import FactsSection from './components/Fact/Fact';
import FeaturesSection from './components/Features/Features';
import ServiceSection from './components/Service/Service';
import RoadmapSection from './components/Roadmap/Roadmap';
import TokenSaleSection from './components/TokenSale/TokenSale';
import FAQSection from './components/Faq/Faq';
import FooterSection from './components/Footer';
import './style.css';


function App() {
  return (
    <Router>
      <NavbarSection />
      <Routes >
        <Route path="/" exact component={HeroHeader} />
        <Route path="/about" component={AboutSection} />
        <Route path="/facts" component={FactsSection} />
        <Route path="/features" component={FeaturesSection} />
        <Route path="/service" component={ServiceSection} />
        <Route path="/roadmap" component={RoadmapSection} />
        <Route path="/tokensale" component={TokenSaleSection} />
        <Route path="/faqs" component={FAQSection} />
      </Routes >
      <FooterSection />
    </Router>
  );
}

export default App;
