/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { SEARCH_RECIPE, API_KEY } from '../constants/constants' 
import Button from "../components/Button";
import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import { motion } from "framer-motion"
import Spinner from "../components/Spinner";
import ErrorCard from "../components/ErrorCard";
import useFetch from "../hooks/useFetch";

const animation = () => ({
    initial: {opacity: 0, x: -100},
    animate: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.5}
    },
    exit: {
        opacity: 0, 
        x: -100,
        transition: {duration: 0.5}
    }
})

export default function Recipe () {

    const params = useParams().recipeId
    const [activeTab, setActiveTab] = useState("Instructions")

    const URL = `${SEARCH_RECIPE}/${params}/information?apiKey=${API_KEY}`
    
    const { data, isLoading, error } = useFetch(URL);


    const displayRecipeDetails = () => {
        if (data) 
            return (
            <motion.div
                key={activeTab} 
                variants={animation()}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {activeTab === "Instructions" ?
                    <Instructions summary={data.summary} instructions={data.instructions} />
                    :
                    <Ingredients Ingredients={data.extendedIngredients} />
                }
            </motion.div>
        );
        return null;
    };

    if(isLoading) return <Spinner />
    if(error) return <ErrorCard error={error} />

    return(
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5}}
            exit={{opacity: 0}}
            className="pb-5 px-5">
            <div className=" mt-10 flex flex-col xl:flex-row justify-center  items-center gap-5 xl:gap-2">
                <div className="w-full lg:w-1/2  ">
                    {data && (
                        <>
                            <p className="font-semibold text-xl dark:text-white">{data.title}</p>
                            <div className="flex justify-center items-center">
                                <img src={data.image} className="object-cover rounded-lg mt-3" alt={data.title} />
                            </div>
                        </>
                    )}
                </div>
                <div className="w-full lg:w-1/2  flex flex-col justify-between py-5 relative">
                    <div className="flex justify-center items-center gap-2 ">
                        <Button title="Instructions" onClick={() => setActiveTab("Instructions")} activeTab={activeTab} />
                        <Button title="Ingredients" onClick={() => setActiveTab("Ingredients")} activeTab={activeTab} />
                    </div>
                    
                    <div className="mt-3 h-[300px] overflow-y-scroll dark:text-white">
                        {displayRecipeDetails()}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}