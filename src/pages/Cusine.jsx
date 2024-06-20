/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom"
import { COMPLEX_SEARCH, API_KEY } from "../constants/constants"
import Card from "../components/Card"
import ErrorCard from "../components/ErrorCard"
import { motion } from "framer-motion"
import useFetch from "../hooks/useFetch"
import Spinner from "../components/Spinner"

export default function Cusine () {

    const category = useParams().category

    const URL = `${COMPLEX_SEARCH}?apiKey=${API_KEY}&cuisine=${category}`
    
    const { data, isLoading, error } = useFetch(URL);
    
    const displayCategoryRecipes = () => {
        if(data && data.results) 
            return (
                data.results.map(({title, image, id}) => {
                    return <motion.div 
                    initial={{scale: 1}}
                    whileHover={{scale: 1.07, opacity: 0.5}}
                    transition={{duration: 0.5}}
                    key={id}>
                        <Link  to={"/recipe/" + id}>
                            <Card title={title} image={image} />
                    </Link>
                    </motion.div>
                })
            )
         return null
    }

    if(isLoading) return <Spinner />
    if(error) return <ErrorCard error={error} />

    return (
        <div>
            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-5  px-5">
                {displayCategoryRecipes()}
            </motion.div>
        </div>
    )
}