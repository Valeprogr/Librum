import http from "../http-common";
import { IUserData } from "../types/user.type";


class CartDataService {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(data: any) {
        return http.get<Array<IUserData>>('user/cartBooks', data)
    }

    post(data:IUserData) {
        return http.post<Array<IUserData>>('user/cartAddBook', data)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete(data: any) {
        return http.delete<Array<IUserData>>('user/cartDeleteBook', data)
    }
}

export default new CartDataService();