import React from 'react';

function TokenSaleSection() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-6">Token Sale</h1>
        <p className="text-primary fs-5 mb-5">Token Sale Countdown</p>
      </div>
      <div className="row g-3">
        <div className="col-md-3">
          <div className="bg-white text-center p-3">
            <h1 className="mb-0">0</h1>
            <span className="text-primary fs-5">Days</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white text-center p-3">
            <h1 className="mb-0">0</h1>
            <span className="text-primary fs-5">Hours</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white text-center p-3">
            <h1 className="mb-0">0</h1>
            <span className="text-primary fs-5">Minutes</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white text-center p-3">
            <h1 className="mb-0">0</h1>
            <span className="text-primary fs-5">Seconds</span>
          </div>
        </div>
        <div className="col-12 text-center py-4">
          <a className="btn btn-primary py-3 px-4" href="#">Buy Token</a>
        </div>
        <div className="col-12 text-center">
          <img className="img-fluid m-1" src="img/payment-1.png" alt="" style={{ width: '50px' }} />
          <img className="img-fluid m-1" src="img/payment-2.png" alt="" style={{ width: '50px' }} />
          <img className="img-fluid m-1" src="img/payment-3.png" alt="" style={{ width: '50px' }} />
          <img className="img-fluid m-1" src="img/payment-4.png" alt="" style={{ width: '50px' }} />
        </div>
      </div>
    </div>
  );
}

export default TokenSaleSection;
