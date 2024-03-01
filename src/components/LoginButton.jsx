import React from 'react';
import ImageBox from "./ImageBox";

function LoginButton({icon, text, onClick, color, textColor}) {
    return (
        <div className={`cursor-pointer flex p-5 pl-10 rounded-3xl w-1/3 min-w-64 max-w-[30rem]`}
             style={{backgroundColor: color}}
             onClick={onClick}>
            <ImageBox image={icon} width={"30px"} height={"30px"}/>
            <p className={"flex justify-center items-center flex-1 font-bold text-xl"}
               style={{color: textColor}}>{text}</p>
        </div>
    );
}

export default LoginButton;