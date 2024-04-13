import React from 'react';

function HeroHeader() {
  return (
    <div className="container-fluid hero-header bg-light py-5 mb-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 mb-3 animated slideInDown">Make Better Life With Trusted CryptoCoin</h1>
            <p className="animated slideInDown">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <a href="#" className="btn btn-primary py-3 px-4 animated slideInDown">Explore More</a>
          </div>
          <div className="col-lg-6 animated fadeIn">
            <img className="img-fluid animated pulse infinite" style={{ animationDuration: '3s' }} src="img/hero-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
