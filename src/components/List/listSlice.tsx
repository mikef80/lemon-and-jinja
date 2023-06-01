import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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


// ASYNCTHUNKS

export const updateDBItem = createAsyncThunk('list/updateDBItem', async (newDBPayload: {
  itemId: number;
  name: string;
  weight: number;
  favourite: boolean;
}) => {  
  
  try {
      db.items.where("itemId").equals(newDBPayload.itemId).modify(item => {
      item.weight = newDBPayload.weight;
      item.favourite = newDBPayload.favourite;
    });
  } catch (err) {
    console.log(err);
  }
})

// END ASYNC THUNKS

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
      const { itemId, name, weight, favourite } = action.payload;
      
      const index = state.items.findIndex((item) => item.itemId === itemId);

      const newPayload = {
        itemId,
        name,
        weight: Number(weight),
        favourite
      }

      state.items[index] = newPayload;

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
  extraReducers: (builder) => {
    builder
      .addCase(updateDBItem.fulfilled, (state, action) => {
        console.log('success!!');
      })
    .addCase(updateDBItem.pending, (state, action) => {
        console.log('pending...');
    })
    .addCase(updateDBItem.rejected, (state, action) => {
        console.log('rejected :(');
      }) 
  },
});

// Action creators are generated for each case reducer function
export const {
  addToList,
  incrementCount,
  updateItem,
  deleteItem,
} = listStateSlice.actions;

export default listStateSlice.reducer;
