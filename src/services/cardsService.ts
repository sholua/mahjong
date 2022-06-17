import shuffle from "lodash/shuffle";
import { Card } from "../models/card";

const isPrime = (num: number): boolean => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getPrimeNumbersFromRange = (a: number, b: number): number[] => {
  const result = [];
  for (let i = a; i < b; i++) {
    const item = isPrime(i);
    if (item) result.push(i);
  }
  return result;
};

export const getCards = (a: number, b: number) => {
  const primes = getPrimeNumbersFromRange(a, b);
  const shapedPrimes = primes.map((elem) => ({
    number: elem,
    visible: true,
  }));
  const cards = shuffle([...shapedPrimes, ...shapedPrimes]) as Card[];
  return cards;
};
