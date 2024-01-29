import React from "react";
import { FaGoogle } from "react-icons/fa6";

function SignupForm() {
  return (
    <>
      <section className="about-area about-area2 writeto-us login-area signup-area padding-top-120 padding-bottom-120">
        <div className="form-shapes">
          <span className="fs1 item-animateOne">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/1.png" alt />
          </span>
          <span className="fs2 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png" alt />
          </span>
          <span className="fs3">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/13.png" alt />
          </span>
          <span className="fs4 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/26.png" alt />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-12  wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="about-left">
                <div className="about-l-shapes">
                  <span className="als-1">
                    <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/2.png" alt />
                  </span>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 d-flex align-items-end justify-content-end margin-bottom-20">
                    <div className="about-gallery-1">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/1.jpg" alt />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8 margin-bottom-20">
                    <div className="about-gallery-2">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/2.jpg" alt />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="about-gallery-3">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/3.jpg" alt />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-5 col-5 d-flex align-items-stretch ">
                    <div className="about-gallery-5 text-center">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/5.jpg" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="contact-form-area login-form-area signup-form-area">
                <h3>
                  Signup <span>now</span>
                </h3>
                <form action="#">
                  <div className="google-button">
                    <a href="#" className="btn">
                      <span>
                        <FaGoogle />
                      </span>{" "}
                      google
                    </a>
                  </div>
                  <input type="text" placeholder="name" />
                  <input type="email" placeholder="email" />
                  <input type="password" placeholder="password" />
                  <input type="password" placeholder="confirm password" />
                  <div className="checkbox-area">
                    <div className="checkbox-part">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">remember me</label>
                    </div>
                    <div className="forgot-pas">
                      <a href="#">forgot password?</a>
                    </div>
                  </div>
                  <div className="login-btn">
                    <button type="submit" className="btn">
                      login account
                    </button>
                    <span>
                      already have an account? <a href="login.html">login</a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignupForm;
