// src/ContactForm.js
import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Initialize with default empty values
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Construct the Google Form URL with your form ID
      const googleFormId =
        "1FAIpQLSeKgDCTdQnRK2D8OWAXZuXNrpal107_fz_0NLAJUalBiLzu-Q"; // Replace with your Google Form ID
      const googleFormUrl = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse`;

      // Create a FormData object to send the form data to Google Forms
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("entry.243459342", formData.name);
      formDataToSubmit.append("entry.1112010551", formData.email);
      formDataToSubmit.append("entry.1705754108", formData.message);

      try {
        // Send a POST request to Google Forms
        await fetch(googleFormUrl, {
          method: "POST",
          body: formDataToSubmit
        });

        setSubmitted(true);

        // Clear form errors
        // setErrors({});

        // Set confirmation message
        setConfirmationMessage("Thank you for contacting us! We'll get back to you soon.");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container">
      {submitted ? (
        <div className="submitted-message">{confirmationMessage}</div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
