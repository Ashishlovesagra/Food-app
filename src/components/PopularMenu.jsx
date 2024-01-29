import React from 'react';
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";

function PopularMenu() {
    const styles1 = {
        visibility: "visible",
        animationName: "fadeInUp",
      };
      const styles2 = {
        width: "inherit",
      };
  return (
    <>
    <section className="menu-area padding-bottom-120">
        <div className="container">
          <div
            className="common-title-area text-center padding-50 wow fadeInUp"
            style={styles1}
          >
            <h3>food items</h3>
            <h2>
              popular <span>menu</span>
            </h2>
          </div>
          {/* menu-nav-wrapper */}
          <div className="menu-nav-wrapper">
            <div className="container">
              <div className="row">
                <ul className="nav" id="menuAreaTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link "
                      id="menu1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#menu1-tab-pane"
                      role="tab"
                      aria-controls="menu1-tab-pane"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pizza.png"
                            alt=""
                          />
                        </div>
                        <h6>Pizza</h6>
                        <span className="g-s-4">
                          <img src={A1} alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src={A2} alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="menu2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#menu2-tab-pane"
                      role="tab"
                      aria-controls="menu2-tab-pane"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/burger.png"
                            alt=""
                          />
                        </div>
                        <h6>Burger</h6>
                        <span className="g-s-4">
                          <img src={A1} alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src={A2} alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="menu3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#menu3-tab-pane"
                      role="tab"
                      aria-controls="menu3-tab-pane"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/chicken.png"
                            alt=""
                          />
                        </div>
                        <h6>Chicken</h6>
                        <span className="g-s-4">
                          <img src={A1} alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src={A2} alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="menu4-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#menu4-tab-pane"
                      role="tab"
                      aria-controls="menu4-tab-pane"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/drinks.png"
                            alt=""
                          />
                        </div>
                        <h6>Drinks</h6>
                        <span className="g-s-4">
                          <img src={A1} alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src={A2} alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="menu5-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#menu5-tab-pane"
                      role="tab"
                      aria-controls="menu5-tab-pane"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/drinks2.png"
                            alt=""
                          />
                        </div>
                        <h6>Drinks</h6>
                        <span className="g-s-4">
                          <img src={A1} alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src={A2} alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="menu6-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#menu6-tab-pane"
                      role="tab"
                      aria-controls="menu6-tab-pane"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/combo.png"
                            alt=""
                          />
                        </div>
                        <h6>Combo Menu</h6>
                        <span className="g-s-4">
                          <img src={A1} alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src={A2} alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* new-items */}
          {/* Menu item wrapper */}
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade"
              id="menu1-tab-pane"
              role="tabpanel"
              aria-labelledby="menu1-tab"
            >
              <div className="menu-items-wrapper menu-custom-padding margin-top-50">
                <div className="menu-i-shapes">
                  <span className="mis-1">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/28.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-2">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-3">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/7.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-4">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/17.png"
                      alt=""
                    />
                  </span>
                </div>
                {/* first row */}
                <div className="row row-gap-4">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/piz1.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Margherita</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/piz2.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Tomato</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/piz3.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Marinara</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                {/* 2nd row */}
                <div className="row row-gap-4">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/piz4.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Frutti Di Mare</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/piz5.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Americana</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/piz6.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Pizza Al Pesto</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="menu-btn text-center">
                  <a href="" className="btn">
                    order now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="menu2-tab-pane"
              role="tabpanel"
              aria-labelledby="menu2-tab"
            >
              <div className="menu-items-wrapper menu-custom-padding margin-top-50">
                <div className="menu-i-shapes">
                  <span className="mis-1">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/28.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-2">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-3">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/7.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-4">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/17.png"
                      alt=""
                    />
                  </span>
                </div>
                {/* first row */}
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/mi-1.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Garlic Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br1.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Naga burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br2.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Chicken Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                {/* 2nd row */}
                <div className="row margin-top-60">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br3.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">BBQ Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br5.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Crispy Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br6.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Veg Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="menu-btn text-center">
                  <a href="" className="btn">
                    order now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="menu3-tab-pane"
              role="tabpanel"
              aria-labelledby="menu3-tab"
            >
              <div className="menu-items-wrapper menu-custom-padding margin-top-50">
                <div className="menu-i-shapes">
                  <span className="mis-1">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/28.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-2">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-3">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/7.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-4">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/17.png"
                      alt=""
                    />
                  </span>
                </div>
                {/* first row */}
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/tc6.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Fried Chicken</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/mi-2.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Thai Chicken</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/mi-3.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Bbq Chicken</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                {/* 2nd row */}
                <div className="row margin-top-60">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/tc6.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Fried Chicken</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/mi-2.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Thai Chicken</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/mi-3.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Bbq Chicken</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="menu-btn text-center">
                  <a href="" className="btn">
                    order now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="menu4-tab-pane"
              role="tabpanel"
              aria-labelledby="menu4-tab"
            >
              <div className="menu-items-wrapper menu-custom-padding margin-top-50">
                <div className="menu-i-shapes">
                  <span className="mis-1">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/28.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-2">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-3">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/7.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-4">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/17.png"
                      alt=""
                    />
                  </span>
                </div>
                {/* first row */}
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href=""> Grape</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Blueberry</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Cranberry</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                {/* 2nd row */}
                <div className="row margin-top-60">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Orange</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Beetroot</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Pomegranate</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="menu-btn text-center">
                  <a href="" className="btn">
                    order now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="menu5-tab-pane"
              role="tabpanel"
              aria-labelledby="menu5-tab"
            >
              <div className="menu-items-wrapper menu-custom-padding margin-top-50">
                <div className="menu-i-shapes">
                  <span className="mis-1">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/28.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-2">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-3">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/7.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-4">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/17.png"
                      alt=""
                    />
                  </span>
                </div>
                {/* first row */}
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Guava juice</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Lemonade</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Lingonberry</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                {/* 2nd row */}
                <div className="row margin-top-60">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Prune juice</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Sugarcane</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/dr5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Vegetable</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="menu-btn text-center">
                  <a href="" className="btn">
                    order now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="menu6-tab-pane"
              role="tabpanel"
              aria-labelledby="menu6-tab"
            >
              <div className="menu-items-wrapper menu-custom-padding margin-top-50">
                <div className="menu-i-shapes">
                  <span className="mis-1">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/28.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-2">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-3">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/7.png"
                      alt=""
                    />
                  </span>
                  <span className="mis-4">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/17.png"
                      alt=""
                    />
                  </span>
                </div>
                {/* first row */}
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/mi-1.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Garlic Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br1.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Naga burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br2.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Chicken Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                {/* 2nd row */}
                <div className="row margin-top-60">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br3.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">BBQ Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br5.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Crispy Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-menu-item d-flex justify-content-between align-items-center h-100">
                      <div className="menu-img">
                        <img
                          src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/br6.png"
                          alt=""
                        />
                      </div>
                      <div className="menu-content">
                        <h5>
                          <a href="">Veg Burger</a>
                        </h5>
                        <p>shirmp. squid, pineapple</p>
                        <span>price :$15.00</span>
                        <span className="del">
                          <del>price :$18.00</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="menu-btn text-center">
                  <a href="" className="btn">
                    order now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularMenu;