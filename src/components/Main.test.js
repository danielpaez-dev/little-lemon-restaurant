import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main"; // Asegúrate de que la ruta sea correcta

describe("Main component", () => {
  test("should render Home route correctly", () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    // Verifica que la ruta inicial ("/") renderiza el componente Home
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test("should render About route correctly", () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    // Navega a la ruta /about
    window.history.pushState({}, "About", "/about");

    // Verifica que la ruta "/about" renderiza el componente About
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  test("should render Reservations route correctly", () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    // Navega a la ruta /reservations
    window.history.pushState({}, "Reservations", "/reservations");

    // Verifica que la ruta "/reservations" renderiza el componente Reservations
    expect(screen.getByText(/reservations/i)).toBeInTheDocument();
  });

  test("should render NotFound route for unknown path", () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    // Navega a una ruta desconocida
    window.history.pushState({}, "NotFound", "/unknown-path");

    // Verifica que la ruta desconocida renderiza el componente NotFound
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
