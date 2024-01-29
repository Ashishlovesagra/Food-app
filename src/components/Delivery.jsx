import React from 'react'

function Delivery() {
  return (
    <>
    <section className="delivery-area padding-top-115 padding-bottom-90">
        <div className="del-shapes">
          <span className="ds-1 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/35.png" alt />
          </span>
          <span className="ds-2">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/34.png" alt />
          </span>
          <span className="ds-3 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/17.png" alt />
          </span>
          <span className="ds-4 item-animateOne">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/6.png" alt />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6
        align-self-lg-center
        col-md-12
        margin-bottom-20
        wow
        fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <div className="delivery-left">
                <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/bg/delivery-img.png" alt />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="delivery-right">
                <div className="common-title-area padding-bottom-40">
                  <h3>delivery</h3>
                  <h2>
                    A Moments of Delivered{" "}
                    <span> On Right Time &amp; Place </span>
                  </h2>
                  <p>
                    Food Khan is a restaurant, bar and coffee roastery located
                    on a busy corner site in Farringdon's Exmouth Market. With
                    glazed frontage on two sides of the building, overlooking
                    the market and a bustling London inteon.
                  </p>
                  <div className="order-box d-flex align-items-end">
                    <span className="order-img">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/icons/1.png" alt />
                    </span>
                    <div className="order-content">
                      <p>delivery order num.</p>
                      <span>+91-9911568866</span>
                    </div>
                    <a href="shopping-cart.html" className="btn">
                      order now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Delivery;