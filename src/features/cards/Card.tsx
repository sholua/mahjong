import React from "react";
import { Card as CardModel } from "../../models/card";
import { useDispatch } from "react-redux";
import { cardOpened } from "./cardsSlice";

interface Props {
  card: CardModel;
  index: number;
}

function Card({ card: { number, visible }, index }: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
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
