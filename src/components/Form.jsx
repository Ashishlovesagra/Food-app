import React from 'react';
import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F5 from "../assets/F5.png";
import F6 from "../assets/F6.png";
import F7 from "../assets/F7.png";
import F8 from "../assets/F8.png";

function Form() {
    const styles1 = {
        visibility: "visible",
        animationName: "fadeInUp",
      };
      const styles2 = {
        width: "inherit",
      };
  return (
    <>
    <section className="form-area">
        <div className="container">
          <div className="form-box padding-top-110 padding-bottom-80">
            <div className="form-shapes">
              <span className="fs-1">
                <img src={F1} alt="" />
              </span>
              <span className="fs-2">
                <img src={F2} alt="" />
              </span>
              <span className="fs-3 item-animateOne">
                <img src={F3} alt="" />
              </span>
              <span className="fs-5">
                <img src={F5} alt="" />
              </span>
              <span className="fs-6">
                <img src={F6} alt="" />
              </span>
              <span className="fs-7 item-animateTwo">
                <img src={F7} alt="" />
              </span>
              <span className="fs-8 item-animateOne">
                <img src={F8} alt="" />
              </span>
            </div>
            <div
              className="common-title-area text-center padding-bottom-50 wow fadeInUp"
              style={styles1}
            >
              <h3>Online Booking</h3>
              <h2>
                Table <span>Booking</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-12">
                <div className="form-wraper padding-bottom-40">
                  <form action="">
                    <select className="form-item2">
                      <option value="">4 people</option>
                      <option value="">3 people</option>
                      <option value="">2 people</option>
                      <option value="">1 people</option>
                    </select>
                    <input type="date" className="form-item2" />
                    <select className="form-item2">
                      <option value="">07:24 pm</option>
                      <option value="">07:24 pm</option>
                      <option value="">07:24 pm</option>
                      <option value="">07:24 pm</option>
                    </select>
                    <button type="submit">find table</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Form