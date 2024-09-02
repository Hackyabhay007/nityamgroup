import React, { useRef } from "react";

const ClientTestimonial = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

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
      className="min-h-screen bg-cover  flex flex-col  gap-10  items-center justify-center text-white"
      style={{
        backgroundImage:
          "url(https://www.jumblebook.com/assets/images/bg4.jpg)",
      }}
    >
      <div className="flex gap-16 items-center justify-end w-full  ">
        <h2 style={ gradientStyle} className="text-6xl leading-relaxed tracking-wider font-bold mb-8 text-start">
          Client <br /> Testimonial
        </h2>
        <div className="relative flex items-center justify-center w-full max-w-screen-lg overflow-hidden">
          <div
            ref={carouselRef}
            className="flex space-x-20 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full ml-16 px-4 scroll-smooth"
          >
            {/* Testimonial 1 */}
            <div className=" rounded-2xl snap-center flex-shrink-0  text-black   shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/2.png"
                alt="Testimonial 1"
                className="rounded-2xl w-[240px] object-contain "
              />
            </div>
            {/* Testimonial 2 */}
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/3.png"
                alt="Testimonial 2"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
            {/* Testimonial 3 */}
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/4.png"
                alt="Testimonial 3"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/6.png"
                alt="Testimonial 3"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/7.png"
                alt="Testimonial 3"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/8.png"
                alt="Testimonial 3"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/9.png"
                alt="Testimonial 3"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/10.png"
                alt="Testimonial 3"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/11.png"
                alt="Testimonial 3"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/13.png"
                alt="Testimonial 3"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
            <div className="snap-center flex-shrink-0  text-black  rounded-2xl shadow-md">
              <img
                src="https://www.jumblebook.com/assets/img/scr/14.png"
                alt="Testimonial 3"
                className="rounded-2xl w-[240px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-96 justify-end gap-40 ">
        <button
          onClick={scrollLeft}
          className=" z-10  bg-opacity-50 rounded-full hover:bg-opacity-75"
        >
          <img src="https://www.jumblebook.com/assets/images/prv.png" className="w-20 object-cover h-12" alt="" />
        </button>
        <button
          onClick={scrollRight}
          className=" z-10   bg-opacity-50 rounded-full hover:bg-opacity-75"
        >
          <img src="https://www.jumblebook.com/assets/images/nxt.png" alt="" className="w-20 object-cover h-12" />
        </button>
      </div>
    </div>
  );
};

export default ClientTestimonial;
