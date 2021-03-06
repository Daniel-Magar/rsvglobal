import React from "react";
import "../whyrsv.css";

const WhyRsv = () => {
  return (
    <>
      <div className="abt-main">
        <div className="about-section">
          <div className="about-abt" style={{ width: "30%" }}>
            <img src="./why.svg" alt="why rsv" width="350" />
          </div>
          <div className="about-abt" style={{ width: "70%" }}>
            <p className="text">
              <b className="rsv-global">Why RSV</b>
              <b className="global">Global?</b>
            </p>
            <div className="why-content-parent">
              <div className="why-content">
                <h4> We engage :</h4>
                <div class="why-flex">
                  <div class="why-flex-left">
                    <i class="bx bx-radio-circle-marked bullet" />
                  </div>
                  <div class="why-flex-right">
                    Highly competent professionals across domains
                  </div>
                </div>
                <div class="why-flex">
                  <div class="why-flex-left">
                    <i class="bx bx-radio-circle-marked bullet" />
                  </div>
                  <div class="why-flex-right">State-of-the-art Technology </div>
                </div>
              </div>
              <div className="why-content">
                <h4> We are:</h4>

                <div className="why-left-div">
                  <div class="why-flex">
                    <div class="why-flex-left">
                      <i class="bx bx-radio-circle-marked bullet" />
                    </div>
                    <div class="why-flex-right">Proactive </div>
                  </div>
                  <div class="why-flex">
                    <div class="why-flex-left">
                      <i class="bx bx-radio-circle-marked bullet" />
                    </div>
                    <div class="why-flex-right">Responsive</div>
                  </div>
                </div>
                <div className="why-right-div">
                  <div class="why-flex">
                    <div class="why-flex-left">
                      <i class="bx bx-radio-circle-marked bullet" />
                    </div>
                    <div class="why-flex-right">Driven by Passion </div>
                  </div>
                  <div class="why-flex">
                    <div class="why-flex-left">
                      <i class="bx bx-radio-circle-marked bullet" />
                    </div>
                    <div class="why-flex-right">Governed by Ethics </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyRsv;
