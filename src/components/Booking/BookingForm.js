import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

function Reservations({ onSubmit }) {
  const today = new Date().toISOString().split("T")[0];
  const time = new Date();
  time.setHours(time.getHours() + 2);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const defaultTime = `${hours}:${minutes}`;
  const minTime = "13:00";
  const maxTime = "02:00";

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters long.")
      .max(100, "Is it a real name? Is too long.")
      .required("Name is required."),
    date: Yup.date()
      .min(today, "Date cannot be in the past.")
      .required("Date is required."),
    time: Yup.string()
      .test(
        "valid-time",
        `Time must be between ${minTime} and ${maxTime}.`,
        (value) => {
          if (!value) return false;
          const [hour, minute] = value.split(":").map(Number);
          const minHour = 13;

          if (hour > minHour || (hour === minHour && minute >= 0)) {
            return value >= minTime && value <= "23:59";
          } else {
            return value >= "00:00" && value <= maxTime;
          }
        }
      )
      .required("Time is required."),
    guests: Yup.number()
      .min(1, "Guests must be at least 1.")
      .max(10, "Guests cannot exceed 10.")
      .required("Number of guests is required."),
    occasion: Yup.string().nullable(),
    additionalNotes: Yup.string().nullable(),
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      name: "",
      date: today,
      time: defaultTime,
      guests: 1,
      occasion: "",
      additionalNotes: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      if (onSubmit) {
        onSubmit(values);
      }
    },
  });

  return (
    <>
      <h2>Table Reservation</h2>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.name && !!formik.errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min={today}
            isInvalid={formik.touched.date && !!formik.errors.date}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.date}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.time && !!formik.errors.time}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.time}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicGuests">
          <Form.Label>Guests</Form.Label>
          <Form.Control
            type="number"
            name="guests"
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.guests && !!formik.errors.guests}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.guests}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicOccasion">
          <Form.Label>Occasion</Form.Label>
          <Form.Select
            name="occasion"
            value={formik.values.occasion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            value={formik.values.additionalNotes}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>

        <Button type="submit" className="custom-button">
          Reserve Table
        </Button>
      </Form>
    </>
  );
}

export default Reservations;
