/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import { COMPLEX_SEARCH, API_KEY } from "../constants/constants" 
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorCard from "../components/ErrorCard";
import NotFound from "../components/NotFound";
import { motion } from "framer-motion";

export default function Searched () {

    const params = useParams().search

    const URL = `${COMPLEX_SEARCH}?apiKey=${API_KEY}&query=${params}`
    
    const { data, isLoading, error } = useFetch(URL);
    

    const displaySearchedRecipes = () => {
        if(data){
            if(data.results.length > 0) {
                return data.results.map(({title, image, id}) => {
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
            }
            return <NotFound />
        } 
        return null;
    }

    if(isLoading) return <Spinner />
    if(error) return <ErrorCard error={error} />

    return (
        <div className={`mt-10 ${data && data.results.length > 0 ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-3 px-5' : 'flex justify-center items-center'}`}>
        {displaySearchedRecipes()}
    </div>
    )
}