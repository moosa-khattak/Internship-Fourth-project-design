import React from 'react'
import footer from "../../assets/Website/footer-pattern.jpg";
import logo from "../../assets/Logo/logo.png"
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const bannerImag ={
        backgroundImage : `url(${footer})`,
        backgroundPosition : "bottom",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover ",
        width : "100%",
        height : "100%"

    }

    const footerLink =[
    {
        name : "Home" ,
        href : "/#"
    },
    {
        name : "About" ,
        href : "/#about"
    },
    {
        name : "Contact" ,
        href : "/#contact"
    },
    {
        name : "Blogs" ,
        href : "/#blog"
    },
    ]
  return (
    <footer>
      <div  style={bannerImag} className="">
        <div className="container">
          <div data-aos = "zoom-in" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5  pb-44 pt-5">
            {/* contant section   */}
            <div className=" text-white">
              <div className="flex sm:text-left text-justify items-center gap-3 mb-3">
                <img src={logo} alt="" className="max-w-[50px]" />
                <h1 className="text-white text-xl sm:text-3xl font-bold">
                  Shopsy
                </h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quisquam sint numquam cumque maxime laboriosam.
              </p>
            </div>

            {/* link section  */}

            <div className="pb-5 md:ml-15">
              <h1 className="text-white text-xl sm:text-3xl pb-2 pt-2 font-semibold ">
                Important link
              </h1>
              <ul className="text-white space-y-2">
                {footerLink.map((link, index) => (
                  <li key={index} className="hover:translate-x-1 duration-300 ">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pb-5 md:text-center">
              <h1 className="text-white text-xl sm:text-3xl pb-2 pt-2 font-semibold ">
                links
              </h1>
              <ul className="text-white space-y-2">
                {footerLink.map((link, index) => (
                  <li key={index} className="hover:translate-x-1 duration-300 ">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* address  */}

            <div className='pt-5'>
              <div className="text-white flex items-center gap-3 text-3xl pb-4">
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaFacebook />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
              </div>

              <div>
                <div className='text-white flex items-center gap-2'>
                    <FaLocationArrow />
                    <p>Peshawer</p>
                </div>
                <div className='text-white flex items-center pt-3'>
                    <FaMobileAlt />
                    <p>03181822395</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
