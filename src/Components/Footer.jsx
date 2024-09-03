import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#090909] text-white p-8">
      <div className="max-w-screen-lg mx-auto py-12 flex flex-col items-center md:items-start space-y-8">
        <div className="flex items-center space-x-2">
          <img
            src="https://www.jumblebook.com/assets/img/footwp.png"
            alt="Footer Logo"
            className="w-52"
          />
        </div>

        <hr className="border my-4 w-full md:w-[50%]" />

        <p className="text-xs md:text-lg text-[#737571] font-bold text-center md:text-left tracking-wider leading-5">
          This website is intended only for users aged 18 and above. If you are
          located in Telangana, Orissa, Assam, Sikkim, or Nagaland, please exit
          the site immediately.
        </p>

        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:items-start md:flex-row md:space-x-8">
          {/* <img
            src="https://www.jumblebook.com/assets/img/footwp.png"
            className="w-52 object-cover"
            alt="Footer Icon"
          /> */}
          {/* <hr className="w-52 border-[#737571]" /> */}
          <div className="flex space-x-5">
            <a href="#" className="text-white">
              <img
                src="https://i.ibb.co/HhCbPST/facebook.png"
                className="w-10 h-10"
                alt="Facebook"
              />
            </a>
            <a href="#" className="text-white">
              <img
                src="https://i.ibb.co/nPt92Pz/instagram.png"
                className="w-10 h-10"
                alt="Instagram"
              />
            </a>
            <a href="#" className="text-white">
              <img
                src="https://www.jumblebook.com/tt.png"
                className="w-10 h-10"
                alt="Twitter"
              />
            </a>
          </div>
          <div className="w-60 h-20 bg-[#212121] flex flex-col items-start pl-3 justify-center rounded-md">
            <span className="text-white flex items-center gap-1 text-center text-md font-bold">
              <span className="text-red-500 text-xl pb-1">18+</span> Disclaimer
            </span>
            <span className="text-gray-400 text-xs text-center ">
              Content not suitable for minors.
            </span>
            <span className="text-gray-400 text-xs text-center ">
              Proceed with caution.
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center text-[#7a7966]">
          <p className="font-bold tracking-widest mt-2">© 2024 NITYAM GROUP</p>
          <p>
            Designed by <span className="text-[#baa051] text-lg font-medium">NITYAM GROUP</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
