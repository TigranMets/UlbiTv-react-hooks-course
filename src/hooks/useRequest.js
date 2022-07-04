import { useEffect, useState } from "react";

export default function (request) {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        request()
        .then(response => setData(response.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }, [])

    return [data, isLoading, error,];
};