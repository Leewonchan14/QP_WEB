import React, {useEffect, useState} from 'react';
import QuestionController from "../api/question.controller";
import HashTagList from "./HashTag";
import {useNavigate} from "react-router-dom";
import {BASE_IMAGE} from "../contants/BASE_IMAGE";
import {useSelector} from "react-redux";

function QuestionGridList({questionState}) {

    let {width} = useSelector(state => state.LayoutState);

    const {
        questions,
        listSize,
        totalPage,
        totalElements,
        first,
        last
    } = questionState;

    let gridColClass = "grid-cols-3";
    console.log(width);
    if (width < 1200) {
        gridColClass = "grid-cols-2";
        if (width < 768) {
            gridColClass = "grid-cols-1";
        }
    } else{
        gridColClass = "grid-cols-3";
    }

    return <>
        <div className={"mb-8 flex justify-center text-2xl font-bold"}>총 {listSize}개의 질문이 있습니다.</div>
        <div className={`grid gap-2 ${gridColClass}`}>
            {questions.map((question, index) => {
                return <QuestionComp key={index} question={question}/>
            })}
        </div>
    </>
}

function QuestionComp({question}) {

    const [onHover, setOnHover] = useState(false);

    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/questions/${question.questionId}`);
    }

    const onMouseOver = (value) => {
        setOnHover(value);
    }


    const CovertDate = (date) => {
        let dateObj = new Date(date);
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth() + 1;
        let day = dateObj.getDate();
        let hour = dateObj.getHours();
        let minute = dateObj.getMinutes();
        let ampm = "am";
        if (hour > 12) {
            hour -= 12;
            ampm = "pm";
        }
        return `${year}. ${month}. ${day}. ${hour}:${minute}${ampm}`;
    }

    return (
        <div className={"rounded-3xl flex flex-col border-4 w-full h-96 p-4 cursor-pointer " +
            (onHover ? "bg-gradient-to-b from-amber-500 to-amber-600 text-white" : "")
        } onClick={onClick} onMouseOver={() => onMouseOver(true)} onMouseOut={() => onMouseOver(false)}>
            <div className={"w-full flex justify-center items-center"}>
                <img draggable="false" src={BASE_IMAGE} alt={""} className={"w-24 h-24 rounded-full"}/>
                <div className={"flex flex-col flex-1"}>
                </div>
            </div>
            <div className={"text-sm"}>{CovertDate(question.createdAt)}</div>
            <div className={"font-bold text-2xl break-all w-full flex-1"}>{question.title}</div>
            <div>

            </div>
            <HashTagList tags={question.hashtags}/>
        </div>
    );
}

export default QuestionGridList;