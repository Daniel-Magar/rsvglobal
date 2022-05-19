import React, { useEffect } from "react";
// import { Footer } from "rsuite";
import TopNav from "./TopNav";
import Footer from "./Footer";

const Pstaffing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopNav />
      <section id="permanentstaffing">
        <div className="flex-container">
          <div className="flex-item-left">
            <div className="hero-text">
              <div className="hero-ellipse">
                <img src="./ellipse1.png" alt="" style={{ width: "200px" }} />
              </div>
              <div className="hero-txt">Get your dream Job Today</div>
            </div>
          </div>
          <div className="flex-item-right">
            <img src="./herogirl.png" alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pstaffing;
