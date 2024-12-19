import React, { useState } from "react";
import Booking from "../components/Booking/BookingForm";
import ValidationScreen from "../components/Booking/ValidationScreen";

function ParentComponent() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = data => {
    setIsFormValid(true);
    setFormData(data);
  };

  return (
    <article id="reservations" className="background-container">
      <div className="container">
        {isFormValid
          ? <ValidationScreen formData={formData} />
          : <Booking onSubmit={handleFormSubmit} />}
      </div>
    </article>
  );
}

export default ParentComponent;
