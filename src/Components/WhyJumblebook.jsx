import React, { useEffect } from "react";
import {
  FaShieldAlt,
  FaHeadset,
  FaGift,
  FaDollarSign,
  FaUserGraduate,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: <FaShieldAlt />,
    title: "Reliable Services",
    description:
      "We provide consistent and reliable services with a commitment to quality and customer satisfaction.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist with any issues or inquiries.",
  },
  {
    icon: <FaGift />,
    title: "Exclusive Benefits",
    description:
      "Enjoy exclusive benefits and rewards with our loyalty programs and referral bonuses.",
  },
  {
    icon: <FaDollarSign />,
    title: "More Money",
    description:
      "The only exchange on market having panel with rolling commission, the more you pay, the more you earn!",
  },
  {
    icon: <FaUserGraduate />,
    title: "Educated Staff",
    description:
      "10,000+ educated and well-behaved staff members. Versatile payment options like PhonePe, Google Pay, PayTm. NO KYC Required!",
  },
  {
    icon: <FaHandHoldingUsd />,
    title: "Loyalty Program",
    description:
      "India's only exchange in the market with assured winnings of Rs.20,000 per day, along with many exciting offers.",
  },
];

const WhyChooseUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div
      className="bg-gray-900 text-white flex flex-col py-24 items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.jumblebook.com/assets/images/bg5.jpg')",
      }}
    >
      <h2 className="text-center text-3xl lg:text-5xl font-bold mb-4">
        Why{" "}
        <span
          style={{
            backgroundImage: "linear-gradient(45deg, #baa051, #e3d4a0)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Choose
        </span>{" "}
        Us?
      </h2>
      <p className="text-center text-lg md:text-xl mb-12 px-4">
        Discover the unparalleled advantages of our services, designed to meet
        your needs with excellence and efficiency.
      </p>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 md:px-12"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { delay: index * 0.3 } },
            }}
          >
            <div className="text-[#baa051] text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#baa051] mb-2">
              {service.title}
            </h3>
            <p className="text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
