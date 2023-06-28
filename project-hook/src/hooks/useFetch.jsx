import { useState } from 'react'

export const useFetch = ({ url, method = 'GET' }) => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchData = () => {
        return fetch(url, { method }).then(response => response.json()).then(data => {
            setData(data)
        }).catch(err => {
            setError(err.message)
        }).finally(() => {
            setIsLoading(false)
        })

    }
    return {
        isLoading, data, fetchData, error,setError
    }
}