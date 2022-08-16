import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Skills from "../components/Skills";

test("Render content", () => {
  const component = render(<Skills />);
  expect(component.container).toHaveTextContent("Habilidades")
});
