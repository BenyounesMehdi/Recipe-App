import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

export default function Search () {

    const [inputValue, setInputvalue] = useState("") ;
    const [isChanged, setIsChanged] = useState(false)
    const navigate = useNavigate() ;

    const handleSearchInput = (e) => {
        const value = e.target.value
        setInputvalue(value)
        setIsChanged(value.trim().length > 0);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/searched/' + inputValue)
    }

    const clearInput = () => {
        setInputvalue("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="bg-neutral-600 dark:bg-white mx-auto flex items-center justify-center w-full lg:w-3/4 rounded-lg py-1">
                    <IoSearchOutline className="text-white dark:text-neutral-600 font-bold text-2xl w-fit mx-2"/>
                    <input type="text" onChange={handleSearchInput} value={inputValue} className=" text-white dark:text-black bg-transparent outline-none font-semibold w-11/12 py-2 " />
                    {
                        isChanged && inputValue.length > 0 && 
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                            exit={{opacity: 0, transition: { duration: 0.5 }}}
                        >
                            <TiDelete onClick={clearInput} className="text-white dark:text-neutral-600 font-bold text-3xl w-fit mx-2 cursor-pointer"/>
                        </motion.div>
                    }
                </div>
            </form>
        </>
    )
}