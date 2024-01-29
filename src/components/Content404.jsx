import React from "react";

function Content404() {
  return (
    <>
      <div className="error-area padding-top-120 padding-bottom-120">
        <div className="error-shapes">
          <span className="e-s-1">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/16.png" alt />
          </span>
          <span className="e-s-2">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/32.png" alt />
          </span>
        </div>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="error-wrapper text-center">
            <img className="item-bounce" src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/404.png" alt />
            <a href="index.html" className="btn margin-top-40">
              go to home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content404;
