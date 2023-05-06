import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import { store } from "../../app/store";

test("should load header", async () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  // ACT
  await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Lemon + Jinja");
});

test("Hamburger menu should exist in header", async () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  // ACT
  await screen.findByLabelText("menu");

  // ASSERT
  expect(screen.getByLabelText("menu")).toBeInTheDocument();
});
