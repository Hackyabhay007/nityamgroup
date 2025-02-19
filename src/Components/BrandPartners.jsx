import React from "react";
import image1 from "../Assests/Images/IMG_2336 (1).png";
import image2 from "../Assests/Images/radhe-exchange.png";
import image3 from "../Assests/Images/logoimage.png";
import image4 from "../Assests/Images/logoimage1.gif";
import image5 from "../Assests/Images/tiger-exch.png";

const BrandPartners = () => {
  const partners = [
    {
      name: "Go Exchange",
      logo: image1,
      buttonText: "Get Demo ID",
    },
    {
      name: "Radhe Exchange",
      logo: image2,
      buttonText: "Get Demo ID",
    },
    {
      name: "99 Pulse",
      logo: image3,
      buttonText: "Get Demo ID",
    },
    {
      name: "Tiger Exchange",
      logo: image5,
      buttonText: "Get Demo ID",
    },
    {
      name: "Laser 247.com",
      logo: image4,
      buttonText: "Get Demo ID",
    },
  ];

  const cardStyle = {
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    color: "#ffffff",
  };

  return (
    <div
      name="target-section"
      className="relative   bg-cover bg-center py-24 px-5 md:px-20 gap-10  md:gap-20 flex flex-col justify-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/ddoj0vu3d/image/upload/v1725362584/pexels-dnsfotos-2631067_enykra.jpg')`,
      }}
    >
      <h2
        className="text-center text-4xl lg:text-6xl font-bold md:mb-12"
        style={{
          backgroundImage: "linear-gradient(45deg, #baa051, #e3d4a0)", // Gold gradient
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Our Brand Partners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            style={cardStyle}
            className="shadow-lg shadow-black hover:shadow-white hover:shadow-md hover:scale-105 transition-all duration-700 ease-in-out border-gray-800 border bg-black/70"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="mx-auto  mb-4 h-20" // Set a height for consistency
            />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              {partner.name}
            </h3>
            <a
              href="https://wa.link/mdja31"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent text-xl border border-white py-2 px-6 rounded-md hover:bg-[#baa051] transition-all shadow-white shadow-md  duration-300">
                {partner.buttonText}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPartners;
