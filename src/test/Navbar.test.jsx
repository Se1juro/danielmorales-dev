import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("Render content", () => {
  const component = render(<Navbar />);
  expect(component.container).toHaveTextContent("Daniel Morales")
});

test("Open menu nav", () => {
  const component = render(<Navbar />);
  const button = component.getByTestId("button-nav")
  fireEvent.click(button)

  expect(component.container).toHaveTextContent("Home")

  expect(component.container).toHaveTextContent("Daniel Morales")
});