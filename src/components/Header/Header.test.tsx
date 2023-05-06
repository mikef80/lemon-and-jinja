import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";

test("should load header", async () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
    { wrapper: BrowserRouter }
  );

  // ACT
  await screen.findByRole("mainHeading");

  // ASSERT
  expect(screen.getByRole("mainHeading")).toHaveTextContent("Lemon + Jinja");
});

test("Hamburger menu should exist in header", async () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
    { wrapper: BrowserRouter }
  );

  // ACT
  await screen.findByLabelText("menu");

  // ASSERT
  expect(screen.getByLabelText("menu")).toBeInTheDocument();
});
