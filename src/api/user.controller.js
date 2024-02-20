import {Api} from "./common.controller";

class UserController extends Api {
    signUp = async ({accessToken=""}) => {
        return await this.get(`/users/sign_up?accessToken=${accessToken}`);
    }
}

export default new UserController();