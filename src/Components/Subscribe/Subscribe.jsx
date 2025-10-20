import React from "react";
import image from "../../assets/Website/orange-pattern.jpg";

const Subscribe = () => {
  const banner = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={banner} className=" mb-20  text-white ">
      <div className="container py-10 backdrop-blur-sm ">
        <div className="text-center space-y-6">
          <h1 data-aos="zoom-in" className="text-2xl sm:text-4xl  font-semibold ">
            Get Notified Our New Products
          </h1>
          <input data-aos = "fade-up"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email "
            className="p-3 border w-full bg-gray-100 dark:bg-gray-800 dark:text-white text-black border-none outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
