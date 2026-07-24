import { useEffect, useState } from "react";
import apiClient from "../api/axios"


export const useFetch = (endpoint) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect (() =>{
        const fetchData = async () => {
            try {
                setLoading (true);
                setError (null);

                const res = await apiClient.get(endpoint);
                setData (res.data.results ? res.data.results : res.data);
                console.log(res.data.results)

            } catch (err) {
                console.error(`>Ha habido un problema con ${endpoint}:`, err);
                setError(err.message || "Ha habido un problema con la API");
            } finally{
                setLoading(false);
            }
        };
        fetchData()
    }, [endpoint]);
    return {data, loading, error};
};