import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import About from "../components/About";

test("Render content", () => {
  const component = render(<About />);
  expect(component.container).toHaveTextContent("Acerca de mi")
});
