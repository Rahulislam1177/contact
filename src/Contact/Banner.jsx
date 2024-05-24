import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner ">
      <div className="container mx-auto px-3">
        <div className="clingg justify-end">
          <img
            className=" pt-8 w-24 ml-auto mr-36"
            src="https://html.themexriver.com/bixol/bixol/assets/images/home1/slider-object.png"
            alt=""
          />
        </div>

        <div className="center">
          <h1 className="text-white textcon text-center text-8xl font-bold">
            contact
          </h1>
          <h5 className="text-white text-center pb-24 pt-2 text-xl text-semibold">
            Home Contact
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
