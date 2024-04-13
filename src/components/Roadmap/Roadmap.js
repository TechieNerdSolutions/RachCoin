import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function RoadmapSection() {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <h1 className="display-6">Roadmap</h1>
          <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
        </div>
        <OwlCarousel className="owl-carousel roadmap-carousel wow fadeInUp" data-wow-delay="0.1s" {...options}>
          <div className="roadmap-item">
            <div className="roadmap-point"><span></span></div>
            <h5>January 2045</h5>
            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-point"><span></span></div>
            <h5>March 2045</h5>
            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-point"><span></span></div>
            <h5>May 2045</h5>
            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-point"><span></span></div>
            <h5>July 2045</h5>
            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-point"><span></span></div>
            <h5>September 2045</h5>
            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-point"><span></span></div>
            <h5>November 2045</h5>
            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default RoadmapSection;
