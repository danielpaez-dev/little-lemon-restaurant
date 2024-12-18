import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";

function Reservations({ onSubmit }) {
  const today = new Date().toISOString().split("T")[0];
  const time = new Date();
  time.setHours(time.getHours() + 2);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const defaultTime = `${hours}:${minutes}`;
  const minTime = "13:00";
  const maxTime = "02:00";
  const nameInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    date: today,
    time: defaultTime,
    guests: 1,
    occasion: "",
    additionalNotes: ""
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateTime = time => {
    const [hour, minute] = time.split(":").map(Number);
    const minHour = 13;

    if (hour > minHour || (hour === minHour && minute >= 0)) {
      return time >= minTime && time <= "23:59";
    } else {
      return time >= "00:00" && time <= maxTime;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Please, enter a valid name (minimum 2 characters).";
    }

    if (!formData.date || formData.date < today) {
      newErrors.date = "Please, select a valid date.";
    }

    if (!formData.time || !validateTime(formData.time)) {
      newErrors.time = `The time should be between ${minTime} y ${maxTime}.`;
    }

    if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = "Please, enter a number of guests between 1 and 10.";
    }

    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setValidated(true);
      return;
    }

    setErrors({});
    setValidated(false);

  const filteredFormData = Object.fromEntries(
    Object.entries(formData).filter(([key, value]) => {
      if (typeof value === "string") {
        return value.trim() !== "";
      }
      return value !== "" && value !== null && value !== undefined;
    })
  );

  console.log(filteredFormData);

  if (onSubmit) {
    onSubmit(filteredFormData);
  }
  };

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  let isFormValid = Object.keys(errors).length === 0;
  console.log(Object.keys(errors).length);

  return (
    <>
    <h2>Table Reservation</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              minLength="2"
              value={formData.name}
              onChange={handleChange}
              ref={nameInputRef}
              required
              isInvalid={!!errors.name}
              aria-required="true"
              aria-describedby="nameError"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              min={today}
              onChange={handleChange}
              required
              isInvalid={!!errors.date}
            />
            <Form.Control.Feedback type="invalid">
              {errors.date}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={formData.time}
              min={minTime}
              max={maxTime}
              onChange={handleChange}
              required
              isInvalid={!!errors.time}
            />
            <Form.Control.Feedback type="invalid">
              {errors.time}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicGuests">
            <Form.Label>Guests</Form.Label>
            <Form.Control
              type="number"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
              required
              isInvalid={!!errors.guests}
            />
            <Form.Control.Feedback type="invalid">
              {errors.guests}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicOccasion">
            <Form.Label>Occasion</Form.Label>
            <Form.Select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option disabled value="">
                Select your occasion
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Anniversary">Anniversary</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formAdditionalNotes">
            <Form.Label>Special Requests</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="additionalNotes"
              placeholder="Add any special requests, allergies, or any other comments here..."
              value={formData.additionalNotes}
              onChange={handleChange}
              aria-label="Special requests such as allergies or any other"
            />
          </Form.Group>

          <Button type="submit" className="custom-button" disabled={!isFormValid}>
  Reserve Table
</Button>
        </Form>
    </>
  );
}

export default Reservations;