import React, { useState } from "react";
import { IoTrophyOutline } from "react-icons/io5";
import { RiTimerLine } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import Card_Section2 from "./Card_Section2";

const Section2 = () => {
  const [trophy, setTrophy] = useState(false);
  const [timer, setTimer] = useState(false);
  const [fire, setFire] = useState(false);

  const changeTrophy = () => {
    setTrophy(true);
    setTimer(false);
    setFire(false);
  };
  const changeTimer = () => {
    setTrophy(false);
    setTimer(true);
    setFire(false);
  };
  const changeFire = () => {
    setTrophy(false);
    setTimer(false);
    setFire(true);
  };

  const cardArray = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      <div className="section2">
        <div className="section2-header">
          <button
            className={
              trophy
                ? "section2-header-button active"
                : "section2-header-button"
            }
            onClick={changeTrophy}
          >
            <IoTrophyOutline /> <span>Popular Coupons</span>
          </button>
          <button
            className={
              timer ? "section2-header-button active" : "section2-header-button"
            }
            onClick={changeTimer}
          >
            <RiTimerLine /> <span>Ending Soon</span>
          </button>
          <button
            className={
              fire ? "section2-header-button active" : "section2-header-button"
            }
            onClick={changeFire}
          >
            <AiOutlineFire /> <span>Latest Coupons</span>
          </button>
        </div>
        <div className="card-section row m-0">
          {cardArray.map((index) => (
            <Card_Section2
              key={index}
              text1="Upto 60% off on Applicances"
              img="images/amazon.png"
              text2="Upto 60% off on summer Appliances"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Section2;
