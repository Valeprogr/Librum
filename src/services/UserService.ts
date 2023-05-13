import http from "../http-common";
import { IUserData } from "../types/user.type";

class UserDataService {
    get(data:IUserData) {
        return http.get<Array<IUserData>>('user/findUser')
    }
    create(data:IUserData) {
        return http.post<Array<IUserData>>('user/createUser',data)
    }


}

export default new UserDataService();