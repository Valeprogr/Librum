import http from "../http-common";
import { IUserData } from "../types/user.type";


class CartDataService {

    get(data: unknown) {
        return http.get<Array<IUserData>>('user/cartBooks', data)
    }

    post(data:IUserData) {
        return http.post<Array<IUserData>>('user/cartAddBook', data)
    }

    delete(data: unknown) {
        return http.delete<Array<IUserData>>('user/cartDeleteBook', data)
    }
}

export default new CartDataService();