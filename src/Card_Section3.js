import React from "react";

const Card_Section3 = ({text1, img, text2}) => {
  return (
    <>
      <div class="card col-lg-3 col-md-4 col-sm 6 col-12">
        <img src={img} alt="amazon" />
        <p className="text2">{text2}</p>
        <p className="text1">{text1}</p>
        <button className="header-button">GRAB NOW</button>
      </div>
    </>
  );
};

export default Card_Section3;
