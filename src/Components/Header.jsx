import React, { useState } from "react";
import NewYearBanner from "./NewYearBanner";
import logo from "../Assests/Images/logo.png";
import video1 from "../Assests/Video/Video.mp4";
import video2 from "../Assests/Video/Video2.mp4";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleVideoEnd = () => {
    const videoElement = document.getElementById("backgroundVideo");
    videoElement.src = videoElement.src.includes(video1) ? video2 : video1;
    videoElement.play();
  };

  return (
    <section className="relative w-full h-screen">
      <video
        id="backgroundVideo"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        muted
        onEnded={handleVideoEnd}
      />
      <div className="fixed top-0 left-0 z-30 p-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setModalIsOpen(true)}
        >
          Register
        </button>
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
      <RegisterModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
      <div className="fixed top-0 w-full flex items-center justify-center z-20">
        <img src={logo} alt="Logo" className="h-28 lg:mt-3 object-cover" />
      </div>
      <NewYearBanner />
    </section>
  );
};

export default Header;
