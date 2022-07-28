import React from "react";
// import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            {/* <Link href={`/product/${heroBanner.product}`}>
              <button type="button">{heroBanner.buttonText}</button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
