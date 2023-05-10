import React from "react";
import Home from "./Home";
import Header from "../Header/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter, Outlet } from "react-router-dom";

test("should load home screen", async () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
    { wrapper: BrowserRouter }
  );

  // ACT
  
  await screen.findByRole("main");

  // ASSERT
  expect(screen.getByRole("main")).toBeInTheDocument();
});
