import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Card } from "../../models/card";
import { getCards } from "../../services/primeNumbersService";

const initialState = getCards(1, 50);

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    cardOpend: (cards, action) => {
      const index = action.payload.index;
      cards[index].visible = true;
    },
  },
});

export const { cardOpend } = cardsSlice.actions;

export default cardsSlice.reducer;

export const getAllCards = (state: RootState): Card[] => state.cards;
