import React from "react";

function MainGallery() {
  return (
    <>
      <div className="food-area-wrapper main-gallery">
        <div className="pshapes">
          <span className="ps-1">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/32.png"
              alt
            />
          </span>
          <span className="ps-2">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png"
              alt
            />
          </span>
          <span className="ps3">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/13.png"
              alt
            />
          </span>
          <span className="ps-4">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/14.png"
              alt
            />
          </span>
          <span className="ps-5">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/6.png"
              alt
            />
          </span>
          <span className="ps-6">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/16.png"
              alt
            />
          </span>
          <span className="ps-7">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/6.png"
              alt
            />
          </span>
        </div>
        <div className="container padding-top-120 padding-bottom-120">
          <div className="row margin-bottom-60">
            <div className="col-lg-12 col-md-12">
              <div className="gallery-btn button-group filter-button-group">
                <button className="active" data-filter="*">
                  all items
                </button>
                <button data-filter=".pizza" className>
                  pizza
                </button>
                <button data-filter=".burger" className>
                  burger
                </button>
                <button data-filter=".chicken" className>
                  chicken
                </button>
                <button data-filter=".vege" className>
                  vegetarian
                </button>
              </div>
            </div>
          </div>
          <div
            className="row gallery-wrapper grid"
            style={{ position: "relative", height: 900 }}
          >
            <div
              className="col-lg-3 col-md-6 col-12 pizza burger grid-item"
              style={{ position: "absolute", left: "0%", top: 0 }}
            >
              <div className="gallery-img">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/gallery1.jpg"
                  alt
                />
                <div className="gallery-info">
                  <div className="inner-info text-center">
                    <p>chicken</p>
                    <h6>Delicious Dinner Dish</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12  chicken vege grid-item"
              style={{ position: "absolute", left: "25%", top: 0 }}
            >
              <div className="gallery-img">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/gallery2.jpg"
                  alt
                />
                <div className="gallery-info">
                  <div className="inner-info text-center">
                    <p>chicken</p>
                    <h6>Delicious Dinner Dish</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 col-12 burger grid-item"
              style={{ position: "absolute", left: "58.3333%", top: 0 }}
            >
              <div className="gallery-img">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/gallery3.jpg"
                  alt
                />
                <div className="gallery-info">
                  <div className="inner-info text-center">
                    <p>chicken</p>
                    <h6>Delicious Dinner Dish</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 col-12 chicken vege grid-item"
              style={{ position: "absolute", left: "0%", top: 300 }}
            >
              <div className="gallery-img">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/gallery4.jpg"
                  alt
                />
                <div className="gallery-info">
                  <div className="inner-info text-center">
                    <p>chicken</p>
                    <h6>Delicious Dinner Dish</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 pizza chicken grid-item"
              style={{ position: "absolute", left: "41.6667%", top: 300 }}
            >
              <div className="gallery-img">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/gallery5.jpg"
                  alt
                />
                <div className="gallery-info">
                  <div className="inner-info text-center">
                    <p>chicken</p>
                    <h6>Delicious Dinner Dish</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 chicken vege grid-item"
              style={{ position: "absolute", left: "75%", top: 300 }}
            >
              <div className="gallery-img">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/gallery6.jpg"
                  alt
                />
                <div className="gallery-info">
                  <div className="inner-info text-center">
                    <p>chicken</p>
                    <h6>Delicious Dinner Dish</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 pizza chicken grid-item"
              style={{ position: "absolute", left: "0%", top: 600 }}
            >
              <div className="gallery-img">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/gallery7.jpg"
                  alt
                />
                <div className="gallery-info">
                  <div className="inner-info text-center">
                    <p>chicken</p>
                    <h6>Delicious Dinner Dish</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 chicken vege grid-item"
              style={{ position: "absolute", left: "33.3333%", top: 600 }}
            >
              <div className="gallery-img">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/gallery8.jpg"
                  alt
                />
                <div className="gallery-info">
                  <div className="inner-info text-center">
                    <p>chicken</p>
                    <h6>Delicious Dinner Dish</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 col-12 pizza chicken grid-item"
              style={{ position: "absolute", left: "58.3333%", top: 600 }}
            >
              <div className="gallery-img">
                <img
                  src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/gallery9.jpg"
                  alt
                />
                <div className="gallery-info">
                  <div className="inner-info text-center">
                    <p>chicken</p>
                    <h6>Delicious Dinner Dish</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="btn position-relative z-idnex-1 margin-top-40">
            load more
          </a>
        </div>
      </div>
    </>
  );
}

export default MainGallery;
