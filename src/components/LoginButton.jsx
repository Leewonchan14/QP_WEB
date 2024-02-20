import React from 'react';
import ImageBox from "./ImageBox";
import "../styles/LoginStyle.css"

function LoginButton({icon, text, onClick, color, textColor}) {
    const loginButtonStyle = {
        backgroundColor: color,
    }
    const textStyle = {
        color: textColor,
    }
    return (
        <div className={"cursor-pointer flex p-4 rounded-3xl w-1/3 min-w-64 max-w-96"} style={loginButtonStyle} onClick={onClick}>
            <ImageBox image={icon} width={"30px"} height={"30px"}/>
            <p className={"text-center flex-1 font-bold text-xl"} style={textStyle}>{text}</p>
        </div>
    );
}

export default LoginButton;