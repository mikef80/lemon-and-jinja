import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { db } from "../../db/db";

export interface CounterState {
  itemCount: number;
  items: {
    itemId: number;
    name: string;
    weight: number;
    favourite: boolean;
  }[];
}

const initialState: CounterState = {
  itemCount: 0,
  items: [],
};

export const listStateSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (
      state,
      action: PayloadAction<{
        itemId: number;
        name: string;
        weight: number;
        favourite: boolean;
      }>
    ) => {
      const { payload } = action;

      state.items.push(payload);

      try {
        const result = db.items.add(payload);

        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
    incrementCount: (state) => {
      state.itemCount++;
    },
    updateItem: (
      state,
      action: PayloadAction<{ itemId: number; value: number }>
    ) => {
      const { itemId, value } = action.payload;

      console.log(action.payload);
      console.log(typeof itemId);

      const index = state.items.findIndex(
        (item) => Number(itemId) === item.itemId
      );

      // state.items[index] = { ...state.items[index], weight: value };
    },
    updateItemFavourite: (
      state,
      action: PayloadAction<{
        itemId: number;
        name: string;
        weight: number;
        favourite: boolean;
      }>
    ) => {
      console.log(action.payload);

      const { itemId } = action.payload;

      const index = state.items.findIndex((item) => item.itemId === itemId);

      const item = state.items[index];

      const newFavourite = item.favourite;

      state.items[index] = { ...item, favourite: !newFavourite };
    },
    deleteItem: (
      state,
      action: PayloadAction<{
        itemId: number;
      }>
    ) => {
      // console.log(action.payload.id);
      console.log("-----------------------------------");

      state.items.forEach((item) => {
        console.log(item.itemId);
        console.log(action.payload.itemId);
      });

      state.items = state.items.filter(
        (item) => item.itemId !== action.payload.itemId
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToList,
  incrementCount,
  updateItemFavourite,
  updateItem,
  deleteItem,
} = listStateSlice.actions;

export default listStateSlice.reducer;
