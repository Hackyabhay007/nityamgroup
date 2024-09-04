import React from "react";

const BrandPartners = () => {
  const partners = [
    {
      name: "Betsky Exch",
      logo: "https://www.jumblebook.com/bet.png",
      buttonText: "Get Demo ID",
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
              className="mx-auto mb-4 h-20" // Set a height for consistency
            />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              {partner.name}
            </h3>
            <a
              href="https://wa.me/1234567890"
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
