import http from "../http-common";
import { bookProps } from "../types/BookProps";

class BookDataService {
    create(data:bookProps) {
        return http.post<Array<bookProps>>("books/addBook",data)
    }

    getAll() {
        return http.get<Array<bookProps>>("books/listOfBooks")
    }

    get(id: string) {
        return http.get<bookProps>(`books/book/${id}`)
    }
    patch(data:bookProps, id: string) {
        return http.patch<string>(`books/editBook/${id}`, data)
    }

    delete(id: string) {
        return http.delete<string>(`books/deleteBook/${id}`)
    }
}

export default new BookDataService();