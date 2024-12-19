import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Importar BrowserRouter
import App from "./App";

test("renders header, main, and footer", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();

  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();

  const footer = screen.getByRole("contentinfo");
  expect(footer).toBeInTheDocument();
});
