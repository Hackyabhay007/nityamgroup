import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { scroller } from "react-scroll";


const NewYearBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const gradientStyle = {
    backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
  };
  const scrollToSection = () => {
    scroller.scrollTo("target-section", {
      duration: 600,
      delay: 0.5,
      smooth:  "easeIn",
    });
  };
  return (
    <div className="relative mt-32  flex  flex-col justify-center items-center text-center">
      {/* Background Video */}

      {/* Overlay Content */}
      <motion.div
        ref={ref}
        initial={{ scale: 0.7 }}
        animate={inView ? { scale: 1 } : { scale: 0.7 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative   bg-black/30 md:p-8 py-12 m-4  z-0  rounded-lg"
      >
        {/* <img
          src="https://i.ibb.co/6b4z7fL/happy-new-year-chocolate-style-text-2024-png-11667797205vor7pgmyya-removebg-preview.png"
          alt="Happy New Year 2024"
          className="mx-auto  h-[100px] w-[400px] object-contain"
        /> */}
        <p className="text-black bg-[#baa051] rounded-md flex z-10 text-lg tracking-wider py-3 px-3 w-fit mx-auto  mb-2 font-semibold">
          #1 Most Trending Book of Asia
        </p>
        <h1
          style={gradientStyle}
          className="text-3xl sm:text-6xl font-bold text-white mt-4"
        >
          NITYAM GROUP
        </h1>
        <p className="text-white font-medium mt-4 mb-6">
          Get your online ID from Asia's most renowned book and discover the
          latest way to invest and win big with Live Sports.
        </p>
        <div className=" md:flex-row flex-col flex  mx-auto w-fit  ">
          <button
            className="bg-[#baa051] hover:scale-105 hover:text-black transition-all duration-700 ease-in-out w-64 mx-auto text-white font-light text-xl tracking-wider py-3 px-3 rounded-xl shadow-lg"
            aria-label="Get Your User ID"
            onClick={scrollToSection}
          >
            GET YOUR USER ID!
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NewYearBanner;
