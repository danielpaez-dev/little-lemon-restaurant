import React, { useState } from "react";
import Reservations from "../components/Reservations/Reservation";
import ValidationScreen from "../components/Reservations/ValidationScreen";

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
          : <Reservations onSubmit={handleFormSubmit} />}
      </div>
    </article>
  );
}

export default ParentComponent;
