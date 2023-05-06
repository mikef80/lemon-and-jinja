import React from "react";
import HamburgerMenu from "./Hamburger";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { store } from "../../app/store";
import Settings from "../Settings/Settings";

test("should toggle menu on click", async () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <HamburgerMenu />
      <Settings />
    </Provider>
  );

  // ACT
  await screen.findByRole("button");
  await userEvent.click(await screen.findByRole("button"));
  await screen.findByLabelText('settings');

  // ASSERT
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByLabelText('settings')).toBeVisible();
});