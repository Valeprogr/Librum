import http from "../http-common";
import { IUserData } from "../types/user.type";


class CartDataService {

    get(data: any) {
        return http.get<Array<IUserData>>('user/cartBooks', data)
    }

    post(data:IUserData) {
        return http.post<Array<IUserData>>('user/cartAddBook', data)
    }

    delete(data: any) {
        return http.delete<Array<IUserData>>('user/cartDeleteBook', data)
    }
}

export default new CartDataService();