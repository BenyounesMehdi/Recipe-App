import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import Category from "../components/Category"
import { NavLink } from "react-router-dom"


export default function Categories () {

    const categories = [
        {category: "Itlian", icon: <FaPizzaSlice />, path: "/cusine/italian"},
        {category: "American", icon: <FaHamburger />, path: "/cusine/american" },
        {category: "Thai", icon: <GiNoodles /> , path: "/cusine/thai" },
        {category: "Japanese", icon: <GiChopsticks /> , path: "/cusine/japanese" }
    ]

    const displayCategories = () => {
        return categories.map(({category, icon, path}, key) => {
            return <NavLink 
                        to={path}  
                        key={key} 
                        className={({ isActive }) => 
                            isActive ? 'active' : ''
                        }
                    >
                    {({ isActive }) => (
                        <Category 
                            category={category} 
                            icon={icon} 
                            className={isActive ? 'bg-orange-500 dark:bg-orange-400' : ''}
                        />
                    )}
            </NavLink>
        })
    }

    return (
        <div 
            className="mt-5 flex justify-center items-center gap-3">
            {displayCategories()}
        </div>
    )
}