import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function ChickenRecipe() {
  return (
    <>
      <section className="chicken-recipe-area padding-top-115 padding-bottom-80">
        <div className="recipe-shapes">
          <span className="rs1">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png"
              alt
            />
          </span>
          <span className="rs2">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/13.png"
              alt
            />
          </span>
          <span className="rs3">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/26.png"
              alt
            />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 margin-bottom-30 wow fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <div className="recipe-left">
                <div className="slider-for slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{ opacity: 1, width: 1638 }}
                    >
                      <div
                        className="single-slide slick-slide slick-current slick-active"
                        style={{
                          width: 546,
                          position: "relative",
                          left: 0,
                          top: 0,
                          zIndex: 999,
                          opacity: 1,
                        }}
                      >
                        <div className="product-content">
                          <img
                            className="mp"
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/br1.png"
                            alt
                          />
                          <img
                            className="pbadge"
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/pbadge.png"
                            alt
                          />
                        </div>
                      </div>
                      <div
                        className="single-slide slick-slide"
                        style={{
                          width: 546,
                          position: "relative",
                          left: "-546px",
                          top: 0,
                          zIndex: 998,
                          opacity: 0,
                        }}
                      >
                        <div className="product-content">
                          <img
                            className="mp"
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/br1.png"
                            alt
                          />
                          <img
                            className="pbadge"
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/pbadge.png"
                            alt
                          />
                        </div>
                      </div>
                      <div
                        className="single-slide slick-slide"
                        style={{
                          width: 546,
                          position: "relative",
                          left: "-1092px",
                          top: 0,
                          zIndex: 998,
                          opacity: 0,
                        }}
                      >
                        <div className="product-content">
                          <img
                            className="mp"
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/br1.png"
                            alt
                          />
                          <img
                            className="pbadge"
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/pbadge.png"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-nav margin-top-30 slick-initialized slick-slider">
                  <div
                    className="slick-list draggable"
                    style={{ padding: "0px 50px" }}
                  >
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: 447,
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="div slick-slide slick-current slick-center"
                        style={{ width: 149 }}
                      >
                        <div className="pnav">
                          <img
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/br3.png"
                            alt
                          />
                        </div>
                      </div>
                      <div className="div slick-slide" style={{ width: 149 }}>
                        <div className="pnav">
                          <img
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/br2.png"
                            alt
                          />
                        </div>
                      </div>
                      <div
                        className="div slick-slide slick-center"
                        style={{ width: 149 }}
                      >
                        <div className="pnav">
                          <img
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/br3.png"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="recipe-right">
                <h2>Chicken Fry Recipe</h2>
                <form action="#">
                  <div className="chickens-inforbar d-flex justify-content-around align-items-center">
                    <span className="cp">
                      $10.00 <del>$100.00</del>
                    </span>
                    <span className="rate">
                      {" "}
                      5<FaStar />
                    </span>
                    <span>
                      {" "}
                      <span className="colored">
                        <FaComments />
                      </span>{" "}
                      comment
                    </span>
                    <span>
                      {" "}
                      <span className="colored">
                        <FaHeart />
                      </span>{" "}
                      200+ like
                    </span>
                  </div>
                  <p>
                    Thing lesser replenish evening called void a sea blessed
                    meat fourth called moveth place Quarter Rack of Ribs served
                    with your choice of side Pulled Pork, Beer Braised Brisket.
                  </p>
                  <div className="chickens-details d-flex justify-content-between">
                    <span>
                      <input type="number" />
                    </span>
                    <span>
                      {" "}
                      <label htmlFor="size">size</label>
                      <select name="#" id="size">
                        <option value="#">XI</option>
                        <option value="#">XI</option>
                        <option value="#">XI</option>
                        <option value="#">XI</option>
                      </select>
                    </span>
                    <span>
                      <label htmlFor="stock">Available stock</label>
                      <input id="stock" type="number" />
                    </span>
                  </div>
                  <div className="chickens-meta">
                    <ul className="d-flex justify-content-between">
                      <li>
                        Tag : SKU: <span>Food-Collections</span>
                      </li>
                      <li>
                        Category: <span>Recipe</span>
                      </li>
                    </ul>
                  </div>
                  <button type="submit" className="btn">
                    add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChickenRecipe;
