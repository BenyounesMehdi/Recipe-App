import { IoSearchOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function NotFound () {
    return (
        <div className=" flex flex-col justify-center items-center w-full">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: [-50, 50] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
                <IoSearchOutline className="dark:text-white text-7xl font-bold" />
            </motion.div>
            <p className="text-neutral-700 dark:text-white font-semibold text-xl">No Results Found.</p>
        </div>
    )
}