import React from "react";

const CustomerSupport = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col justify-between items-center text-center"
      style={{
        backgroundImage: `url('https://www.jumblebook.com/assets/images/bg1.jpg')`,
      }}
    >
      <div className="bg-black flex justify-center items-center w-full h-32">
        <div className="flex justify-between w-[80%] ">
          <div className="flex flex-col items-start">
            <h2 className="text-green-500 font- font-bold text-xl sm:text-2xl lg:text-2xl tracking-wide ">
              WhatsApp
            </h2>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-3xl font-bold mt-2">
              CUSTOMER SUPPORT
            </h1>
          </div>
          <div className="flex">
            <img
              src="https://www.jumblebook.com/assets/img/w1.gif"
              className="w-[255px] h-[80px]"
              alt=""
            />
            <img
              src="https://www.jumblebook.com/assets/img/w1.gif"
              className="w-[255px] h-[80px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pb-56">
        <p className="text-yellow-400 text-xl sm:text-2xl font-bold mt-4">
          <span className="text-white">Welcome to</span> Jumble Book
        </p>
        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
          THE KING OF ONLINE GAMES
        </h3>
        <p className="text-white mt-4 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl">
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
