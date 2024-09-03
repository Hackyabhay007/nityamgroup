import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CustomerSupport = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col justify-between items-center text-center"
      style={{
        backgroundImage: `url('https://www.jumblebook.com/assets/images/bg1.jpg')`,
      }}
    >
      <div className="bg-black  flex justify-center items-center w-full py-4">
        <div className="flex  flex-col md:flex-row justify-between items-center w-[80%] mx-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-green-500 font-bold text-lg sm:text-xl md:text-2xl tracking-wide">
              WhatsApp
            </h2>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              CUSTOMER SUPPORT
            </h1>
          </div>
          <div className="flex flex-wrap justify-center   md:justify-end mt-4 md:mt-0">
            <img
              src="https://www.jumblebook.com/assets/img/w1.gif"
              className="w-[150px] md:w-[255px] md:h-[80px] h-[50px] mx-2"
              alt=""
            />
            <img
              src="https://www.jumblebook.com/assets/img/w1.gif"
              className="w-[150px] md:w-[255px] md:h-[80px] h-[50px] mx-2"
              alt=""
            />
          </div>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ scale: 0.7 }}
        animate={inView ? { scale: 1 } : { scale: 0.7 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="pb-16 md:pb-48 px-4 sm:px-8 md:px-12 lg:px-24"
      >
        <p className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold mt-4">
          <span className="text-white">Welcome to </span>NITYAM GROUP
        </p>
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
          THE KING OF ONLINE GAMES
        </h3>
        <p className="text-white mt-4 max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
          Join India’s most trending and secure online platform, where your
          money and skills can turn into big wins in cricket, football, tennis,
          and a wide range of online casino games. No KYC or documentation
          required—just pure gaming. Our 24/7 dedicated support team is ready to
          assist with anything from creating your ID to handling withdrawal
          requests, ensuring you get lightning-fast service whenever you need
          it. Here’s to your victory!
        </p>
      </motion.div>
    </div>
  );
};

export default CustomerSupport;
