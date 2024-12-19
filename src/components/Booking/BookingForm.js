import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

function Reservations({ availableTimes, fetchAvailableTimes, onSubmit }) {
  const today = new Date().toISOString().split("T")[0];

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters long.")
      .max(100, "Is it a real name? Is too long.")
      .required("Name is required."),
    date: Yup.date()
      .min(today, "Date cannot be in the past.")
      .required("Date is required."),
    time: Yup.string()
      .required("Time is required."),
    guests: Yup.number()
      .min(1, "Guests must be at least 1.")
      .max(10, "Guests cannot exceed 10.")
      .required("Number of guests is required."),
    occasion: Yup.string().nullable(),
    additionalNotes: Yup.string().nullable(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      date: today,
      time: "",
      guests: 1,
      occasion: "",
      additionalNotes: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (onSubmit) {
        onSubmit(values);
      }
    },
  });

  useEffect(() => {
    if (formik.values.date) {
      fetchAvailableTimes(formik.values.date);
    }
  }, [formik.values.date, fetchAvailableTimes]);

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
            minLength={2}
            maxLength={100}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.name && !!formik.errors.name}
            autoFocus
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
          <Form.Select
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.time && !!formik.errors.time}
          >
            <option disabled value="">
              Select a time
            </option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </Form.Select>
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
            min={1}
            max={10}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.guests && !!formik.errors.guests}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.guests}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicOccasion">
          <Form.Label>Occasion (optional)</Form.Label>
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
          <Form.Label>Special Requests (optional)</Form.Label>
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

        <Button type="submit" className="custom-button" disabled={!(formik.isValid && formik.dirty)}>
          Reserve Table
        </Button>
      </Form>
    </>
  );
}

export default Reservations;
