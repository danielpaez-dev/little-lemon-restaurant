import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockInitializeTimes = jest.fn();
const mockOnSubmit = jest.fn();

const availableTimes = ["18:00", "19:00", "20:00"];

describe("BookingForm Form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the form correctly", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        initializeTimes={mockInitializeTimes}
        onSubmit={mockOnSubmit}
      />
    );

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/special requests/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /reserve table/i })
    ).toBeDisabled();
  });

  test("validates the form fields", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        initializeTimes={mockInitializeTimes}
        onSubmit={mockOnSubmit}
      />
    );

    fireEvent.blur(screen.getByLabelText(/name/i));
    fireEvent.blur(screen.getByLabelText(/date/i));
    fireEvent.blur(screen.getByLabelText(/time/i));
    fireEvent.blur(screen.getByLabelText(/guests/i));

    fireEvent.click(screen.getByRole("button", { name: /reserve table/i }));

    // Only these errors will appear because there are default values for the rest of inputs
    await waitFor(() => {
      expect(screen.getByText(/Name is required./i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/Time is required./i)).toBeInTheDocument();
    });

    expect(screen.getByRole("button", { name: /reserve table/i })).toBeDisabled();
  });

  test("submits the form with valid data", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        initializeTimes={mockInitializeTimes}
        onSubmit={mockOnSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2024-12-23" } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "19:00" } });
    fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });
    fireEvent.change(screen.getByLabelText(/special requests/i), { target: { value: "None" } });

    expect(screen.getByLabelText(/name/i).value).toBe("John Doe");
    expect(screen.getByLabelText(/date/i).value).toBe("2024-12-23");
    expect(screen.getByLabelText(/time/i).value).toBe("19:00");
    expect(screen.getByLabelText(/guests/i).value).toBe("2");
    expect(screen.getByLabelText(/occasion/i).value).toBe("Birthday");
    expect(screen.getByLabelText(/special requests/i).value).toBe("None");

    fireEvent.click(screen.getByRole("button", { name: /reserve table/i }));

    expect(screen.getByRole("button", { name: /reserve table/i })).toBeEnabled();

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: "John Doe",
        date: "2024-12-23",
        time: "19:00",
        guests: 2,
        occasion: "Birthday",
        additionalNotes: "None"
      });
    });
  });
});
