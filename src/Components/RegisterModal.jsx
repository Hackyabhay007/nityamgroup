import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import emailjs from "emailjs-com"; // Import emailjs

Modal.setAppElement("#root");

const phoneNumberPattern = /^(?:\+91|91)?\d{10}$/;

const RegisterModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    is18Plus: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ phoneNumber: "" });

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setFormData({ name: "", phoneNumber: "", is18Plus: false });
        setErrors({ phoneNumber: "" });
        setSubmitted(false);
        onRequestClose();
      }, 5000);
    }

    return () => clearTimeout(timer);
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

    // Sending email using EmailJS
    emailjs.send('service_mhtzyyj', 'template_6evml38', formData, 'n6e0neKdGFJ-wHxgo')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentClassName="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
    >
      {submitted ? (
        <div className="text-center bg-black/70 p-3 ">
          <p className="text-green-500 text-xl">We will contact you soon!</p>
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-4 border border-gray-800 bg-black/80 p-10 md:p-20 rounded-md shadow-md"
        >
          <div>
            <label className="block text-white mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border outline-none px-2 py-1 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              className="w-full border px-2 outline-none py-1 rounded"
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
              onChange={(e) =>
                setFormData({ ...formData, is18Plus: e.target.checked })
              }
              required
            />
            <label className="text-white">I am 18+ years old</label>
          </div>
          <p className="text-red-500">
            Disclaimer: This is a fictional service.
          </p>
          <button
            type="submit"
            className="text-xl w-full mx-auto  md:mb-0 md:mr-2 border border-white text-white font-bold py-2 px-10 rounded-md shadow-md hover:bg-[#baa051] hover:scale-95 hover:cursor-pointer transition-all duration-1000 ease-in-out shadow-white"
          >
            Register
          </button>
          <button
            type="button"
            onClick={onRequestClose}
            className="text-xl w-full mx-auto  md:mb-0 md:mr-2 border border-white text-white font-bold py-2 px-10 rounded-md shadow-md hover:bg-[#baa051] hover:scale-95 hover:cursor-pointer transition-all duration-1000 ease-in-out shadow-white"
          >
            Close
          </button>
        </form>
      )}
    </Modal>
  );
};

export default RegisterModal;
