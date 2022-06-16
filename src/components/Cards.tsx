import React from "react";
import shuffle from "lodash/shuffle";
import Card from "./Card";
import { getPrimeNumbersFromRange } from "../services/primeNumbersService";

function Cards() {
  const primes = getPrimeNumbersFromRange(1, 50);
  const cards = shuffle([...primes, ...primes]) as number[];

  return (
    <div className="mahjong">
      {cards.map((element, index) => {
        return <Card key={index} number={element} />;
      })}
    </div>
  );
}

export default Cards;
