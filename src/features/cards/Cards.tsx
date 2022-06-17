import React, { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { allCardsClosed, getAllCards } from "./cardsSlice";

function Cards() {
  const cards = useSelector(getAllCards);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch({ type: allCardsClosed.type });
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mahjong">
      {cards.map((card, index) => {
        return <Card key={index} card={card} index={index} />;
      })}
    </div>
  );
}

export default Cards;
