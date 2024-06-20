import Popular from "../sections/Popular";
import Veggie from "../sections/Veggie";
import { motion } from "framer-motion"

export default function Home () {
    return (
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
                exit={{opacity: 0}}
            >
                <Popular />
                <Veggie />
            </motion.div>
    )
}