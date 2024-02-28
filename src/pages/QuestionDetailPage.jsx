import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import HashTagList from "../components/HashTag";
import WhiteShadowBox from "../components/WhiteShadowBox";
import AlarmIcon from "../assets/AlarmIcon.png";
import AnswerList from "../components/AnswerComp";
import {BASE_IMAGE} from "../contants/BASE_IMAGE";
import NextArrow from "../assets/nextArrow.png"
import MenuIconComp from "../components/MenuBar";

function AdjacentQuestion({adjacent}) {

    let navigate = useNavigate();

    function AdjacentQuestionItem({hasQuestion, title, questionId, direction}) {
        const onClick = () => {
            navigate(`/questions/${questionId}`)
        }
        return (
            <div onClick={onClick}
                 className={"flex items-center h-full cursor-pointer " + (hasQuestion ? "" : "invisible")}>
                {direction === "left" && <img src={NextArrow} alt="화살표" className={"h-full mr-4"}/>}
                {title}
                {direction === "right" && <img src={NextArrow} alt="화살표" className={"h-full ml-4 scale-[-1]"}/>}
            </div>
        )
    }


    return (
        <div className={"mb-8 flex justify-center text-lg font-bold px-4"}>
            <AdjacentQuestionItem {...adjacent.laterQuestion} hasQuestion={adjacent.hasLater} direction={"left"}/>
            <div className={"flex-1"}/>
            <AdjacentQuestionItem {...adjacent.olderQuestion} hasQuestion={adjacent.hasOlder} direction={"right"}/>
        </div>
    )
}


function QuestionDetailPage({user}) {

    let {questionId} = useParams();

    const [question, setQuestion] = useState({
        "questionId": 0,
        "title": "사람은 왜 날 수 없을까요?",
        "content": "날개가 없어서 그럴까요? 팔을 날개처럼 꾸며도 날 수 없을까요?",
        "childStatus": "ACTIVE",
        "hashtags": [
            {
                "hashtagId": 0,
                "hashtag": "string"
            }
        ],
        "createdAt": "2024-02-18T13:50:08.113Z",
        "updatedAt": "2024-02-18T13:50:08.113Z"
    })

    const [answers, setAnswers] = useState({
        "parentAnswerList": [
            {
                "answerId": 0,
                "userId": 0,
                "nickname": "경제학과교수님1",
                "role": "USER",
                "profileImage": "string",
                "title": "string",
                "content": "네 맞습니다. 사람은 날 수 없어요.\n" +
                    "팔을 날개처럼 꾸며도 날개만큼 움직여야 하기 때문에 너무나 힘들 거에요. ",
                "category": "PARENT",
                "answerGroup": 0,
                "likeCount": 0
            },
            {
                "answerId": 0,
                "userId": 0,
                "nickname": "경제학과교수님1",
                "role": "USER",
                "profileImage": "string",
                "title": "string",
                "content": "네 맞습니다. 사람은 날 수 없어요.\n" +
                    "팔을 날개처럼 꾸며도 날개만큼 움직여야 하기 때문에 너무나 힘들 거에요. ",
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

    const [adjacent, setAdjacent] = useState({
        "hasLater": true,
        "hasOlder": true,
        "laterQuestion": {
            "questionId": Number(questionId) + 1,
            "title": "짜장면이 싫다고 하셨어"
        },
        "olderQuestion": {
            "questionId": Number(questionId) - 1,
            "title": "짜장면이 싫다고 하셨어"
        }
    })

    const fetchQuestion = async () => {
        // let response = await QuestionController.findById({questionId});
        // if (!response.data.isSuccess) {
        //     return
        // }
        // setQuestion({
        //     "questionId": 49,
        //     "title": "string",
        //     "content": "string",
        //     "childStatus": "ACTIVE",
        //     "hashtags": [
        //         {
        //             "hashtagId": 1,
        //             "hashtag": "string"
        //         },
        //         {
        //             "hashtagId": 1,
        //             "hashtag": "string"
        //         },
        //         {
        //             "hashtagId": 1,
        //             "hashtag": "string"
        //         },
        //     ],
        //     "createdAt": "2024-02-18T13:50:08.113Z",
        //     "updatedAt": "2024-02-18T13:50:08.113Z"
        // });
    }

    useEffect(() => {
        fetchQuestion();
        setAdjacent(state => {
            return {
                ...state,
                laterQuestion: {
                    ...state.laterQuestion,
                    questionId: Number(questionId) + 1,
                },
                olderQuestion: {
                    ...state.olderQuestion,
                    questionId: Number(questionId) - 1,
                }
            }
        })
    }, [questionId]);

    return (
        <>
            <AdjacentQuestion adjacent={adjacent}/>
            <div className={"bg-amber-600 rounded-3xl flex flex-col w-full p-4"}>
                <WhiteShadowBox className={"min-h-60 relative"}>
                    <img src={AlarmIcon} alt={"알림"} className={"absolute bottom-4 right-6 cursor-pointer"}/>
                    <div
                        className={"relative w-full flex justify-center"}>
                        <div className={"absolute right-6 top-0 text-amber-600"}>어린이</div>
                        <MenuIconComp/>
                        <img src={BASE_IMAGE} alt={""} className={"w-24 h-24 rounded-full mr-10"}/>
                        <div className={"flex flex-col flex-1 h-24"}>
                            <HashTagList tags={question.hashtags}/>
                            <div className={"flex items-center font-bold text-2xl break-all w-full flex-1"}>
                                {question.title}
                            </div>
                            <div className={"text-xs"}>{question.createdAt}</div>
                        </div>
                    </div>
                    <div className={"text-sm"}/>
                    <div className={"mt-4"}>{question.content}</div>
                </WhiteShadowBox>
                <div className={"font-bold text-white text-center mt-4"}>3명의 전문가가 답변을 했어요</div>
                <div className={"border-2 border-white mt-4"}/>
                <div className={"w-full flex justify-center mt-4"}>
                    <p className={"shadow-[inset_0px_0px_12px_rgba(0,0,0,0.4)] w-1/5 h-12 bg-white flex justify-center items-center font-bold text-amber-600 rounded-full"}>답변하기</p>
                </div>
                <AnswerList answerState={answers}/>
            </div>
        </>
    );
}

export default QuestionDetailPage;