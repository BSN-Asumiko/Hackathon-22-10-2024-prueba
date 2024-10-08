import { useState, useEffect } from "react";

const useApi = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            setLoading(true);
            setError(null);
            try {
                console.log("Fetching URL:", url);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
                console.log("Activities fetched:", jsonData); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (url) {
            fetchData(url);
        }
        
    }, [url]);

    return { data, loading, error };
};

export default useApi;
