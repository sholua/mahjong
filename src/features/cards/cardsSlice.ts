import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Card } from "../../models/card";
import { getCards } from "../../services/primeNumbersService";

const cards = getCards(1, 50);

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    list: cards,
    openPair: [] as number[],
  },
  reducers: {
    allCardsClosed: (cards, action) => {
      cards.list.forEach((card) => {
        card.visible = false;
      });
    },
    cardOpened: (cards, action) => {
      const index = action.payload;
      cards.list[index].visible = true;
      cards.openPair.push(index);
    },
    cardsClosed: (cards, action) => {
      let { list, openPair } = cards;
      list[openPair[0]].visible = false;
      list[openPair[1]].visible = false;
      openPair.length = 0;
    },
    openPairCleared: (cards, action) => {
      cards.openPair.length = 0;
    },
  },
});

export const { allCardsClosed, cardOpened, cardsClosed, openPairCleared } =
  cardsSlice.actions;

export default cardsSlice.reducer;

export const getAllCards = (state: RootState): Card[] => state.cards.list;
export const getOpenPair = (state: RootState) => state.cards.openPair;
