import http from "../http-common";
import { bookProps } from "../types/bookProps";

class BookDataService {
    create(data:bookProps) {
        return http.post<Array<bookProps>>("books/addBook",data)
    }

    getAll() {
        return http.get<Array<bookProps>>("books/listOfBooks")
    }

    get(id: string) {
        return http.get<bookProps>(`/book/${id}`)
    }
}

export default new BookDataService();