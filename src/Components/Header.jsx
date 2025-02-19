import React, { useState } from "react";
import NewYearBanner from "./NewYearBanner";
import logo from "../Assests/Images/logo.png";
import video1 from "../Assests/Video/Video.mp4";
import video2 from "../Assests/Video/Video2.mp4";
import video3 from "../Assests/Video/MobileVideo.mp4";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleVideoEnd = () => {
    const videoElement = document.getElementById("backgroundVideo");
    videoElement.src = videoElement.src.includes(video1) ? video2 : video1;
    videoElement.play();
  };

  return (
    <section className="relative w-full md:h-[900px] lg:h-screen">
      <video
        id="backgroundVideo"
        className="absolute top-0 hidden md:block left-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        muted
        onEnded={handleVideoEnd}
      />
      <video
        className="absolute top-0 md:hidden left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop // Ensures the video loops continuously
        playsInline // Ensures the video plays inline on mobile devices
        src={video3}
      />

      <div className="md:fixed   absolute  top-32 md:top-0 w-full md:w-fit flex  items-center justify-start md:flex-row md:justify-start md:left-0  md:z-40 p-4">
        <button
          onClick={() => setModalIsOpen(true)}
          className="text-xl w-fit mx-auto  md:mb-0 md:mr-2 border border-white text-white font-bold py-3 px-10 rounded-md shadow-md hover:bg-[#baa051] hover:scale-95 hover:cursor-pointer transition-all duration-1000 ease-in-out shadow-white"
        >
          Register
        </button>

        <a
          href="https://wa.link/mdja31"
          className="text-xl  w-fit mx-auto border border-white text-white font-bold py-3 px-12 rounded-md shadow-md hover:bg-[#baa051] hover:scale-95 hover:cursor-pointer transition-all duration-1000 ease-in-out shadow-white"
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
      <div className=" w-full  relative flex items-center justify-center z-30">
        <img src={logo} alt="Logo" className="h-28 lg:mt-3 object-cover" />
      </div>
      <NewYearBanner />
    </section>
  );
};

export default Header;
