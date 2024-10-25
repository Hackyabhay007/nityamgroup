import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp } from "react-icons/fa";

const CustomerSupport = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div
      className="relative  bg-cover bg-center  md:h-[1000px] lg:h-screen flex flex-col justify-between items-center text-center"
      style={{

        backgroundImage: `url('https://res.cloudinary.com/ddoj0vu3d/image/upload/v1725362584/pexels-aidan-howe-2427444-4677402_obykuu.jpg')`,
        
      }}
    >
      <div className="bg-black/20  flex justify-center items-center w-full py-4">
        <div className="flex  flex-col md:flex-row justify-between items-center w-[80%] mx-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-green-500 font-bold text-lg sm:text-xl md:text-2xl tracking-wide">
              WhatsApp
            </h2>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              CUSTOMER SUPPORT
            </h1>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0">
            <div className="w-[250px]  flex flex-col rounded-md items-center justify-center bg-[#baa051] text-white md:w-[255px] h-[70px]  mx-2">
              <span className="text-black font-semibold text-xl">
                NITYAM GROUP
              </span>
              <a
                href="https://wa.link/ah6b1r"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2">
                  <FaWhatsapp
                    className="text-green-500 hover:cursor-pointer"
                    size={32}
                  />
                  <span className="hover:cursor-pointer hover:underline">
                    Click To Chat
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ scale: 0.7 }}
        animate={inView ? { scale: 1 } : { scale: 0.7 }}
        transition={{ duration: 1 , ease: "easeOut" }}
        className=" mb-48 bg-black/80 m-3 lg:m-0 p-3  rounded-md md:mb-96 lg:mb-60 px-4 sm:px-8 md:px-12 lg:py-6 lg:px-12"
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
