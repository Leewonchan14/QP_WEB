import React, {useState} from 'react';
import WhiteShadowBox from "../WhiteShadowBox";
import ChatAndLike from "./ChatAndLike";
import ChildAnswerList from "./ChildAnswerList";
import {BASE_IMAGE} from "../../contants/BASE_IMAGE";
import MenuIconComp from "../MenuBar";
import AnswerInputComp from "./AnswerInputComp";

function AnswerList({answerState}) {
    let {
        parentAnswerList,
        listSize,
        totalPage,
        totalElements,
        isFirst,
        isLast
    } = answerState;
    return (
        <div className={"flex flex-col"}>
            {parentAnswerList.map((answer, index) => {
                return <AnswerComp key={index} answer={answer}/>
            })}
        </div>
    );

}

function AnswerComp({answer}) {

    const [isInputOpen, setIsInputOpen] = useState(false)

    const [childAnswers, setChildAnswers] = useState({
        "childAnswerList": [
            {
                "answerId": 0,
                "userId": 0,
                "nickname": "물리학과교수님2",
                "role": "USER",
                "profileImage": "string",
                "title": "string",
                "content": "날개만큼 움직인다면 가능한건가요?",
                "category": "PARENT",
                "answerGroup": 0,
                "likeCount": 0
            }
        ],
        "listSize": 0,
        "totalPage": 0,
        "totalElements": 0,
        "isFirst": true,
        "isLast": true
    })

    return (
        <WhiteShadowBox className={"mt-4 relative"}>
            <div
                className={"relative w-full flex justify-center items-center"}>
                <img src={BASE_IMAGE} alt={""} className={"w-24 h-24 rounded-full mr-10"}/>
                <div
                    className={"flex items-center font-bold text-xl break-all w-full flex-1"}>{answer.nickname}</div>
                <MenuIconComp/>
            </div>
            <div className={"mt-4"}>{answer.content}</div>
            <div className={"relative w-full h-7 mt-4"}>
                <ChatAndLike chat={3} like={0} setIsInputOpen={setIsInputOpen}/>
            </div>
            <ChildAnswerList answers={childAnswers}/>
            <AnswerInputComp isInputOpen={isInputOpen} setIsInputOpen={setIsInputOpen}/>
        </WhiteShadowBox>
    );
}

export default AnswerList;