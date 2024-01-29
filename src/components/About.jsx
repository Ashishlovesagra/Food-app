import React from "react";

function About() {
  return (
    <>
      <section className="about-area about-area2 padding-top-120 padding-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-12  wow fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <div className="about-left">
                <div className="about-l-shapes">
                  <span className="als-1">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/2.png"
                      alt
                    />
                  </span>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 d-flex align-items-end justify-content-end margin-bottom-20">
                    <div className="about-gallery-1">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/1.jpg"
                        alt
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8 margin-bottom-20">
                    <div className="about-gallery-2">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/2.jpg"
                        alt
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="about-gallery-3">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/3.jpg"
                        alt
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-5 col-5 d-flex align-items-stretch ">
                    <div className="about-gallery-5 text-center">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/4.jpg"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12  wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="about-right">
                <div className="about-r-shapes">
                  <span className="as-1">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/1.png"
                      alt
                    />
                  </span>
                </div>
                <h2>
                  The Story about Food khan, only for
                  <span>hungry people.</span>
                </h2>
                <p>
                  Food is a restaurant, bar and coffee roastery located on a
                  busy corner site in Farringdon's Exmouth Market. With glazed.
                </p>
                <div className="history-tab">
                  <ul className="nav" id="historyTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <div
                        className="nav-link active"
                        id="history-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#history-tab-pane"
                        role="tab"
                        aria-controls="history-tab-pane"
                      >
                        history
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div
                        className="nav-link"
                        id="journey-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#journey-tab-pane"
                        role="tab"
                        aria-controls="journey-tab-pane"
                      >
                        journey
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div
                        className="nav-link"
                        id="experience-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#experience-tab-pane"
                        role="tab"
                        aria-controls="experience-tab-pane"
                      >
                        experience
                      </div>
                    </li>
                  </ul>
                  <div className="tab-content" id="historyTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="history-tab-pane"
                      role="tabpanel"
                      aria-labelledby="history-tab"
                    >
                      <div className="his-content">
                        <p>
                          FoodKhan is Bangladeshi’s own fast food restaurants
                          chain offering Burgers, French fries, Milkshakes,
                          Smoothies and so much more.
                        </p>
                        <div className="sig-wrapper d-flex flex-wrap justify-content-around align-items-center">
                          <div className="sig-img d-flex align-items-center">
                            <img src="assets/images/icons/sig.png" alt />
                            <span>head of chef</span>
                          </div>
                          <a href="food-page.html" className="btn">
                            all items
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="journey-tab-pane"
                      role="tabpanel"
                      aria-labelledby="journey-tab"
                    >
                      <div className="his-content">
                        <p>
                          FoodKhan is Bangladeshi’s own fast food restaurants
                          chain offering Burgers, French fries, Milkshakes,
                          Smoothies and so much more. We are known for our
                          delicious taste, superior quality
                        </p>
                        <div className="sig-wrapper d-flex flex-wrap justify-content-around align-items-center">
                          <div className="sig-img d-flex align-items-center">
                            <img
                              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/sig.png"
                              alt
                            />
                            <span>head of chef</span>
                          </div>
                          <a href="food-page.html" className="btn">
                            all items
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="experience-tab-pane"
                      role="tabpanel"
                      aria-labelledby="experience-tab"
                    >
                      <div className="his-content">
                        <p>
                          Food Khan is a restaurant, bar and coffee roasters
                          located on a busy corner site in Farrington's Exmouth
                          Market.
                        </p>
                        <div className="sig-wrapper d-flex flex-wrap justify-content-around align-items-center">
                          <div className="sig-img d-flex align-items-center">
                            <img
                              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/sig.png"
                              alt
                            />
                            <span>head of chef</span>
                          </div>
                          <a href="food-page.html" className="btn">
                            all items
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
