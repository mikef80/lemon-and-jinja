import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  open: boolean
}

const initialState: CounterState = {
  open: false,
}

export const hamburgerStateSlice = createSlice({
  name: 'hamburger',
  initialState,
    reducers: {
        toggle: (state) => {
            state.open = !state.open
      },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = hamburgerStateSlice.actions

export default hamburgerStateSlice.reducer