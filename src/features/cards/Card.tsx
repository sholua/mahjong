import React from "react";
import { Card as CardModel } from "../../models/card";
import { useDispatch, useSelector } from "react-redux";
import { cardOpened, getOpenPair } from "./cardsSlice";

interface Props {
  card: CardModel;
  index: number;
}

function Card({ card: { number, visible }, index }: Props) {
  const dispatch = useDispatch();
  const openPair = useSelector(getOpenPair);

  const handleClick = () => {
    if (openPair.length === 1 && openPair[0] === index) return false;

    dispatch({ type: cardOpened.type, payload: index });
  };

  return (
    <div
      onClick={handleClick}
      className={`card card--${visible ? "visible" : "hidden"}`}
    >
      {number}
    </div>
  );
}

export default Card;
