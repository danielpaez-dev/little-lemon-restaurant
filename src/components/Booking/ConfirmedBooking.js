import React from "react";

function ConfirmedBooking({ formData }) {
  return (
    <div id="confirmation-screen">
      <h2>Reservation Confirmed!</h2>
      {formData ? (
        Object.entries(formData).map(([key, value]) => (
          <p key={key}>
            <span>{`${key}: `}</span>
            {value}
          </p>
        ))
      ) : (
        <p>No reservation data available.</p>
      )}
    </div>
  );
}

export default ConfirmedBooking;
