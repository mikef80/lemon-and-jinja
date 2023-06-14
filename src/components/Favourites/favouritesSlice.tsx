import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Favourite, db } from "../../db/db";
import { useSelector } from "react-redux";
import { Item } from "../../db/db";

export interface FavouritesState {
  favDBLoaded: boolean,
  favouriteCount: number;
  favourites: Favourite[];
}

// Update initial state to check for exisiting IDB items and populate from there if they exist.
const initialState: FavouritesState = {
  favDBLoaded: false,
  favouriteCount: 0,
  favourites: [],
};

export const favouritesStateSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (
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
    },
    /* deleteFromFavourites: (
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
      
    }, */
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleFavourite,
  // deleteFromFavourites
} = favouritesStateSlice.actions;

export default favouritesStateSlice.reducer;
