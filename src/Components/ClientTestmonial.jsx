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
      className="min-h-screen bg-cover flex flex-col gap-10 md:items-end  justify-center text-white"
      style={{
        backgroundImage:
          "url(https://www.jumblebook.com/assets/images/bg4.jpg)",
      }}
    >
      <div className="flex lg:max-w-screen-xl flex-col md:flex-row  lg:gap-16 items-center justify-center lg:mx-20   px-4">
        <h2
          style={gradientStyle}
          className="xl:text-6xl text-4xl  md:leading-snug lg:tracking-wider font-bold mb-8 text-start  "
        >
          Client <br /> Testimonial
        </h2>
        <div className="relative flex items-center justify-center w-full md:max-w-screen-lg overflow-hidden">
          <div
            ref={carouselRef}
            className="flex space-x-4 md:space-x-8 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full px-4 scroll-smooth"
          >
            {/* Testimonial Items */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 text-black rounded-2xl shadow-md"
              >
                <img
                  src={`https://www.jumblebook.com/assets/img/scr/${
                    index + 2
                  }.png`}
                  alt={`Testimonial ${index + 1}`}
                  className="rounded-2xl w-[200px] sm:w-[240px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full items-start justify-center gap-32 px-4 md:pl-12 mt-4">
        <button
          onClick={scrollLeft}
          className=" bg-opacity-50 rounded-full hover:bg-opacity-75"
        >
          <img
            src="https://www.jumblebook.com/assets/images/prv.png"
            className="w-10 h-10 md:w-20 md:h-12  md:object-cover"
            alt="Previous"
          />
        </button>
        <button
          onClick={scrollRight}
          className=" bg-opacity-50 rounded-full hover:bg-opacity-75"
        >
          <img
            src="https://www.jumblebook.com/assets/images/nxt.png"
            alt="Next"
            className="w-10 h-10 md:w-20 md:h-12 md:object-cover"
          />
        </button>
      </div>
    </div>
  );
};

export default ClientTestimonial;
