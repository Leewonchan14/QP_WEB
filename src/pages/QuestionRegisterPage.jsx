import React, {useState} from 'react';
import GrayBox from "../components/GrayBox";
import Badges from "../components/Badges";
import ChatBox from "../assets/ChatBox.png"
import Check from "../assets/Check.png"
import useQuestionRegisterInput from "../hooks/useQuestionRegisterInput";

function BoldText({text}) {
    return (
        <div className={"text-3xl font-bold mb-6"}>{text}</div>
    );
}

function QuestionRegisterPage(props) {

    let {
        inputs,
        hashTags,
        validated,
        isValid,
        onContentChange,
        onTitleChange,
        onHashTagChange,
        onCheckChange,
        onChildChange,
        addHashTag,
        deleteHashTag,
    } = useQuestionRegisterInput();

    let {
        title,
        content,
        hashtag,
        isChild,
        isCheck
    } = inputs;

    return (
        <>
            {/* 질문 제목 */}
            <BoldText text={"제목"}/>
            <GrayBox>
                <div className={"p-4"}>
                        <textarea
                            onChange={onTitleChange}
                            className={"text-xl resize-none w-full h-14 outline-none text-pretty"}
                            value={title}/>
                </div>
            </GrayBox>
            {/* 질문 제목 유효성 */}
            <div className={"mt-2 mb-10"}>
                <span className={validated.isTitleMinValidate ? "text-green-600" : "text-red-600"}>최소 5자</span>
                {" / "}
                <span className={validated.isTitleMaxValidate ? "text-green-600" : "text-red-600"}>최대 60자</span>
                {" / "}
                <span
                    className={validated.isTitleQuestionValidate ? "text-green-600" : "text-red-600"}>?(물음표)로 끝내기</span>
            </div>

            {/* 질문 내용 */}
            <BoldText text={"본문"}/>
            <GrayBox>
                <div className={"p-4"}>
                        <textarea
                            onChange={onContentChange}
                            className={"text-xl resize-none w-full h-40 outline-none text-pretty"}
                            value={content}/>
                </div>
            </GrayBox>

            {/* 질문 내용 유효성 */}
            <div className={"mt-2 mb-10"}>
                <span className={validated.isContentMinValidate ? "text-green-600" : "text-red-600"}>최소 10자</span>
                {" / "}
                <span className={validated.isContentMaxValidate ? "text-green-600" : "text-red-600"}>최대 300자</span>
            </div>

            {/* 해시태그 */}
            <BoldText text={"해시태그(최대 3개)"}/>
            <input
                onChange={onHashTagChange}
                onKeyDown={addHashTag}
                value={hashtag}
                type="text" className={"mb-8 block outline-none border-b-2 border-b-black text-xl w-2/5"}/>
            <div className={"mb-20"}>
                <Badges badges={hashTags} onClick={deleteHashTag}/>
            </div>
            <BoldText text={"난이도"}/>
            <div className={"inline-block cursor-pointer mb-2"} onClick={onChildChange}>
                <GrayBox
                    className={"rounded-[20px] "
                        + (isChild ? "bg-amber-600 text-white !border-amber-600 " : "")}>
                    <div
                        className={"font-bold text-xl px-10 py-2 " + (isChild ? "" : "")}>
                        어린이
                    </div>
                </GrayBox>
            </div>
            <div className={"w-96 h-24 bg-no-repeat bg-[length:100%] p-6 mb-10"}
                 style={{backgroundImage: `url(${ChatBox})`}}>
                <div className={"w-full h-full text-white"}>
                    ‘어린이’를 활성화시키면
                    어린이 수준에 맞는 답변을 해줍니다.
                </div>
            </div>
            <BoldText text={"질문 등록 시 유의사항(필수)"}/>
            <div>
                <GrayBox className={"p-6"}>
                    작성자님께서 궁금해하고 등록한 질문은 다른 사람들도 궁금해할 만한 질문들입니다.
                    <br/><br/>
                    질문에 대한 답변을 구매하는 형식이기에 <span className={"font-bold text-amber-600 font underline"}>한 사람이라도 답변을 구매한다면 질문을 수정하거나 삭제할 수 없습니다.</span>
                    <br/><br/>
                    이와 같은 이유로 작성하실 때 신중히 작성해주세요.
                </GrayBox>
            </div>
            <div className={"flex items-center w-full p-4 mb-12"}>
                <div
                    onClick={onCheckChange}
                    className={"rounded-sm border-2 w-6 h-6 mr-4 flex justify-center items-center "
                        + (isCheck ? "bg-amber-600 !border-amber-600" : "")
                    }>
                    {isCheck && <img src={Check} alt={"체크"} className={"w-full h-full"}/>}
                </div>
                <div className={"inline-block font-bold"}>유의사항을 모두 읽고 동의합니다.</div>
            </div>
            <div className={"flex justify-center"}>
                <div className={"inline-block border-4 rounded-3xl px-16 py-3 font-bold text-xl " +
                    (isValid ? "bg-amber-600 text-white border-amber-600 cursor-pointer" : "")}>등록</div>
            </div>
            <div className={"h-10"}></div>
        </>
    );
}

export default QuestionRegisterPage;