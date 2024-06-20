/* eslint-disable react-hooks/exhaustive-deps */
import Carousel from "../components/Carousel";
import ErrorCard from "../components/ErrorCard";
import SectionTitle from "../components/SectionTitle";
import Spinner from "../components/Spinner";
import { BASE_URL, API_KEY } from '../constants/constants'
import useFetch from "../hooks/useFetch";

export default function Veggie () {

    const number = 12
    const URL = `${BASE_URL}?apiKey=${API_KEY}&number=${number}&tags=vegetarian`

    const { data, isLoading, error } = useFetch(URL)

    const displayVeggieRecipes = () => {
        if(data && data.recipes) return <Carousel recipes={data.recipes} />
         return null
    }

    if(isLoading) return <Spinner />
    if(error) return <ErrorCard error={error} />

    return (
        <>
            <div className="px-5">
                <SectionTitle title="Vegetarian" />
                <div className="">
                    {displayVeggieRecipes()}
                </div>
            </div>
        </>
    )
}