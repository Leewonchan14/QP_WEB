import {Api} from "./common.controller";

class UserController extends Api {
    signUp = async ({accessToken = ""}) => {
        return await this.get(`/users/sign_up?accessToken=${accessToken}`);
    }

    auto_login = async ({userId}) => {
        return await this.post("/users/auto_sign_in", {data: userId});
    }
}

export default new UserController();