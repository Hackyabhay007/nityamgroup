import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const features = [
    {
      title: "Fast Withdrawals and Deposits",
      icon: "https://www.jumblebook.com/assets/images/trust.png",
      description: "Experience instant withdrawals and deposits with our seamless financial transactions.",
     
    },
    {
      title: "Round-the-Clock Customer Support",
      icon: "https://www.jumblebook.com/assets/images/24x7.png",
      description: "Our dedicated support team is available 24/7 to assist with any queries or issues.",
     
    },
    {
      title: "Get Bonuses for Referring Friends",
      icon: "https://www.jumblebook.com/assets/images/assure.png",
      description: "Earn exciting bonuses and rewards by referring friends to our platform.",
     
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-cover bg-center py-14 md:py-32 min-h-screen flex gap-10 md:gap-20 flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/ddoj0vu3d/image/upload/v1725362583/pexels-aidan-howe-2427444-4677402_1_bgfrom.jpg')`, // Background image URL
      }}
    >
      <div className="text-center md:mb-12">
        <p
          style={{
            backgroundImage: "linear-gradient(45deg, #baa051, #e3d4a0)", // Gold gradient
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="text-4xl lg:text-7xl font-bold text-gray-800"
        >
          Our Key Features
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-5 md:px-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center rounded-3xl p-6  border `}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.2 }
            }
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.9 },
              delay: index * 0.3,
            }}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <div className="text-white text-center">
              <h4 className="text-2xl font-bold mb-2">{feature.title}</h4>
              {feature.description && (
                <p className="text-base">{feature.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
