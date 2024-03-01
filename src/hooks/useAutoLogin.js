import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import UserController from "../api/user.controller";
import {LOGIN} from "../reducers/UserState";
import {useNavigate} from "react-router-dom";

function useAutoLogin() {
    let {isLogin} = useSelector(state => state.UserState);

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const userId = localStorage.getItem("userId");

    const auto_login = async () => {
        // 둘다 존재한다면 auto login 을 진행
        if (accessToken && refreshToken && userId) {
            let response = await UserController.auto_login({userId});
            let {isSuccess, result} = response.data;
            if (isSuccess) {
                let {accessToken, refreshToken} = result;
                dispatch({type: LOGIN, accessToken, refreshToken, userId});
                navigate("/");
            }
        }
    }

    useEffect(() => {
        if (!isLogin) {
            auto_login();
        }
    }, []);
}

export default useAutoLogin;