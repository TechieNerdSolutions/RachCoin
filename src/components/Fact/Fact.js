import React from 'react';

function FactsSection() {
  return (
    <div className="container py-5 my-5">
      <div className="row g-5">
        <div className="col-lg-4 col-md-6 text-center">
          <img className="img-fluid mb-4" src="img/icon-9.png" alt="" />
          <h1 className="display-4">123456</h1>
          <p className="fs-5 text-primary mb-0">Today Transactions</p>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <img className="img-fluid mb-4" src="img/icon-10.png" alt="" />
          <h1 className="display-4">123456</h1>
          <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
          <h1 className="display-4">123456</h1>
          <p className="fs-5 text-primary mb-0">Total Transactions</p>
        </div>
      </div>
    </div>
  );
}

export default FactsSection;
