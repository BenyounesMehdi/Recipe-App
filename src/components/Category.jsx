import { motion } from 'framer-motion'

/* eslint-disable react/prop-types */
export default function Category ({category, icon, className}) {
    console.log(className)
    return (
        <motion.div 
            initial={{scale: 1}}
            whileHover={{scale: 1.2}}
            transition={{duration: 0.2}}
            className= "flex flex-col gap-1 p-2 items-center">
            <div className= {`${className} bg-neutral-600 dark:bg-white w-fit text-white dark:text-neutral-600 text-2xl p-2 rounded-full `}>
                {icon}
            </div>
            <p className="font-semibold dark:text-white">{category}</p>
        </motion.div>
    )
}