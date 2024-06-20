/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useFetch (url)  {
    const [data, setData] = useState(null) ;
    const [isLoading, setIsLoading] = useState(false) ;
    const [error, setError] = useState(null) ;

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await fetch(url)

            if (response.status === 402) {
                throw new Error('Rate limit exceeded');
            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setData(responseData);
        }
        catch (e) {
            if (e.message === 'Rate limit exceeded') {
                setError('You have reached the maximum number of API calls. Please try again later.');
            } 
            else {
                setError('Failed to fetch data. Please try again later.');
            }
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(()  => {
        fetchData()
    }, [url])

    return { data, isLoading, error }
}

export default useFetch;