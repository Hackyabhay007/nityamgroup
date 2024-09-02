import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#090909] min-h-screen text-white p-8">
      <div className="flex relative max-w-screen-lg mx-auto my-16  items-start  flex-col">
        <div className=" text-white pt-2  rounded-lg flex items-center space-x-2">
          <img src="https://www.jumblebook.com/assets/img/footwp.png" alt="" />
        </div>
        <hr className=" border my-4  w-[50%]" />
        <p className="mt-4 text-[#737571] font-medium text-left tracking-widest leading-5 max-w-lg">
          THIS WEBSITE IS ONLY FOR 18+ USERS. IF YOU ARE FROM TELANGANA, ORISSA,
          ASSAM, SIKKIM, AND NAGALAND, PLEASE LEAVE THE WEBSITE IMMEDIATELY.
        </p>

        <div className="flex gap-5 items-center w-80  h-80 justify-center flex-col space-x-4 mt-4">
          <img
            src="https://www.jumblebook.com/assets/img/footwp.png"
            className="w-52 object-cover h-12"
            alt=""
          />
          <hr className="w-52" />
          <div className="flex  mt-12 pr-10  gap-5 ">
            <a href="#" className="text-white">
              <img
                src="https://i.ibb.co/HhCbPST/facebook.png"
                className="w-10 h-10"
                alt=""
              />
            </a>
            <a href="#" className="text-white">
              <img
                src="https://i.ibb.co/nPt92Pz/instagram.png"
                className="w-10 h-10"
                alt=""
              />
            </a>
            <a href="#" className="text-white">
              <img
                src="https://www.jumblebook.com/tt.png"
                className="w-10 h-10"
                alt=""
              />
            </a>
          </div>
          <img
            src="https://www.jumblebook.com/assets/img/19.png"
            alt="18+ Disclaimer"
            className="w-48  object-cover"
          />
        </div>
        <hr className=" w-[40%] -bottom-12 left-14 absolute  border-[#212121] border- " />
      </div>
      <div className="mt-4 fled flex-col  items-center justify-center max-w-screen-md mx-auto ">
        <div className="flex w-fit  font-bold tracking-widest flex-col items-center text-[#7a7966] ">
          <p className="mt-2  font-bold tracking-widest">© 2024 JUMBLEBOOK</p>
          <p>Designed by <span className="text-white">JUMBLEBOOK</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
