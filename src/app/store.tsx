import { configureStore } from "@reduxjs/toolkit";
import hamburgerStateReducer from '../components/Hamburger/hamburgerSlice'

export const store = configureStore({
  reducer: {
    hamburgerState: hamburgerStateReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
