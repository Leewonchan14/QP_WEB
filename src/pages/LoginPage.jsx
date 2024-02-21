import React from 'react';
import OrangeBox from "../components/OrangeBox";
import QpLogo from "../components/QPLogo";
import SizeBOX from "../components/SizeBOX";
import LoginButton from "../components/LoginButton";
import NaverLogo from '../assets/NaverLogo.png';
import KakaoLogo from '../assets/KakaoLogo.png';
import GoogleLogo from '../assets/GoogleLogo.png';
import Xlogo from '../assets/x.png';
import "../styles/LoginStyle.css"
import "../index.css"
import {useNavigate} from "react-router-dom";


function LoginPage({}) {

    let navigate = useNavigate();

    let REDIRECT_URI = window.location.origin + "/auth/kakao/login";
    let REST_API_KEY = "9c0435350e0714d02ef07e6bccb168ab";
    let responseType = "code";

    const onClickKakao = () => {
        console.log("Kakao Clicked");
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=${responseType}`;
    }

    return (
        <OrangeBox className={"border-[4rem]"}>
            <div className={"loginPageStyle relative"}>
                <img draggable="false" src={Xlogo} alt={""} onClick={() => {
                    navigate("/");
                }} className={"cursor-pointer absolute right-10 top-8 w-10 h-10 object-contain"} />
                <QpLogo className={"w-28 h-28 mb-[5%] mt-[5%]"}/>
                <div className={"buttonListStyle"}>
                    <LoginButton icon={NaverLogo} color={"#00C73C"} text={"네이버로 간편 가입하기"} textColor={"white"}/>
                    <SizeBOX height={"5%"}/>
                    <LoginButton icon={KakaoLogo} color={"#FFD740"} text={"카카오로 간편 가입하기"} textColor={"black"} onClick={onClickKakao}/>
                    <SizeBOX height={"5%"}/>
                    <LoginButton icon={GoogleLogo} color={"#EEEEEE"} text={"구글로 간편 가입하기"} textColor={"black"}/>
                </div>
                <SizeBOX height={"5%"}/>
                <p className={"expertTextStyle"}>전문가 이신가요?
                    <a className={"expertLinkStyle"} href={""}>  전문가 계정으로 로그인 하기</a>
                </p>
                <SizeBOX height={"5%"}/>
            </div>
        </OrangeBox>
    );
}

export default LoginPage;