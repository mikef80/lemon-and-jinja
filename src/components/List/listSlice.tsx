import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { db } from "../../db/db";

export interface CounterState {
  itemCount: number;
  items: {
    id: number;
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
        id: number;
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
      action: PayloadAction<{ id: number; value: number; }>
    ) => {
      const { id, value } = action.payload;

      const index = state.items.findIndex((item) => Number(id) === item.id);

      state.items[index] = { ...state.items[index], weight: value };
    },
    updateItemFavourite: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        weight: number;
        favourite: boolean;
      }>
    ) => {
      const { id } = action.payload;

      const index = state.items.findIndex((item) => item.id === id);

      const item = state.items[index];

      const newFavourite = item.favourite;

      state.items[index] = { ...item, favourite: !newFavourite };
    },
    deleteItem: (state, action: PayloadAction<{
      id: number;
    }>) => {
      console.log(action.payload);
      
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToList, incrementCount, updateItemFavourite, updateItem, deleteItem } =
  listStateSlice.actions;

export default listStateSlice.reducer;
