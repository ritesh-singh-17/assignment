import React from 'react'
import Card_Section3 from "./Card_Section3";

const Section3 = () => {

  const cardArray = Array.from({ length: 4 }, (_, i) => i);

  return (
    <>
      <div className="section3 mt-5">
        <div className="section3-header">
          <p className='header-text'>Deal Of The Day</p>
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
    </>
  )
}

export default Section3
