import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [isLoading,setIsLoading] = useState(true)
    const [data,setData] = useState([])
    const [isError,setIsError] = useState(false)

    useEffect(() => {

        const fetcher = async () => {

            try {
                const response = await fetch(url)
                
                if (!response.ok)
                return 

                const data = await response.json()
                setData(data)
                setIsLoading(false)
            } catch (error) {
                setIsError(true)
                setIsLoading(false)
            }

        }

        fetcher()
    },[])

    return {isError , isLoading , data}
}

export default useFetch