import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonailsData = [
    {
      id: 1,
      name: "Victor",
      text: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis amet nulla iure repellendus culpa nemo earum officiis.",
      image: "https://picsum.photos/102/102",
    },
    {
      id: 2,
      name: "Satya Nadilla ",
      text: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis amet nulla iure repellendus culpa nemo earum officiis.",
      image: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Virat Kohli",
      text: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis amet nulla iure repellendus culpa nemo earum officiis.",
      image: "https://picsum.photos/104/104",
    },
    {
      id: 4,
      name: "Sachin Tendulkar",
      text: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis amet nulla iure repellendus culpa nemo earum officiis.",
      image: "https://picsum.photos/103/103",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // ✅ Correct property name
    autoplaySpeed: 2000,
    responsive :[
      {
        breakpoint : 1024,
        settings : {
          slidesToShow : 2
        },
      },
      {
        breakpoint : 768,
        settings : {
          slidesToShow : 1
        },
      },
    ]
   
  };
  return (
    <div>
      <div className="container">
        {/* header Section  */}

        <div className="  max-w-[600px] mx-auto text-center space-y-1 mb-12 ">
          <p className="text-sm text-primary">What our Customer are saying </p>
          <h1 className="text-3xl font-bold dark:text-white">Testimonials</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            eligendi!
          </p>
        </div>

        {/* card Section  */}

        <Slider {...settings}>
          {testimonailsData.map((data) => (
            <div data-aos = "zoom-in"
             className=" my-6 px-3">
              <div
                key={data.id}
                className="flex flex-col items-center sm:items-start gap-2 bg-primary/10 shadow-lg py-8 px-6 mx-auto rounded-xl dark:bg-gray-800  "
              >
                <div>
                  <img
                    src={data.image}
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-400">{data.text}</p>
                  <p className="text-xl font-bold  text-black/80 dark:text-white">
                    {data.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
