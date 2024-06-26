import React from 'react';

function HeroHeader() {
  return (
    <div className="container-fluid bg-light py-5 mb-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 mb-3">Make Better Life With Trusted CryptoCoin</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <a href="#" className="btn btn-primary py-3 px-4">Explore More</a>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src="img/hero-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
