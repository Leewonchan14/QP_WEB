import React, {useState} from 'react';
import CoinIcon from "../assets/CoinIcon.png";
import {BASE_IMAGE} from "../contants/BASE_IMAGE";
import AlarmOn from "../assets/AlarmOnIcon.png";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LOGOUT} from "../reducers/UserState";

function MyPageButton(props) {
    const [user, setUser] = useState({
        "nickname": "string",
        "profileImage": "string",
        "email": "string",
        "gender": "MALE",
        "role": "USER",
        "point": 0,
        "createdAt": "2024-02-19T10:46:10.259Z"
    })

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const logout = () => {
        dispatch({type: LOGOUT, navigate});
    }

    const goProfile = () => {
        navigate("/profile");
    }

    return (
        <div
            className={"absolute h-[32rem] right-0 flex flex-col items-center text-white font-bold"}>
            <div
                className={"w-full h-[24rem] rounded-[2rem] bg-gradient-to-r from-amber-500 to-amber-600 text-2xl flex flex-col justify-center items-center p-[10%] mb-10"}>

                {/*로그아웃 버튼*/}
                <div className={"w-full flex justify-end text-white text-sm mb-4"}>
                    <span className={"cursor-pointer"} onClick={logout}>로그아웃</span>
                </div>

                {/*프로필 이미지*/}
                <div onClick={goProfile} className={"w-full flex justify-center items-center mb-4 cursor-pointer"}>
                    <img draggable={"false"} src={BASE_IMAGE} alt="이미지" className={"w-24 h-24 rounded-full"}/>
                </div>

                {/*닉네임*/}
                <div onClick={goProfile} className={"mb-4 cursor-pointer"}>큐피</div>

                {/*포인트*/}
                <div className={"flex mb-4"}>
                    <img draggable={"false"} src={CoinIcon} alt="코인"/>
                    100P
                </div>

                {/*프로필 가기 버튼*/}
                <div
                    onClick={goProfile}
                    className={"bg-white rounded-full text-amber-600 h-12 w-full flex justify-center items-center text-sm cursor-pointer"}>충전하러
                    가기
                </div>
            </div>

            {/*알람 버튼*/}
            <div className={"p-4"}>
                <div className={"h-[8rem] w-[8rem] bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"}>
                    <img draggable={"false"} className={"h-full w-full p-8"} src={AlarmOn} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default MyPageButton;