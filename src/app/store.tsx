import { configureStore } from "@reduxjs/toolkit";
import hamburgerStateReducer from '../components/Hamburger/hamburgerSlice'
import listStateReducer from '../components/List/listSlice'
import favouritesStateReducer from '../components/Favourites/favouritesSlice'

export const store = configureStore({
  reducer: {
    hamburgerState: hamburgerStateReducer,
    listState: listStateReducer,
    favouritesState: favouritesStateReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
