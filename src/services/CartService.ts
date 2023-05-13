import http from "../http-common";
import { IUserData } from "../types/user.type";


class CartDataService {

    get(data: any) {
        return http.get<Array<IUserData>>('user/cartBooks', data)
    }

    post(data:IUserData) {
        return http.post<Array<IUserData>>('user/cartAddBook', data)
    }
}

export default new CartDataService();