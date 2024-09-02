import React from "react";

const BrandPartners = () => {
  const partners = [
    {
      name: "Betsky Exch",
      logo: "https://www.jumblebook.com/bet.png",
      buttonText: "Get Your ID",
    },
    {
      name: "Radhe Exch",
      logo: "https://www.jumblebook.com/rad.png",
      buttonText: "Get Demo ID",
    },
    {
      name: "Peach Exch",
      logo: "https://www.jumblebook.com/ppe.png",
      buttonText: "Get Demo ID",
    },
    {
      name: "Tiger Exch",
      logo: "https://www.jumblebook.com/tig.png",
      buttonText: "Get Demo ID",
    },
    {
      name: "Diamond Exch",
      logo: "https://www.jumblebook.com/dia.png",
      buttonText: "Get Demo ID",
    },
  ];
  const gradientStyle = {
    backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
  };

  return (
    <div
      className="relative bg-cover bg-center py-32 flex flex-col justify-center "
      style={{
        backgroundImage: `url('https://www.jumblebook.com/assets/images/bg2.jpg')`,
      }}
    >
      <h2
        style={gradientStyle}
        className="text-center text-3xl sm:text-4xl lg:text-7xl font-bold mb-12"
      >
        {" "}
        Our Brand Partners
      </h2>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-black w-80 justify-evenly h-72 flex flex-col gap-5 bg-opacity-75 p-4 sm:p-8 rounded-lg text-center text-white shadow-lg "
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="mx-auto mb-4  "
            />
            <h3 className="text-xl sm:text-2xl lg:text-3xl tracking-wide font-bold mb-4">
              {partner.name}
            </h3>
            <button className="text-xl w-fit mx-auto border border-white text-white font-bold py-3 px-12  rounded-md shadow-md  hover:bg-yellow-500 hover:scale-95 hover:cursor-pointer transition-all duration-1000 ease-in-out   shadow-white ">
              {partner.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPartners;
