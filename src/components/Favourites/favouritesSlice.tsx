import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../db/db";
import { useSelector } from "react-redux";
import { Item } from "../../db/db";

export interface FavouritesState {
  favourites: {
    itemId: number;
    name: string;
    // weight: number;
    favourite: boolean;
  }[];
}

// Update initial state to check for exisiting IDB items and populate from there if they exist.
const initialState: FavouritesState = {
  favourites: [],
};

export const favouritesStateSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    /* addToActiveList: (
      state,
      action: PayloadAction<Item>
    ) => {
      const { payload } = action;
      console.log('adding to list?');
      
      state.favourites.push(payload);

      try {
        const result = db.items.add(payload);
      } catch (error) {
        console.error(error);
      }
    }, */
    deleteFromFavourites: (
      state,
      action: PayloadAction<{
        itemId: number;
      }>
    ) => {
      // Delete from State
      const deleteId = action.payload.itemId;
      state.favourites = state.favourites.filter((favourite) => favourite.itemId !== deleteId);

      // Delete from DB
      try {
        const deleted = db.favourites.where('itemId').equals(deleteId).delete();
        console.log(deleted);        
      } catch (error) {
        console.error(error);
        
      }
      
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  // addToActiveList,
  deleteFromFavourites
} = favouritesStateSlice.actions;

export default favouritesStateSlice.reducer;
