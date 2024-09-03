import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StepsToPlay = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const gradientStyle = {
    backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
  };

  const steps = [
    {
      title: "Step 1",
      text: "GET IN TOUCH! Sign-up using any WhatsApp Number.",
      color: "#FF5733", // Bright Orange
      icon: "https://cdn3.iconfinder.com/data/icons/social-line-filled/512/whatsapp__icons__logo__social__media-512.png",
    },
    {
      title: "Step 2",
      text: "Play Free. Try our platform with a demo ID.",
      color: "#C70039", // Crimson
      icon: "https://cdn3.iconfinder.com/data/icons/covid-19-coronavirus-protection-or-prevention-fill/64/NewsCovid-19-256.png",
    },
    {
      title: "Step 3",
      text: "Easy to Deposit. Easy deposit money in your account.",
      color: "#900C3F", // Dark Red
      icon: "https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/100/money_euros-256.png",
    },
    {
      title: "Step 4",
      text: "Earn Money. Send amount screenshot for order confirmation.",
      color: "#581845", // Deep Purple
      icon: "https://cdn4.iconfinder.com/data/icons/untact-society-4/64/atm-interaction-untact-256.png",
    },
    {
      title: "Step 5",
      text: "Playing Step. Get playing chips for the games.",
      color: "#1C1C1C", // Black
      icon: "https://cdn3.iconfinder.com/data/icons/social-line-filled/512/whatsapp__icons__logo__social__media-512.png",
    },
    {
      title: "Step 6",
      text: "Happy Earning. Now all set. Happy playing & earning.",
      color: "#FFC300", // Bright Yellow
      icon: "https://cdn3.iconfinder.com/data/icons/covid-19-coronavirus-protection-or-prevention-fill/64/NewsCovid-19-256.png",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      className="bg-cover bg-center py-14 gap-24 md:py-24 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://www.jumblebook.com/assets/images/bg1.jpg')`,
      }}
    >
      <div className="w-full md:px-16 flex justify-center items-center">
        <p style={gradientStyle} className="text-5xl md:text-4xl lg:text-5xl text-center font-bold text-[#dcc87e]">
          EASY STEPS TO PLAY
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center rounded-3xl p-6"
            style={{ backgroundColor: step.color }}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { delay: index * 0.3 } },
            }}
          >
            <div className="text-4xl text-white font-bold mb-4">{step.title}</div>
            <img
              src={step.icon}
              alt={step.title}
              className="w-12 h-12 object-contain mb-4"
            />
            <div className="text-white text-center">
              <span className="font-medium text-xl">{step.text.split(" ")[0]}</span>
              <br />
              {step.text.split(" ").slice(1).join(" ")}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StepsToPlay;
