import React, { useState, useEffect, useCallback } from "react";
import { fetchAPI, submitAPI } from "../utils/BookingAPI";
import BookingForm from "../components/Booking/BookingForm";
import ConfirmedBooking from "../components/Booking/ConfirmedBooking";

function Booking() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("bookingData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const fetchAvailableTimes = useCallback((date) => {
    const validDate = new Date(date);
    if (!isNaN(validDate)) {
      setAvailableTimes(fetchAPI(validDate));
    } else {
      console.error("Invalid date:", date);
    }
  }, []);

  useEffect(() => {
    fetchAvailableTimes(new Date());
  }, [fetchAvailableTimes]);

  const handleBookingSubmit = (data) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value)
    );
    setFormData(cleanedData);

    if (submitAPI(cleanedData)) {
      setFormData(cleanedData);
      localStorage.setItem("bookingData", JSON.stringify(cleanedData));
    } else {
      console.error("Failed to submit booking.");
    }
  };

  return (
    <article id="reservations" className="background-container">
      <div className="container">
        {formData ? (
          <ConfirmedBooking formData={formData} />
        ) : (
          <BookingForm
            availableTimes={availableTimes}
            fetchAvailableTimes={fetchAvailableTimes}
            onSubmit={handleBookingSubmit}
          />
        )}
      </div>
    </article>
  );
}

export default Booking;
