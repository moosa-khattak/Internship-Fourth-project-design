import React from "react";
import sale from "../../assets/Hero/sale.png";
import shopping from "../../assets/Hero/shopping.png";
import women from "../../assets/Hero/women.png";
import Slider from "react-slick";

const Hero = () => {
  const imageList = [
    {
      id: 1,
      image: women,
      title: "50% Off on all Women's Wear",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magni nostrum iusto voluptatibus natus quis tempore .",
    },
    {
      id: 2,
      image: shopping,
      title: "30% Off on all Mens Wear",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magni nostrum iusto voluptatibus natus quis tempore .",
    },
    {
      id: 3,
      image: sale,
      title: "70% Off on all product's Sale",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magni nostrum iusto voluptatibus natus quis tempore .",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // ✅ Correct property name
    autoplaySpeed: 2000,
  };
  return (
    <div className=" relative min-h-[550px] sm:min-h-[550px] overflow-hidden bg-gray-100 flex justify-center items-center duration-200 dark:bg-gray-950  dark:text-white ">
      {/* BackGround pattern */}
      {/* <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 "></div> */}

      {/* hero section  */}

      <div className="container">
        <Slider {...settings}>
          {imageList.map((items) => (
            <div key={items.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 relative z-30  ">
                {/* contant section  */}
                <div className=" flex flex-col gap-4 justify-center pt-12 sm:pt-0 order-2 text-center sm:text-left sm:order-1">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="600"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {items.title}
                  </h1>
                  <p
                  data-aos = "zoom-out"
                  data-aos-duration= "600"
                  data-aos-once = "true" className="text-sm">{items.description}</p>
                  <div>
                    {/* button  */}

                    <button 
                    data-aos="fade-up"
                    data-aos-duration = "600"
                   data-aos-once ="true"
                    className="px-5 py-2 hover:scale-105 bg-gradient-to-r from-primary/80 to-secondary rounded-3xl text-white cursor-pointer transition-all duration-200 transform">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section  */}

                <div className="order-1 sm:order-2 flex justify-center">
                  <div className="order-1 sm:order-2">
                    <img
                    data-aos = "zoom-in"
                    data-aos-duration = "600"
                      src={items.image}
                      alt=""
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:hover:scale-105 lg:hover:scale-110  object-contain mx-auto  "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
