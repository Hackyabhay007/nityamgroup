import React from "react";

const NewYearBanner = () => {
  return (
    <div className="relative h-screen flex  flex-col justify-center items-center text-center">
      {/* Background Video */}
     
      <video
        className="absolute top-0   left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/15448993/15448993-sd_640_360_30fps.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="relative   z-10  rounded-lg">
        <img
          src="https://i.ibb.co/6b4z7fL/happy-new-year-chocolate-style-text-2024-png-11667797205vor7pgmyya-removebg-preview.png"
          alt="Happy New Year 2024"
          className="mx-auto  h-[100px] w-[400px] object-contain"
        />
        <p className="text-black bg-[#ffba00] text-lg tracking-wider py-3 px-3 w-fit mx-auto  mb-2 font-semibold">
          #1 Most Trending Book of Asia
        </p>
        <h1 className="text-3xl sm:text-6xl font-bold text-white mt-4">
          JUMBLE BOOK
        </h1>
        <p className="text-white font-medium mt-4 mb-6">
          Get your online ID from the most famous book of Asia and experience
          the newest way to invest and win big from Live Sports.
        </p>
        <div className=" flex mx-auto w-fit flex-col gap-4">
          <button
            className="bg-[#cb0203] w-72 mx-auto text-white font-light text-xl tracking-wider py-3 px-3 rounded-xl shadow-lg hover:bg-red-700 transition duration-300"
            aria-label="Get Your User ID"
          >
            GET YOUR USER ID!
          </button>
          <button
            className="bg-[#cb0203] w-64 mx-auto  text-white font-light text-xl tracking-wider py-2 px-3 rounded-xl shadow-lg hover:bg-red-700 transition duration-300"
            aria-label="Get Your ID"
          >
            GET YOUR ID!
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewYearBanner;
