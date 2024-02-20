import React from 'react';
import {useNavigate} from "react-router-dom";

function MainLoginButton({className}) {
    let navigate = useNavigate();
    const onClick = () => {
        navigate("/login");
    }
    return (
        <div onClick={onClick} className={className + " rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex justify-center items-center text-white font-bold text-2xl " +
            "cursor-pointer"}>
            로그인 하기
        </div>
    );
}

export default MainLoginButton;