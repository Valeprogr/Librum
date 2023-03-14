import { useCallback } from "react";

export const useHttp = () => {
    const request = useCallback(async (url: any, method = 'GET', body: any) => {
        try {
            if (body) {
                body = JSON.stringify({email: body, books: body});
                
            }
            let headers = { 'Content-Type': 'application/json' };
            const response = await fetch(url, { method, body, headers })
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            return data;
        } catch (error) {
          throw error
        }
    }, []);

    return {request}
}