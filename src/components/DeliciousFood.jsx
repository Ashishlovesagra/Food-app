import './Style.css';
import React from "react";

function DeliciousFood() {
  return (
    <>
      <section className="delicious-area delicious-img padding-top-120 padding-bottom-120">
        <div className="container">
          <div className="deli-shapes">
            <span className="ds-1">
              <img
                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/transparent1.png"
                alt
              />
            </span>
            <span className="ds-2 item-animateOne">
              <img
                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/27.png"
                alt
              />
            </span>
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-6  wow fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <div className="delicious-left">
                <h2>
                  Fresh taste at a great price, only for
                  <span>Delicious Food lover.</span>
                </h2>
                <a
                  className="play-btn1 item-ripple popup-youtube"
                  href="https://www.youtube.com/"
                >
                  <i className="fas fa-play" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  className=" popup-youtube intro"
                >
                  {" "}
                  intro video
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 d-none d-lg-block  wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="delicious-right">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/1.png"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeliciousFood;
