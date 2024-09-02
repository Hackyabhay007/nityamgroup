import React from "react";

const features = [
  {
    title: "INSTANT WITHDRAWAL & DEPOSIT",
    icon: "https://www.jumblebook.com/assets/images/trust.png",
    description: "",
    bgColor: "bg-yellow-600",
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    icon: "https://www.jumblebook.com/assets/images/24x7.png",
    description: "",
    bgColor: "bg-yellow-600",
  },
  {
    title: "EARN BONUS BY REFERRING FRIENDS",
    icon: "https://www.jumblebook.com/assets/images/assure.png",
    description: "",
    bgColor: "bg-yellow-600",
  },
];

const ProvideFeatures = () => {
  return (
    <div
      className="min-h-screen flex flex-col  items-center justify-center bg-cover"
      style={{
        backgroundImage:
          "url(https://www.jumblebook.com/assets/images/bg5.jpg)",
      }}
    >
      <div className="flex flex-col items-center gap-4  justify-center">
        <div className="text-center">
          <h2 className="md:text-4xl text-xl font-bold text-white mb-4 md:mb-14">
            We Provide You Guys
          </h2>
          <p className="text-white font-bold text-sm mb-12">
            The Best and Premium Online Betting Service in 5+ Gaming Sites
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 w-full px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#000201] border max-w-md border-[#313536] text-[#f5cf00] py-7 px-10 rounded-lg flex  items-start`}
            >
              {" "}
              <img src={feature.icon} className="md:h-28 h-20 w-20 mr-4 md:w-28" alt="" />
              <h3 className="md:text-2xl font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProvideFeatures;
