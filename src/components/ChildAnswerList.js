import React from 'react';
import WhiteShadowBox from "./WhiteShadowBox";
import {BASE_IMAGE} from "../contants/BASE_IMAGE";
import MenuIconComp from "./MenuBar";

function ChildAnswerComp({answer}) {

    return (
        <WhiteShadowBox className={"relative shadow-[inset_0px_0px_16px_rgba(0,0,0,0.3)]"}>
            <div
                className={"relative w-full flex justify-center items-center"}>
                <img src={BASE_IMAGE} alt={""} className={"w-24 h-24 rounded-full mr-10"}/>
                <div
                    className={"flex items-center font-bold text-xl break-all w-full flex-1"}>{answer.nickname}</div>
                <MenuIconComp />
            </div>
            <div className={"mt-4"}>{answer.content}</div>
        </WhiteShadowBox>
    );
}

function ChildAnswerList({answers}) {
    const {
        childAnswerList,
        listSize,
        totalPage,
        totalElements,
        first,
        last
    } = answers;
    return (
        <div className={"flex flex-col mt-4"}>
            {childAnswerList.map((answer, index) => {
                return <ChildAnswerComp key={index} answer={answer}/>
            })}
        </div>
    );
}

export default ChildAnswerList;