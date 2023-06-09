import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../db/db";
import { useSelector } from "react-redux";

export interface CounterState {
  favourites: {
    itemId: number;
    name: string;
    weight: number;
    favourite: boolean;
  }[];
}

// Update initial state to check for exisiting IDB items and populate from there if they exist.
const initialState: CounterState = {
  favourites: [],
};

export const favouritesStateSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (
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
      } catch (error) {
        console.error(error);
      }
    },
    deleteFromFavourites: (
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
  addToFavourites,
  deleteFromFavourites
} = favouritesStateSlice.actions;

export default favouritesStateSlice.reducer;
