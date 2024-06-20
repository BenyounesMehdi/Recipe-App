/* eslint-disable react-hooks/exhaustive-deps */
import Carousel from "../components/Carousel";
import ErrorCard from "../components/ErrorCard";
import SectionTitle from "../components/SectionTitle";
import Spinner from "../components/Spinner";
import { BASE_URL, API_KEY } from '../constants/constants'
import useFetch from "../hooks/useFetch";

export default function Popular () {

    const number = 12
    const URL = `${BASE_URL}?apiKey=${API_KEY}&number=${number}`
    
    const { data, isLoading, error } = useFetch(URL);

    const displayPopularRecipes = () => {
        if (data && data.recipes) return <Carousel recipes={data.recipes} />;
            return null; 
    };

    if(isLoading) return <Spinner />
    if(error) return <ErrorCard error={error} />

    return (
        <>
            <div className="px-5 mt-10">
                <SectionTitle title="Popular" />
                <div>
                    {displayPopularRecipes()}
                </div>
            </div>
        </>
    )
}