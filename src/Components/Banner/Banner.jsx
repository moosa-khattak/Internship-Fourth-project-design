import React from "react";
import image from "../../assets/Women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="mt-20 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center   gap-8 ">
          {/* image section  */}
          <div>
            <img
              data-aos="zoom-in"
              src={image}
              alt=""
              className="max-w-[400px] h-[350px]  w-full mx-auto object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] m "
            />
          </div>
          {/* Detail  */}

          <div className="flex flex-col gap-6 text-center sm:text-left ">
            <h1
              data-aos=""
              className="text-3xl sm:text-4xl font-bold dark:text-white"
            >
              Winter Sale UpTo 50% Off
            </h1>
            <p
              data-aos="zoom-out"
              className="text-gray-600 text-sm tracking-wide leading-5 dark:hover:text-white "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              debitis esse fugiat nam beatae, sit eveniet dolorem quidem!
              Tempore, voluptatibus.
            </p>

            <div className="mx-auto sm:mx-0 flex flex-col    gap-4 dark:text-white">
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                className="flex items-center gap-4  "
              >
                <GrSecure className=" w-12 h-12 rounded-full p-4 text-4xl bg-violet-100 shadow-sm dark:bg-violet-400" />
                <p className="">Quality Products</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="flex items-center gap-4  "
              >
                <IoFastFood className=" w-12 h-12 rounded-full p-4 text-4xl bg-orange-100 shadow-sm  dark:bg-orange-400" />
                <p>Fast Food</p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex items-center gap-4  "
              >
                <GiFoodTruck className=" w-12 h-12 rounded-full p-4 text-4xl bg-green-100 shadow-sm  dark:bg-green-400" />
                <p>Easy Payment Method</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="450"
                className="flex items-center gap-4 "
              >
                <GiFoodTruck className=" w-12 h-12 rounded-full p-4 text-4xl bg-yellow-100 shadow-sm  dark:bg-yellow-400" />
                <p>Get Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
