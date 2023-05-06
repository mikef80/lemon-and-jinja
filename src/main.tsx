import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from './app/store'
import { Provider } from 'react-redux'
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import List from "./components/List/List";
import Favourites from "./components/Favourites/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/list', element: <List />},
      {path: '/favourites', element: <Favourites />}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
