/* import { configureStore } from "@reduxjs/toolkit";
import hamburgerStateReducer from '../components/Hamburger/hamburgerSlice'
import listStateReducer from '../components/List/listSlice'

export const store = configureStore({
  reducer: {
    hamburgerState: hamburgerStateReducer,
    listState: listStateReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
 */

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: (by: number) => void
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: 'bear-storage',
      }
    )
  )
)