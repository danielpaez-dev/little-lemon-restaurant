import React from "react";

function ValidationScreen({ formData }) {
  return (
    <div id="confirmation-screen">
      <h2>Reservation Confirmed!</h2>
      {Object.entries(formData).map(([key, value]) => {
        return (
          <p key={key}>
            <span>
              {`${key}: `}
            </span>
            { value}
          </p>
        );
      })}
    </div>
  );
}

export default ValidationScreen;
