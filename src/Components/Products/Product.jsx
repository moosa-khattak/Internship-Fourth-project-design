import React from "react";
import women from "../../assets/Hero/women.png";
import women2 from "../../assets/Women/women2.jpg";
import women3 from "../../assets/Women/women3.jpg";
import women4 from "../../assets/Women/women4.jpg";
import { FaStar } from "react-icons/fa";

const Product = () => {
  const productData = [
    {
      id: 1,
      image: women,
      title: "Women Ethnics",
      rating: 5.0,
      color: "White",
      aosDelay: "0",
      bg : 'white'
    },
    {
      id: 2,
      image: women2,
      title: "Women Western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      image: women3,
      title: "Goggles",
      rating: 4.7,
      color: "Brown",
      aosDelay: "400",
    },
    {
      id: 4,
      image: women4,
      title: "Printed T-Shirts",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      image: women2,
      title: "Fashin T-Shirts",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];

  return (
    <div className="mt-14  pb-12">
      <div className="container">
        {/* Header Section   */}
        <div className="max-w-[600px] mx-auto text-center space-y-1 mb-12 ">
          <p className="text-sm text-primary">Top selling product for you </p>
          <h1 className="text-3xl font-bold dark:text-white">Products</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            eligendi!
          </p>
        </div>
        {/* Cards Section  */}

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4 gap-4 place-items-center">
          {productData.map((data) => (
            <div 
            data-aos = "fade-up"
            data-aos-delay = {data.aosDelay} key={data.id} className="space-y-3">
              <img
                src={data.image}
                alt=""
                className={`w-[220px] h-[180px] object-cover rounded-md bg-${data.bg} `}
              />

              <div>
                <h1 className="font-semibold dark:text-white">{data.title}</h1>
                <p className="text-gray-600 text-sm">{data.color}</p>

                <div className="flex gap-1 items-center">
                  <FaStar className="text-yellow-300 " />
                  <span className="dark:text-white">{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
          <div className="flex  md:w-[600px] mx-auto  justify-center ">
            <button className="py-2 cursor-pointer px-6 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold mt-12 hover:scale-105 duration-200 ">
              View All Product
            </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
