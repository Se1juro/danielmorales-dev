import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Portfolio from "../components/Portfolio";

test("Render content", () => {
  const component = render(<Portfolio />);
  expect(component.container).toHaveTextContent("Portafolio")
});
