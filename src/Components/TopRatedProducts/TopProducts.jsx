import React from 'react'
import shirt from "../../assets/Shirt/shirt.png"
import shirt2 from "../../assets/Shirt/shirt2.png"
import shirt3 from "../../assets/Shirt/shirt3.png"
import { FaStar } from 'react-icons/fa'
const TopProducts = () => {

    const topProduct = [
      {
        id: 1,
        image: shirt,
        title: "Casual Wear ",
        description:
          "   Lorem ipsum dolor sit, amet consectetur .  dolor sit, amet Lorem ipsum dolor sit, amet consectetur .  dolor sit, amet .",
      },
      {
        id: 2,
        image: shirt2,
        title: "Printed Shirt ",
        description:
          "  Lorem ipsum dolor sit, amet consectetur .  dolor sit, amet . Lorem ipsum dolor sit, amet consectetur .  dolor sit, amet .",
      },
      {
        id: 3,
        image: shirt3,
        title: "Women Shirt  ",
        description:
          "  Lorem ipsum dolor sit, amet consectetur .  dolor sit, amet . Lorem ipsum dolor sit, amet consectetur .  dolor sit, amet .",
      },
    ];
  return (
    <div>
      <div className="container">
        {/* Header section  */}
        <div className=" mx-auto text-left space-y-1 mb-24 ">
          <p className="text-sm text-primary">Top Rated product for you </p>
          <h1 className="text-3xl font-bold dark:text-white">Best Products</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            eligendi!
          </p>
        </div>

        {/* body Section  */}
        <div
       
        className="grid grid-cols-1  md:grid-cols-3 place-items-center gap-20 sm:gap-18 md:gap-2 lg:gap-4 pb-4">
          {topProduct.map((data) => (
            <div  data-aos = "zoom-out" className='max-w-[600px]  bg-white dark:bg-gray-800 hover:bg-black rounded-2xl relative dark:hover:bg-primary duration-300 shadow-xl group'>
              <div className='h-[100px] '>
                <img src={data.image} alt="" className="max-w-[140px] transform -translate-y-20 mx-auto block drop-shadow-md group-hover:scale-105 duration-200 " />
              </div>

              {/* detail section */}

              <div className='p-4 text-center'>
                <div className='w-full flex justify-center gap-1 text-yellow-400 '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <h1 className='text-xl font-bold group-hover:text-white '>
                    {data.title}
                </h1>
                <p className='text-gray-400 group-hover:text-white text-sm line-clamp-2'>
                    {data.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts
