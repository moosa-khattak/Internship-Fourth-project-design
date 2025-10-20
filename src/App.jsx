import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from "./Components/Hero/Hero.jsx"
import Product from './Components/Products/Product.jsx'
import TopProducts from './Components/TopRatedProducts/TopProducts.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Subscribe from "./Components/Subscribe/Subscribe.jsx"
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Aos from 'aos'
import "aos/dist/aos.css";


const App = () => {

  useEffect(() => {
   Aos.init({
    
     easing : "ease-in-sine",
     duration: 800,
     mirror:false ,
     offset : 100,
     delay : 100
   })
   Aos.refresh()
},[])
  
  return (
    <div className='dark:bg-gray-950 overflow-hidden'>
      <Navbar />
      <Hero />
      <Product />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Product />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
