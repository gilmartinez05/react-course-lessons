import { useEffect } from 'react'
import { useFetch } from './useFetch'
const KEY = 'live_pZmEg8exaC1Ez0lGVmlITt0X0IAO022LREZKpnE1Vj1naLLVPScRgQPcnGCidds7'
export const useCats = () => {

    const { isLoading, data, fetchData, error, setError } = useFetch({
        url: `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${KEY}`
    })

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {
        cats: data, isLoading
    }

}

//fetch
//axios
//grapql