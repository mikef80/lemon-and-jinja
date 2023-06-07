import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../db/db";
import Dexie from "dexie";
import { log } from "console";
import { useSelector } from "react-redux";

export interface CounterState {
  dbLoaded: boolean,
  itemCount: number;
  items: {
    itemId: number;
    name: string;
    weight?: number;
    favourite: boolean;
  }[];
}

// ASYNC THUNKS

// Update DB Item
export const updateDBItem = createAsyncThunk('list/updateDBItem', async (newDBPayload: {
  itemId: number;
  name: string;
  weight?: number;
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

// Set redux state items from DB Items 
export const setDBItems = createAsyncThunk('list/setDBItems', async (arg, { getState }) => {  
  const dbExists = await Dexie.exists('myDatabase');

  const items: {
    itemId: number;
    name: string;
    weight?: number;
    favourite: boolean;
  }[] = [];

  try {
    if (dbExists) {
      console.log('db exists');
      await db.items.each(item => {
        items.push(item);
      });
      console.log('items written');
    } else {
      console.log("db doesn't exist - will be created when first item entered");
    }
  } catch (error) {
    console.log(error);    
  }
  return items;
})

// END ASYNC THUNKS


// Update initial state to check for exisiting IDB items and populate from there if they exist.
const initialState: CounterState = {
  dbLoaded: false,
  itemCount: 0,
  items: [],
};

/* const checkIfExists = async () => {
  const exists = await Dexie.exists('myDatabase');
  console.log(exists);
};

checkIfExists(); */

export const listStateSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (
      state,
      action: PayloadAction<{
        itemId: number;
        name: string;
        weight?: number;
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
      // Update DB Item
      .addCase(updateDBItem.fulfilled, (state, action) => {
        console.log('success!!');
      })
      .addCase(updateDBItem.pending, (state, action) => {
        console.log('pending...');
      })
      .addCase(updateDBItem.rejected, (state, action) => {
        console.log('rejected :(');
      }) 
      // DB Loading
      .addCase(setDBItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.dbLoaded = true;
        state.itemCount = state.items.length; 
        console.log('***setDBItems success!!***');
      })
      .addCase(setDBItems.pending, (state, action) => {
        console.log('***setDBItems pending...***');
      })
      .addCase(setDBItems.rejected, (state, action) => {
        console.log('***setDBItems rejected :(***');
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
