import React, { useState, useEffect, useCallback } from "react";
import { fetchAPI, submitAPI } from "../utils/BookingAPI";
import BookingForm from "../components/Booking/BookingForm";
import ConfirmedBooking from "../components/Booking/ConfirmedBooking";

/*
* Form validation, form submission unit test
* LocalStorage write and read unit test
*/

function Booking() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("bookingData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const initializeTimes = useCallback(async (date) => {
    const validDate = new Date(date);
    if (!isNaN(validDate)) {
      try {
        const times = await fetchAPI(validDate);
        setAvailableTimes(times);
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    } else {
      console.error("Invalid date:", date);
    }
  }, []);
  useEffect(() => {
    initializeTimes(new Date());
  }, [initializeTimes]);

  const handleBookingSubmit = async (data) => {
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
            initializeTimes={initializeTimes}
            onSubmit={handleBookingSubmit}
          />
        )}
      </div>
    </article>
  );
}

export default Booking;
