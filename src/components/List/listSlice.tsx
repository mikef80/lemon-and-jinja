import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { db } from "../../db/db";

export interface CounterState {
  itemCount: number;
  items: {
    id: number;
    itemName: string;
    itemWeight: number;
    itemFavourite: boolean;
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
        id: number;
        itemName: string;
        itemWeight: number;
        itemFavourite: boolean;
      }>
    ) => {
      state.items.push(action.payload);

      try {
        const { itemName, itemWeight, itemFavourite } = action.payload;
        const result = db.items.add({
          name: itemName,
          weight: itemWeight,
        });

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
      action: PayloadAction<{ id: number; value: number }>
    ) => {
      const { id, value } = action.payload;
      console.log(typeof id);

      const index = state.items.findIndex((item) => Number(id) === item.id);
      console.log(index);

      state.items[index] = { ...state.items[index], itemWeight: value };
    },
    updateItemFavourite: (
      state,
      action: PayloadAction<{
        id: number;
        itemName: string;
        itemWeight: number;
        itemFavourite: boolean;
      }>
    ) => {
      const { id } = action.payload;

      const index = state.items.findIndex((item) => item.id === id);

      const item = state.items[index];

      const favourite = item.itemFavourite;

      state.items[index] = { ...item, itemFavourite: !favourite };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToList, incrementCount, updateItemFavourite, updateItem } =
  listStateSlice.actions;

export default listStateSlice.reducer;
