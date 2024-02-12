import React from "react";

const Section5 = () => {

    const cardArray = [
        {
            id:1,
            image: 'images/popular_membership1.png'
        },
        {
            id:2,
            image: 'images/popular_membership2.png'
        },
        {
            id:3,
            image: 'images/popular_membership3.png'
        },
        {
            id:4,
            image: 'images/popular_membership4.png'
        },
    ]
  return (
    <>
      <div className="section5">
        <div className="section5-image">
          <img src="images/amazing_sunglasses.png" className="img-fluid" alt="Amazing_Sunglasses" />
        </div>
        <div className="section3-header mt-5">
          <p className="header-text">Popular Membership</p>
        </div>
        <div className="section5-images row m-0">
            {cardArray.map((elem, key)=> {
                return(
                    <div className="image col-lg-6 col-md-6 col-sm-6 col-12">
                        <img src={elem.image} alt="img"  className="img-fluid"/>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default Section5;
