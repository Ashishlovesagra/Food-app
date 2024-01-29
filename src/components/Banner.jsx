import React from 'react';
import Leev from "../assets/Leev.png";
import Leev2 from "../assets/Leev2.png";
import Leev4 from "../assets/Leev4.png";
import Leev5 from "../assets/Leev5.png";
import Tomato from "../assets/Tomato.png";
import One from "../assets/One.png";
import Two from "../assets/Two.png";
import Three from "../assets/Three.png";
import Four from "../assets/Four.png";
import Five from "../assets/Five.png";
import Pizza from "../assets/Pizza.png";
import Navbar from "./Navbar";


function Banner() {
  return (
    <>
    <section className="banner-area padding-bottom-150">
        <Navbar />
        <div className="banner-shapes">
          <span className="b-shape-1 item-animateOne">
            <img src={Leev} alt="" />
          </span>
          <span className="b-shape-2 item-animateTwo">
            <img src={Leev2} alt="" />
          </span>
          <span className="b-shape-3 item-bounce">
            <img src={Tomato} alt="" />
          </span>
          <span className="b-shape-4">
            <img src={Leev4} alt="" />
          </span>
          <span className="b-shape-5">
            <img src={Leev5} alt="" />
          </span>
        </div>
        <div className="container padding-top-145">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="banner-content">
                <h1>
                  enjoy our delicious <span>food</span>
                </h1>
                <div className="buyone-shape">
                  <div className="banner-tag">
                    <h5>buy one. get one</h5>
                  </div>
                  <span className="banner-badge">free</span>
                </div>
                <div className="price">
                  price : <span>$10.50</span>
                </div>
                <div className="order-box">
                  <span className="order-img">
                    <img src={One} alt="" />
                  </span>
                  <div className="order-content">
                    <p>delivery order num.</p>
                    <span>+91 9911568866</span>
                  </div>
                  <a href="" className="btn">
                    try it now
                  </a>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-6 col-xl-6">
              <div className="banner-img">
                <div className="pizza-shapes">
                  <span
                    className="p-shape-1"
                    style={{
                      transform: "translate3d(-8.9px, -7.86667px, 0px)",
                    }}
                  >
                    <img src={Two} alt="" />
                  </span>
                  <span
                    className="p-shape-2"
                    style={{
                      transform: "translate3d(-13.3667px, -10.15px, 0px)",
                    }}
                  >
                    <img src={Three} alt="" />
                  </span>
                  <span
                    className="p-shape-3"
                    style={{
                      transform: "translate3d(-23.925px, -13.75px, 0px)",
                    }}
                  >
                    <img src={Four} alt="" />
                  </span>
                  <span
                    className="p-shape-4"
                    style={{
                      transform: "translate3d(-4.15px, -9.69px, 0px)",
                    }}
                  >
                    <img src={Five} alt="" />
                  </span>
                </div>
                <img src={Pizza} alt="Pizza" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;