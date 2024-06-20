/* eslint-disable react/prop-types */
import Logo from "../components/Logo";
import Search from "../components/Search";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Header () {
    
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme === 'true' ? true : false;
      });
    
      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
    
        localStorage.setItem('darkMode', darkMode);
      }, [darkMode]);

    const handleDarkMood = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="py-5 px-10 md:mx-10">
            <div className="flex justify-between items-center">
                <Logo />
                <div onClick={handleDarkMood} className="cursor-pointer dark:text-white text-2xl transition hover:bg-neutral-200 dark:hover:bg-neutral-600 linear duration-300 p-2 rounded-lg hover:border border-gray-400 ">
                    {darkMode ? <IoSunny /> : <IoMoonOutline />}
                </div>
            </div>
            <Search />
        </div>
    )
}