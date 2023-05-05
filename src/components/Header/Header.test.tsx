import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("should load header", async () => {
  // ARRANGE
  render(<Header />);

  // ACT
  await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Lemon + Jinja");
});

test("menu should exist in header", async () => {
  // ARRANGE
  render(<Header />);

  // ACT
  await screen.findByRole("menu");

  // ASSERT
  expect(screen.getByRole("menu")).toBeInTheDocument();
});