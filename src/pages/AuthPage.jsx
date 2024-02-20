import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import UserController from "../api/user.controller";
import {INIT_USER} from "../reducers/UserState";
import {Navigate, useNavigate} from "react-router-dom";

function AuthPage(props) {

    // let {userId, accessToken, refreshToken} = useSelector(state => state.UserState);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const signUp = async () => {
        const location = window.location;

        const params = new URLSearchParams(location.search);

        let kakaoCode = params.get("code");

        let data = {
            "grant_type": "authorization_code",
            "client_id": "9c0435350e0714d02ef07e6bccb168ab",
            code: kakaoCode,
        };

        let response = await axios.post("https://kauth.kakao.com/oauth/token", data, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        });
        let ret = await UserController.signUp({accessToken: response.data.access_token});

        let {isSuccess, result} = ret.data;
        let {isNew} = result;
        if (isSuccess) {
            if (isNew) {
                // 프로필 수정 페이지로 이동
                // navigate("/profile");
            }
            // 여기에 userId, accessToken, refreshToken을 저장하는 코드를 작성해야 함 (recoil 사용하는 것으로 알고있음)
            dispatch({type: INIT_USER, ...result});
        } else {
            console.log("Login Failed");
        }
        navigate("/");
    }

    useEffect(() => {
        signUp();
    }, []);

    return (
        <div></div>
    );
}

export default AuthPage;