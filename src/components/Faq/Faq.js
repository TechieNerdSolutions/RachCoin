import React from 'react';

function FAQSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <h1 className="display-6">FAQs</h1>
          <p className="text-primary fs-5 mb-5">Frequently Asked Questions</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How to build a website?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
