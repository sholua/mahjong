import React, { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import {
  allCardsClosed,
  cardsClosed,
  getAllCards,
  getOpenPair,
  openPairCleared,
} from "./cardsSlice";

function Cards() {
  const cards = useSelector(getAllCards);
  const openPair = useSelector(getOpenPair);
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

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (openPair.length === 2) {
      if (cards[openPair[0]].number !== cards[openPair[1]].number) {
        timer = setTimeout(() => {
          dispatch({ type: cardsClosed.type });
        }, 500);
      } else {
        dispatch({ type: openPairCleared.type });
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [cards, dispatch, openPair]);

  return (
    <div className="mahjong">
      {cards.map((card, index) => {
        return <Card key={index} card={card} index={index} />;
      })}
    </div>
  );
}

export default Cards;
