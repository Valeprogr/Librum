import http from "../http-common";
import { IUserData } from "../types/user.type";

class UserDataService {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    get(data:IUserData) {
        return http.get<Array<IUserData>>('user/findUser')
    }
    create(data:IUserData) {
        return http.post<Array<IUserData>>('user/createUser',data)
    }


}

export default new UserDataService();