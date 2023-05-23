import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../db/db";
import { useAppDispatch } from "../../app/hooks";

// Counter State set up
export interface CounterState {
  itemCount: number;
  items: {
    itemId: number;
    name: string;
    weight: number;
    favourite: boolean;
  }[];
}

// Initial Counter State
const initialState: CounterState = {
  itemCount: 0,
  items: [],
};

// Delete from DB Thunk
const deleteFromDB = createAsyncThunk(
  "list/deleteFromIndexedDB",
  async (itemId: number, thunkAPI) => {
    const dispatch = useAppDispatch();
    dispatch(deleteItem({ itemId: itemId }));
    const response = await db.items.where("itemId").equals(itemId).toArray();
    console.log(response);
  }
);

// Create State Slice
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

      const index = state.items.findIndex(
        (item) => Number(itemId) === item.itemId
      );

      state.items[index] = { ...state.items[index], weight: Number(value) };
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
      // Delete from State
      const deleteId = action.payload.itemId;
      state.items = state.items.filter((item) => item.itemId !== deleteId);

      // Delete from DB
      // const dbItem = db.items.where("itemId").equals(deleteId);
      // console.log('dbItem: ' + dbItem);
      // console.log('dbItem: ' + dbItem.itemId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteFromDB.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
    });
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
