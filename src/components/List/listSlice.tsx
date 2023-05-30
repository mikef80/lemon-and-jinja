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
      action: PayloadAction<{
        itemId: number;
        name: string;
        weight: number;
        favourite: boolean;
      }>
    ) => {
      const { itemId, weight } = action.payload;

      const index = state.items.findIndex((item) => item.itemId === itemId);

      state.items[index].weight = weight;

      db.items.where("itemId").equals(itemId).modify(item => item.weight = weight);
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
      const { itemId, name, weight, favourite } = action.payload;

      const index = state.items.findIndex((item) => item.itemId === itemId);

      state.items[index].favourite = !favourite;

      console.log(!favourite);      

      db.items.where("itemId").equals(itemId).modify(item => item.favourite = !favourite);
    },
    deleteItem: (
      state,
      action: PayloadAction<{
        itemId: number;
      }>
    ) => {
      // Delete from State
      const deleteId = action.payload.itemId;
      state.items = state.items.filter((item) => item.itemId !== deleteId);

      // Delete from DB
      try {
        const deleted = db.items.where('itemId').equals(deleteId).delete();
        console.log(deleted);        
      } catch (error) {
        console.error(error);
        
      }
      
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
