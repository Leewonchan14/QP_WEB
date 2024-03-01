import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import UserController from "../api/user.controller";
import {LOGIN} from "../reducers/UserState";

function useLogin() {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const kakaoLogin = async () => {
        const location = window.location;

        const params = new URLSearchParams(location.search);

        let kakaoCode = params.get("code");

        let data = {
            "grant_type": "authorization_code",
            "client_id": "9c0435350e0714d02ef07e6bccb168ab",
            code: kakaoCode,
        };

        return await axios.post("https://kauth.kakao.com/oauth/token", data, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        });
    }

    const signUp = async () => {
        let response = await kakaoLogin();

        let ret = await UserController.signUp({accessToken: response.data.access_token});

        let {isSuccess, result} = ret.data;
        if (isSuccess) {
            let {userId, accessToken, refreshToken} = result;
            if (result.isNew) {
                // 프로필 수정 페이지로 이동
                // navigate("/profile");
            }
            // 여기에 userId, accessToken, refreshToken 을 저장하는 코드를 작성해야 함
            dispatch({type: LOGIN, userId, accessToken, refreshToken, isLogin: true});
            storeToken(accessToken, refreshToken, userId);
        } else {
            console.log("Login Failed");
        }
        navigate("/");
    }


    const storeToken = (accessToken, refreshToken, userId) => {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("userId", userId);
    }
    useEffect(() => {
        signUp();
    }, []);
}

export default useLogin;