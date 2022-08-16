import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

test("Render content", () => {
  const component = render(<Footer />);
  expect(component.container).toHaveTextContent("Daniel Morales")
});
