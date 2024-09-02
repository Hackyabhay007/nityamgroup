import React from "react";

const CustomerSupport = () => {
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
      <div className="pb-16 md:pb-48 px-4 sm:px-8 md:px-12 lg:px-24">
        <p className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold mt-4">
          <span className="text-white">Welcome to </span>NITYAM GROUP
        </p>
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
          THE KING OF ONLINE GAMES
        </h3>
        <p className="text-white mt-4 max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
          India’s most trending and secured online platform where you can invest
          your money and skills to earn big on cricket, football, tennis, and a
          wide range of online casino games. No KYC, no documentation needed,
          24/7 dedicated team to back up your queries, be it creating an ID or
          withdrawal request, our support team is always ready to give
          lightning-fast services each time, each second you need! Cheers to
          your victory!
        </p>
      </div>
    </div>
  );
};

export default CustomerSupport;
