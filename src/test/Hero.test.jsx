import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Hero from "../components/Hero";

test("Render content", () => {
  const component = render(<Hero />);
  expect(component.container).toHaveTextContent("Desarrollador Fullstack")
});
