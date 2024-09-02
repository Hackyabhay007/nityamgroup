import React from "react";
import NewYearBanner from "./NewYearBanner";

function Header() {
  return (
    <section className="w-full ">
      <div className="w-full fixed top-0 z-20      flex items-start justify-center">
        <img
          src="https://www.jumblebook.com/assets/images/Jamblebook.png"
          alt=""
          className="w-[230px] h-[110px] pt-3 object-contain"
        />
      </div>
      <NewYearBanner />
    </section>
  );
}

export default Header;
