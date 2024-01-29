import React from "react";

function FoodsCounter() {
  return (
    <>
      <div className="foods-counter">
        <div className="container">
          <div className="row foods-wrapper">
            <div className="col-lg-3 col-md-6">
              <div className="single-food text-center">
                <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/3.png" alt />
                <span className="items counter">2000</span>
                <p>food item</p>
                <span className="g-s-4">
                  <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/10.png" alt />
                </span>
                <span className="g-s-5">
                  <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/14.png" alt />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-food orange text-center">
                <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/f-2.png" alt />
                <span className="items counter">500</span>
                <p> burger food item</p>
                <span className="g-s-4">
                  <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/10.png" alt />
                </span>
                <span className="g-s-5">
                  <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/14.png" alt />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-food text-center">
                <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/f-3.png" alt />
                <span className="items counter">1000</span>
                <p> soft drinks item</p>
                <span className="g-s-4">
                  <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/10.png" alt />
                </span>
                <span className="g-s-5">
                  <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/14.png" alt />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-food orange text-center">
                <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/f-4.png" alt />
                <span className="items counter">600</span>
                <p>Delicious Fast Food</p>
                <span className="g-s-4">
                  <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/10.png" alt />
                </span>
                <span className="g-s-5">
                  <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/14.png" alt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodsCounter;
