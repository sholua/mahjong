import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import cardsReducer from "../features/cards/cardsSlice";
import { getCards } from "../services/cardsService";

const cards = getCards(1, 50);

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
  preloadedState: {
    cards: {
      list: cards,
      openPair: [],
    },
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch &
  ThunkDispatch<RootState, void, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
