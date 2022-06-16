import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getAllCards } from "./cardsSlice";

function Cards() {
  const cards = useSelector(getAllCards);

  return (
    <div className="mahjong">
      {cards.map((element, index) => {
        return <Card key={index} number={element.number} />;
      })}
    </div>
  );
}

export default Cards;
