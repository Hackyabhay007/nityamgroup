// src/components/RegisterModal.js
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Ensure that your app root element is set

const phoneNumberPattern = /^(?:\+91|91)?\d{10}$/; // Regex for +91 or 91 prefix followed by exactly 10 digits

const RegisterModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({ name: "", phoneNumber: "", is18Plus: false });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ phoneNumber: "" });

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setFormData({ name: "", phoneNumber: "", is18Plus: false }); // Reset form data
        setErrors({ phoneNumber: "" }); // Clear errors
        setSubmitted(false);
        onRequestClose(); // Optionally close the modal after showing success message
      }, 5000);
    }

    return () => clearTimeout(timer); // Clean up the timer on component unmount or when `submitted` changes
  }, [submitted, onRequestClose]);

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(formData.phoneNumber)) {
      setErrors({ phoneNumber: "Phone number must be 10 digits." });
      return;
    }

    setSubmitted(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose} // Handles closing the modal when clicking outside
      className="fixed inset-0 flex items-center justify-center z-40"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentClassName="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
    >
      {submitted ? (
        <div className="text-center">
          <p className="text-green-500 text-xl">We will contact you soon!</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 bg-white p-10 rounded-md shadow-md">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border px-2 py-1 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              className="w-full border px-2 py-1 rounded"
              required
            />
            {errors.phoneNumber && (
              <p className="text-red-500 mt-1">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.is18Plus}
              onChange={(e) => setFormData({ ...formData, is18Plus: e.target.checked })}
              required
            />
            <label>I am 18+ years old</label>
          </div>
          <p className="text-red-500">Disclaimer: This is a fictional service.</p>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Register
          </button>
          <button
            type="button"
            onClick={onRequestClose}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </form>
      )}
    </Modal>
  );
};

export default RegisterModal;
