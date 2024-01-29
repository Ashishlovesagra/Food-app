import React from 'react'

function Countdown() {
  return (
    <>
    <section className="countdown-area padding-top-120 padding-bottom-120">
  <div className="container">
    <div className="countdown-shapes">
      <span className="cs-1 item-bounce"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/24.png" alt /></span>
      <span className="cs-3 item-bounce"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/26.png" alt /></span>
      <span className="cs-4 item-animateOne"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/27.png" alt /></span>
      <span className="cs-5"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/18.png" alt /></span>
      <span className="cs-6"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/22.png" alt /></span>
      <span className="cs-7"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/30.png" alt /></span>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-12 col-sm-12 col-12 margin-bottom-20">
        <div className="countdown-left">
          <span className="cs-1"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/25.png" alt /></span>
          <span className="cs-2"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/Leaf.png" alt /></span>
          <span className="cs-3"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/Leaf4.png" alt /></span>
          <span className="cs-4"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/3.png" alt /></span>
          <span className="cs-5"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/tomato.png" alt /></span>
          <span className="cs-6"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/onions.png" alt /></span>
          <span className="cs-7"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/Leaf2.png" alt /></span>
          <span className="cs-8"><img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/Leaf3.png" alt /></span>
          <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/21.png" alt />
        </div>
      </div>
      <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12 col-12">
        <div className="countdown-right">
          <div className="common-title-area padding-bottom-20">
            <h3>coming soon</h3>
            <h2>Spicy Chicken Pizza <span>Food </span></h2>
            <p>feel hunger! order your favourite food.</p>
          </div>
          <div className="count-box countdown">
            <div>
              <span className="days">345</span>
              <p className="days_ref">days</p>
            </div>
            <span className="seperator">:</span>
            <div>
              <span className="hours">04</span>
              <p className="hours_ref">hours</p>
            </div>
            <span className="seperator">:</span>
            <div>
              <span className="minutes">51</span>
              <p className="minutes_ref">minutes</p>
            </div>
            <span className="seperator">:</span>
            <div>
              <span className="seconds">48</span>
              <p className="seconds_ref">seconds</p>
            </div>
          </div>
          <a href="shopping-cart.html" className="btn">order now</a>
        </div>
      </div>
    </div>
  </div>
      </section>
    </>
  )
}

export default Countdown