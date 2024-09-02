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
      <h2 className="text-center text-7xl font-bold mb-12">Why Jumblebook?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-[#000201] w-fit gap-6 h-80 px-10 py-8 border-[#323534] border flex  items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/trust.png"
            alt="Image description"
            className="w-24 h-24 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">
              YOUR TRUST, OUR <br />
              SERVICE
            </h3>
            <p className="mt-2 w-60 font-bold text-lg">
              India's most trusted & safest exchange since 2017! With the trust
              of over 10 Lakh customers & operating 100+ branches with largest
              verities of exchange websites.
            </p>
          </div>
        </div>
        <div className="bg-[#000201] w-fit gap-6 h-80 px-10 py-8 border-[#323534] border flex  items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/24x7.png"
            alt="Image description"
            className="w-24 h-24 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">
              QUALITY ASSURED
            </h3>
            <p className="mt-2 w-60 font-bold text-lg">
              24x7 Service available without holidays. Get withdrawal within
              15min(s) & Deposit in 5min(s). Guaranteed by us and many
              celebrities of India.
            </p>
          </div>
        </div>
        <div className="bg-[#000201] w-fit gap-6 h-80 px-10 py-8 border-[#323534] border flex  items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/assure.png"
            alt="Image description"
            className="w-24 h-24 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">
              LOYALTY PROGRAM
            </h3>
            <p className="mt-2 w-60 font-bold text-lg">
              India's one and only exchange in market where you get assured
              winning of Rs.20,000/- per-day! Along with many other exciting
              offers. Play & Earn huge!
            </p>
          </div>
        </div>
        <div className="bg-[#000201] w-fit gap-6 h-80 px-10 py-8 border-[#323534] border flex  items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/money.png"
            alt="Image description"
            className="w-24 h-24 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">More Money</h3>
            <p className="mt-2 w-60 font-bold text-lg">
              The only exchange on market having panel with rolling commission,
              the more you pay! the more you earn!
            </p>
          </div>
        </div>
        <div className="bg-[#000201] w-fit gap-6 h-80 px-10 py-8 border-[#323534] border flex  items-start justify-center rounded-md  text-center">
          <img
            src="https://www.jumblebook.com/assets/images/educated.png"
            alt="Image description"
            className="w-24 h-24 object-cover rounded-md mb-4"
          />
          <div className="text-start">
            <h3 className="text-xl font-bold text-[#ffc910]">
              Educated Staffs
            </h3>
            <p className="mt-2 w-60 font-bold text-lg">
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
