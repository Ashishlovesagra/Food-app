import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
    <footer className="padding-top-40 padding-bottom-40">
        <div className="fo-shapes">
          <span className="fs-1">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/26.png"
              alt
            />
          </span>
          <span className="fs-2 item-bounce">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/25.png"
              alt
            />
          </span>
          <span className="fs-3 item-bounce">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/26.png"
              alt
            />
          </span>
          <span className="fs-4 item-bounce">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/27.png"
              alt
            />
          </span>
          <span className="fs-5 item-animateTwo">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/3.png"
              alt
            />
          </span>
          <span className="fs-6">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/22.png"
              alt
            />
          </span>
          <span className="fs-7">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/30.png"
              alt
            />
          </span>
        </div>
        <div className="footer-top d-none d-md-block">
          <div className="container">
            <div
              className="
        row
        align-items-center
        justify-content-between
        padding-bottom-25
      "
            >
              <div className="col-lg-3 col-md-3">
                <div className="f-logo">
                  <Link to="/">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/logo/logo.png"
                      alt
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="f-title">
                  <h4>
                    Feel Hunger! Order Your<span> Like Food.</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <Link to="/shopping-cart" className="btn">
                  order now
                </Link>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="footer-bottom padding-top-22 padding-bottom-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 margin-bottom-20">
                <div className="widget">
                  <h6>address</h6>
                  <p>
                    570 8th Ave Noida, UP, 201304 India
                  </p>
                  <Link to="" className="f-link">
                    view google map
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 margin-bottom-20">
                <div className="widget">
                  <h6>book a table</h6>
                  <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
                  <Link to="+91 9911568866" className="f-link">
                    make a call
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 margin-bottom-20">
                <div className="widget">
                  <h6>opening hours</h6>
                  <p>
                    <span>monday-friday: 8am - 4pm</span> <br />
                    <span>saturday: 9am - 5pm</span>
                  </p>
                  <Link to="+91 9911568866" className="f-link">
                    make a call
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 margin-bottom-20">
                <div className="widget">
                  <h6>newsletter</h6>
                  <div className="newsletter d-flex">
                    <form action="#">
                      <input type="email" placeholder="enter your email" />
                      <button type="submit">
                        <i className="fas fa-paper-plane" />
                      </button>
                    </form>
                  </div>
                  <Link to="" className="f-link">
                    subscribe now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area text-center">
          <p>
            Copyright © 2024 <Link to="">(update portfolio Link) Ashish Singh</Link>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer