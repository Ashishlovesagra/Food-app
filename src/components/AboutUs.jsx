import React from 'react';
import S1 from "../assets/S1.png";
import S8 from "../assets/S8.png";
import S3 from "../assets/S3.png";
import S2 from "../assets/S2.jpg";
import S6 from "../assets/S6.jpg";
import S7 from "../assets/S7.jpg";
import S4 from "../assets/S4.png";
import S5 from "../assets/S5.png";
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";

function AboutUs() {
    const styles1 = {
        visibility: "visible",
        animationName: "fadeInUp",
      };
      const styles2 = {
        width: "inherit",
      };
  return (
    <>
    <section className="about-area padding-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 wow fadeInLeft" style={styles1}>
              <div className="about-left">
                <div className="about-l-shapes">
                  <span className="als-1">
                    <img src={S1} alt="" />
                  </span>
                </div>
                <div className="row">
                  <div
                    className="
                    col-lg-4 col-md-4 col-sm-4 col-4
                    d-flex
                    align-items-end
                    justify-content-end
                    margin-bottom-20
                  "
                  >
                    <div className="about-gallery-1">
                      <img src={S2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8 margin-bottom-20">
                    <div className="about-gallery-2">
                      <img src={S6} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="about-gallery-3">
                      <img src={S7} alt="" />
                    </div>
                  </div>
                  <div
                    className="
                    col-lg-5 col-md-5 col-sm-5 col-5
                    d-flex
                    align-items-start
                  "
                  >
                    <div className="about-gallery-4 text-center">
                      <img src={S8} alt="" />
                      <div className="items counter">2000 </div>
                      <p>food item</p>
                      <span className="g-s-4">
                        <img src={A1} alt="" />
                      </span>
                      <span className="g-s-5">
                        <img src={A2} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 offset-lg-1 wow fadeInRight"
              style={styles1}
            >
              <div className="about-right">
                <div className="about-r-shapes">
                  <span className="as-1 item-bounce">
                    <img src={S3} alt="" />
                  </span>
                </div>
                <h2>
                  {" "}
                  Fresh taste at a great price, only for{" "}
                  <span>hungry people.</span>
                </h2>
                <p>
                  Food is a restaurant, bar and coffee roastery located on a
                  busy corner site in Farringdon's Exmouth Market. With glazed.
                </p>
                <div className="garlic-burger-card">
                  <div className="garlic-burger-img">
                    <img src={S4} alt="" className="price-badge" />
                    <img src={S5} alt="" />
                  </div>
                  <div className="garlic-burger-content">
                    <h5>garlic burger parties</h5>
                    <p>
                      It is a long established fact that a reader BBQ food
                      Chicken.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs