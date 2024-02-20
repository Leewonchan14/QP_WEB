import React, {useState} from 'react';
import WhiteShadowBox from "./WhiteShadowBox";
import ChatIcon from "../assets/ChatIcon.png";
import LikeIcon from "../assets/LikeIcon.png";
import ChatAndLike from "./ChatAndLike";
import ChildAnswerList from "./ChildAnswerList";
import MenuIcon from "../assets/menuIcon.png";
import {BASE_IMAGE} from "../contants/BASE_IMAGE";

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
                <img src={MenuIcon} alt={"메뉴"} className={"absolute right-0 top-0 h-5 cursor-pointer"}/>
            </div>
            <div className={"mt-4"}>{answer.content}</div>
            <div className={"relative w-full h-7 mt-4"}>
                <ChatAndLike chat={3} like={0} />
            </div>
            <ChildAnswerList answers={childAnswers}/>
        </WhiteShadowBox>
    );
}

export default AnswerList;