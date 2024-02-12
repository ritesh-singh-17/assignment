import React from "react";
import SmallCard_Section4 from "./SmallCard_Section4";
import Card_Section3 from "./Card_Section3";

const Section4 = () => {
  const smallCardArray = [
    {
      id: 1,
      image: "images/fashion.png",
      title: "Fashion",
    },
    {
      id: 2,
      image: "images/food.png",
      title: "food",
    },
    {
      id: 3,
      image: "images/beauty.png",
      title: "Beauty",
    },
    {
      id: 4,
      image: "images/toys.png",
      title: "Toys",
    },
    {
      id: 5,
      image: "images/hosting.png",
      title: "Cloud",
    },
    {
      id: 6,
      image: "images/gaming.png",
      title: "Gaming",
    },
    {
      id: 7,
      image: "images/mobile.png",
      title: "Phones",
    },
    {
      id: 8,
      image: "images/travel.png",
      title: "Travel",
    },
    {
      id: 9,
      image: "images/movies.png",
      title: "Movies",
    },
  ];
  const cardArray = Array.from({ length: 4 }, (_, i) => i);
  return (
    <>
      <div className="section4 pt-5">
        <div className="section4-inside-div">
          <div className="section3-header">
            <p className="header-text">Coupan By Categories</p>
          </div>
          <div className="small-card-section row m-0">
            {smallCardArray.map((elem, key) => (
              <SmallCard_Section4
                key={key}
                image={elem.image}
                title={elem.title}
              />
            ))}
          </div>
          <div className="card-section row m-0">
            {cardArray.map((index) => (
              <Card_Section3
                key={index}
                text1="Flat 30% Off"
                img="images/amazon.png"
                text2="Amazon"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
