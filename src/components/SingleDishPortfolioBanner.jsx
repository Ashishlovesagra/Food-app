import React from "react";
import { FaPlay } from "react-icons/fa";

function SingleDishPortfolioBanner() {
  return (
    <>
      <div className="portfolio-banner padding-top-120">
        <div className="banner-shapes">
          <span className="bs1">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/13.png" alt />
          </span>
          <span className="bs2">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/26.png" alt />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="inner-portfolio-box wow fadeIn"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/single-portfolio.jpg" alt />
                <span>
                  <a
                    className="popup-youtube play-btn item-ripple"
                    // href="https://www.youtube.com/watch?v=9xwazD5SyVg"
                  >
                    <FaPlay/>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleDishPortfolioBanner;
