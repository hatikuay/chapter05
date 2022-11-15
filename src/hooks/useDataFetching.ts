import { useState, useEffect } from "react";

const useDataFetching = (dataSource: string) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const myData = await fetch(dataSource);
                const result = await myData.json();
                if (result) {
                    setData(result);
                    setLoading(false);
                }
            } catch (e: any) {
                setLoading(false)
                setError(e.message);
            }
        }
        fetchData();

    }, [dataSource]);
    return [loading, error, data]
}

export default useDataFetching;