import React from "react";

const WhyJumblebook = () => {
  return (
    <div
      className="bg-black text-white   flex flex-col py-36 items-center justify-center g bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.jumblebook.com/assets/images/bg5.jpg')",
      }}
    >
      <h2 className="text-center md:text-5xl p text-2xl lg:text-7xl font-bold mb-12">Why NITYAM GROUP?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-12">
        <div className="bg-[#000201] md:w-fit gap-6 h-60 md:h-80 md:px-10 p-4 md:py-8 border-[#323534] border flex  md:items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/trust.png"
            alt="Image description"
            className="md:w-24 md:h-24 w-14 h-14 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">
              YOUR TRUST, OUR <br />
              SERVICE
            </h3>
            <p className="mt-2 w-60 font-bold md:text-lg">
              India's most trusted & safest exchange since 2017! With the trust
              of over 10 Lakh customers & operating 100+ branches with largest
              verities of exchange websites.
            </p>
          </div>
        </div>
        <div className="bg-[#000201] md:w-fit gap-6 h-60 p-4 md:h-80 md:px-10 md:py-8 border-[#323534] border flex  items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/24x7.png"
            alt="Image description"
            className="md:w-24 md:h-24 w-14 h-14 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">
              QUALITY ASSURED
            </h3>
            <p className="mt-2 w-60 font-bold md:text-lg">
              24x7 Service available without holidays. Get withdrawal within
              15min(s) & Deposit in 5min(s). Guaranteed by us and many
              celebrities of India.
            </p>
          </div>
        </div>
        <div className="bg-[#000201] md:w-fit gap-6 h-60 p-4 md:h-80 md:px-10 md:py-8 border-[#323534] border flex  items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/assure.png"
            alt="Image description"
            className="md:w-24 md:h-24 w-14 h-14 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">
              LOYALTY PROGRAM
            </h3>
            <p className="mt-2 w-60 font-bold md:text-lg">
              India's one and only exchange in market where you get assured
              winning of Rs.20,000/- per-day! Along with many other exciting
              offers. Play & Earn huge!
            </p>
          </div>
        </div>
        <div className="bg-[#000201] md:w-fit gap-6 h-60 p-4 md:h-80 md:px-10 md:py-8 border-[#323534] border flex  items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/money.png"
            alt="Image description"
            className="md:w-24 md:h-24 w-14 h-14 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">More Money</h3>
            <p className="mt-2 w-60 font-bold md:text-lg">
              The only exchange on market having panel with rolling commission,
              the more you pay! the more you earn!
            </p>
          </div>
        </div>
        <div className="bg-[#000201] md:w-fit gap-6 h-60 p-4 md:h-80 md:px-10 md:py-8 border-[#323534] border flex  items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/educated.png"
            alt="Image description"
            className="md:w-24 md:h-24 w-14 h-14 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">
              Educated Staffs
            </h3>
            <p className="mt-2 w-60 font-bold md:text-lg">
              10,000+ Educated & well behaved staffs Versatile. Payment options
              like PhonePe, Google Pay, PayTm. NO KYC Required!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJumblebook;
