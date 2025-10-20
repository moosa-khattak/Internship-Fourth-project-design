import React, { useEffect, useState } from 'react'
import lightMode from "../../assets/Website/lightMode.png"
import darkMode from "../../assets/Website/darkMode.png"


const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("dark") ? localStorage.getItem("dark") : "light"
  );
  const element = document.documentElement
  console.log(element)
  
    useEffect(()=>{
        localStorage.setItem("theme" , theme)
   if(theme==="dark"){
       element.classList.add("dark")

   }else{
       element.classList.remove("dark")

   }
    })

  return (
    <div className="relative mt-1 cursor-pointer  ">
      <img
        onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
        src={lightMode}
        alt=""
        className={`w-14 ${
          theme === "dark" ? "opacity-0 " : "opacity-100"
        } drop-shadow-[1px_1px_1px_(0,0,0,.1)]  `}
      />

      <img
        onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
        src={darkMode}
        alt=""
        className={`w-14 absolute top-0 ${
          theme === "light" ? "opacity-0 " : "opacity-100"
        } `}
      />
    </div>
  );
}

export default DarkMode
