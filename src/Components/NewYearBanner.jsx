import React from "react";

const NewYearBanner = () => {

  const gradientStyle = {
    backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
  };

  return (
    <div className="relative h-screen flex  flex-col justify-center items-center text-center">
      {/* Background Video */}

      {/* Overlay Content */}
      <div className="relative  bg-black/70 p-8   z-0  rounded-lg">
        {/* <img
          src="https://i.ibb.co/6b4z7fL/happy-new-year-chocolate-style-text-2024-png-11667797205vor7pgmyya-removebg-preview.png"
          alt="Happy New Year 2024"
          className="mx-auto  h-[100px] w-[400px] object-contain"
        /> */}
        <p className="text-black bg-[#baa051] rounded-md flex z-10 text-lg tracking-wider py-3 px-3 w-fit mx-auto  mb-2 font-semibold">
          #1 Most Trending Book of Asia
        </p>
        <h1 style={gradientStyle} className="text-3xl sm:text-6xl font-bold text-white mt-4">
          NITYAM GROUP
        </h1>
        <p className="text-white font-medium mt-4 mb-6">
          Get your online ID from Asia's most renowned book and discover the
          latest way to invest and win big with Live Sports.
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
