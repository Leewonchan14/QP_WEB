import React, {useEffect, useRef, useState} from 'react';
import WhiteShadowBox from "../WhiteShadowBox";
import {BASE_IMAGE} from "../../contants/BASE_IMAGE";
import X_ICON from "../../assets/x.png";

function AnswerInputComp({isInputOpen, setIsInputOpen, ...rest}) {

    const inputComp = useRef(null);
    const scrollComp = useRef(null);

    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onClick = () => {
        setIsInputOpen(false);
    }

    useEffect(() => {
        console.log(isInputOpen);
        if (isInputOpen) {
            scrollComp.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    }, [isInputOpen]);

    return (
        <div ref={scrollComp} className={"mt-4 " + (isInputOpen ? "block" : "invisible h-0")}>
            <WhiteShadowBox>
                <div
                    className={"relative w-full flex justify-center items-center"}>
                    <img src={BASE_IMAGE} alt={""} className={"w-24 h-24 rounded-full mr-10"}/>
                    <div
                        className={"flex items-center font-bold text-xl break-all w-full flex-1"}>
                        nickname
                    </div>
                    <img src={X_ICON} alt={""} className={"absolute h-5 right-0 top-0 cursor-pointer"}
                         onClick={onClick}/>
                </div>
                {/* 답변 입력창 */}
                <div className={"w-full mt-4 relative"}>
                <textarea onChange={onChange}
                          ref={inputComp}
                          className={"w-full h-36 border-2 rounded-2xl p-4 resize-none outline-none bg-gray-200"}
                          placeholder={"답변을 입력해주세요."}/>
                    <div className={"absolute right-4 bottom-4 text-lg"}>{input.length}자</div>
                </div>
            </WhiteShadowBox>
            <div className={"w-full flex justify-center mt-4 " + (isInputOpen ? "block" : "hidden")}>
                <p className={"shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] w-48 h-12 bg-white flex justify-center items-center" +
                    " font-bold text-amber-600 rounded-full text-xl cursor-pointer"}>
                    등록
                </p>
            </div>
        </div>
    );
}

export default AnswerInputComp;