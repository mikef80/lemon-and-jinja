import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from './app/store';
import { Provider } from 'react-redux';
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
const List = lazy(() => import("./components/List/List"));
import Favourites from "./components/Favourites/Favourites";
import Loading from "./components/Loading/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/list', element: (
          <Suspense fallback={<Loading />}>
            <List />
          </Suspense>)
      },
      {
        path: '/favourites', element: (
          <Suspense fallback={<Loading />}>
            <Favourites />
          </Suspense>) }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);
