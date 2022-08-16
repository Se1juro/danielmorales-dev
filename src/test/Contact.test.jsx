import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Contact from "../components/Contact";

test("Render content", () => {
  const component = render(<Contact />);
  expect(component.container).toHaveTextContent("Contacto")
});
