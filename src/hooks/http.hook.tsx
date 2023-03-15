import { useCallback,useState } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<{} | null>(null);


    const request = useCallback(async (url: any, method = 'GET', body: any) => {
        try {
            setLoading(true)
            if (body) {
                body = JSON.stringify({email: body, books: body});
                
            }
            let headers = { 'Content-Type': 'application/json' };
            const response = await fetch(url, { method, body, headers })
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            setLoading(false)
            return data;
        } catch (err:any) {
            setLoading(false)
            setError( { message: err.message, status: err.name.toLowerCase() });
          throw error
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    },[])

    return {request, loading, error, clearError}
}