import React, { useRef } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Placeholder video imports
import video1 from "../Assests/Video/info.mp4";
import video2 from "../Assests/Video/info1.mp4";


const InfluencerShowcase = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const videos = [video1, video2];

  return (
    <div
      className="md:h-[900px] py-12 lg:py-0 lg:min-h-screen bg-cover flex flex-col gap-10 md:items-end justify-center text-white"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/ddoj0vu3d/image/upload/v1725362584/pexels-pixabay-73873_tiir87.jpg)",
      }}
    >
      <div className="flex lg:max-w-screen-xl flex-col md:flex-row lg:gap-16 items-center justify-center lg:mx-20 px-4">
        <h2
          style={{
            backgroundImage: "linear-gradient(45deg, #baa051, #e3d4a0)", // Gold gradient
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="xl:text-6xl text-4xl md:leading-relaxed lg:tracking-wider font-bold mb-8 text-center md:text-start"
        >
          Our <br /> Influencers
        </h2>
        <div className="relative flex items-center justify-center w-full md:max-w-screen-lg overflow-hidden">
          <button
            onClick={scrollLeft}
            className="absolute left-8 bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-10"
            style={{ transform: "translateX(-50%)" }}
          >
            <FaChevronLeft className="text-white w-8 h-8 md:w-10 md:h-10" />
          </button>
          <div
            ref={carouselRef}
            className="flex space-x-4 md:space-x-10 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full md:px-14 scroll-smooth"
          >
            {/* Video Items */}
            {videos.map((video, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 text-black rounded-2xl shadow-md"
              >
                <video
                  src={video}
                  controls
                  className="rounded-2xl w-[200px] sm:w-[240px] object-contain"
                  alt={`Video ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-8 bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-10"
            style={{ transform: "translateX(50%)" }}
          >
            <FaChevronRight className="text-white w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfluencerShowcase;
