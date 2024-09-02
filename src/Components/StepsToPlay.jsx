import React from "react";

const StepsToPlay = () => {
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
      className="bg-cover bg-center py-14 gap-6 md:py-32 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://www.jumblebook.com/assets/images/bg1.jpg')`,
      }}
    >
      <div className="w-full md:px-16 flex justify-center md:justify-normal   items-center  ">
        <p style={gradientStyle} className="text-5xl md:text-4xl lg:text-5xl text-center font-bold text-[#dcc87e] ">
          EASY STEPS TO PLAY
        </p>
      </div>

      <div className="w-full px-10 flex flex-col space-y-4">
        {/* Step 1 */}
        <div className="flex flex-col  justify-end w-full  md:flex-row">
          <div className="md:text-4xl text-xl text-[#ee2946] w-fit rounded-t-2xl  md:rounded-tl-full md:rounded-bl-md  bg-black  flex items-end p-2 md:p-4 font-bold">
            <span>Step 1</span>
          </div>
          <div className="bg-[#e22239] rounded-3xl rounded-tl-none  md:rounded-r-3xl text-white w-full md:w-1/2 flex justify-between items-center p-4 md:p-6">
            <div>
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-line-filled/512/whatsapp__icons__logo__social__media-512.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className=" w-2/3">
              <span className="font-medium text-xl md:pl-14 tracking-wider text-center">
                GET IN TOUCH!
              </span>
              <br />
              <span> Sign-up using any WhatsApp Number.</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#e7501b] rounded-l-3xl text-white w-full md:w-1/2 flex justify-between items-center p-4 md:p-6">
            <div className="text-center font-bold w-2/3 md:ml-14">
              <span className="font-medium  uppercase text-xl tracking-wider">
                Play free{" "}
              </span>
              <br />
              Try our platform with demo ID
            </div>
            <div>
              <img
                src="https://cdn3.iconfinder.com/data/icons/covid-19-coronavirus-protection-or-prevention-fill/64/NewsCovid-19-256.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          <div className="text-3xl text-[#e7501b] rounded-tr-full rounded-b-xl  bg-black  flex items-end p-4 font-bold">
            <span>Step 2</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col  justify-end w-full md:flex-row">
          <div className="md:text-3xl text-xl p-2 text-[#018e30] w-fit rounded-t-2xl  md:rounded-tl-full md:rounded-bl-md   bg-black  flex items-end md:p-4 font-bold">
            <span>Step 3</span>
          </div>
          <div className="bg-[#018e30] rounded-3xl rounded-tl-none md:rounded-r-3xl text-white w-full md:w-1/2 flex justify-between items-center p-4 md:p-6">
            <div>
              <img
                src="https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/100/money_euros-256.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-center w-2/3 font-bold md:mr-24">
             <span className="uppercase text-xl tracking-wider">Easy to deposit</span> 
              <br />
              Easy deposit money in your account
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#267fd9] rounded-l-3xl text-white w-full md:w-1/2 flex justify-between items-center p-4 md:p-6">
            <div className="text-center font-bold w-2/3 md:ml-12">
              <span className=" uppercase text-xl tracking-wider ">Earn Money</span>
              <br />
              Send Amount Screenshot for order confirmation
            </div>
            <div>
              <img
                src="https://cdn4.iconfinder.com/data/icons/untact-society-4/64/atm-interaction-untact-256.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          <div className="text-3xl text-[#267fd9] rounded-tr-full rounded-b-xl  bg-black  flex items-end p-4 font-bold">
            <span>Step 4</span>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col justify-end w-full md:flex-row">
          <div className="md:text-3xl text-xl text-[#e02037] w-fit rounded-t-2xl  md:rounded-tl-full md:rounded-bl-md  bg-black  flex items-end  p-2 md:p-4 font-bold">
            <span>Step 5</span>
          </div>
          <div className="bg-[#e02037] rounded-3xl rounded-tl-none md:rounded-r-3xl text-white w-full md:w-1/2 flex justify-between items-center p-4 md:p-6">
            <div>
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-line-filled/512/whatsapp__icons__logo__social__media-512.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-center font-bold w-2/3 md:mr-24 ">
              <span className=" uppercase text-xl tracking-wider ">
                Playing Step
              </span>
              <br />
              Get Playing chips for the games
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#e8511c] rounded-l-3xl text-white w-full md:w-1/2 flex justify-between items-center p-4 md:p-6">
            <div className="text-center font-semibold w-2/3  md:ml-12">
              <span className="font-medium uppercase   text-xl tracking-widest">
                {" "}
                Happy Earning
              </span>
              <br />
              Now all set. Happy playing & earning
            </div>
            <div className="">
              <img
                src="https://cdn3.iconfinder.com/data/icons/covid-19-coronavirus-protection-or-prevention-fill/64/NewsCovid-19-256.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          <div className="text-3xl text-[#e8511c] rounded-tr-full rounded-b-xl  bg-black  flex items-end p-4  font-bold">
            <span>Step 6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsToPlay;
