import React from 'react';
import {BASE_IMAGE} from "../contants/BASE_IMAGE";
import CoinIcon from "../assets/CoinIcon.png";
import GrayBox from "../components/GrayBox";
import QuestionGridList from "../components/QuestionComp";
import useFetchQuestion from "../hooks/useFetchQuestion";

function AddPointButton({className, point, text, ...rest}) {
    return (
        <GrayBox className={"h-20 flex justify-center items-center p-4 " + className}>
            <div className={"flex flex-1 flex-col justify-center items-center"}>
                <div className={"flex justify-center items-center mb-4"}>
                    <img className={"inline-block mr-1 h-14 w-14"} draggable={"false"} src={CoinIcon} alt="코인"/>
                    <div className={"inline-block text-3xl font-bold"}>{text} 충전하기</div>
                </div>
                <div className={"text-2xl"}>
                    <div className={"text-center"}>{point} point가 충전돼요</div>
                    <div className={"text-center"}>100개의 답변을 확인할 수 있어요</div>
                </div>
            </div>
        </GrayBox>
    )
}

function MyActionButton({className, text, ...rest}) {
    return (
        <GrayBox className={"flex justify-center items-center text-3xl font-bold"}>{text}</GrayBox>
    )
}

function ProfilePage(props) {
    let [questionState,] = useFetchQuestion({size: 3});
    return (
        <>
            {/*주황색 박스*/}
            <div
                className={"relative flex w-full h-[20rem] bg-gradient-to-b from-amber-500 to-amber-600 rounded-3xl p-10 mb-10"}>
                {/*프로필 수정 버튼*/}
                <div className={"absolute bg-white font-bold text-xl rounded-full px-10 py-4 right-10 top-10"}>프로필 수정
                </div>
                {/*프로필*/}
                <div className={"flex justify-center items-center"}>
                    {/*프로필 이미지*/}
                    <div className={"h-full"}>
                        <img draggable="false" src={BASE_IMAGE} alt={""} className={"w-44 h-44 rounded-full mr-8"}/>
                    </div>
                    {/*닉네임, 가입일, 포인트, 답변 수*/}
                    <div className={"flex flex-col flex-1 text-2xl text-white font-bold"}>
                        <div className={"my-6 font-bold text-[2.5rem]"}>큐피</div>
                        <div className={"mb-6"}>yyyy년 mm월 dd일 가입</div>
                        {/*포인트, 답변 수*/}
                        <div className={"text-[2rem] flex justify-center items-center"}>
                            <img className={"inline-block mr-1 h-14 w-14 translate-x-[-8px]"} draggable={"false"}
                                 src={CoinIcon} alt="코인"/>
                            100 point
                            <div className={"inline-block border-white border-2 h-14 mx-10"}></div>
                            80개의 답변을 볼 수 있어요!
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex justify-between h-48 mb-10"}>
                <AddPointButton text={"1천원"} point={"1000"}/>
                <div className={"w-16 h-20"}/>
                <AddPointButton text={"1만원"} point={"10000"}/>
            </div>
            {/*내가 한 질문, 내가 구매한 답변, 알림 신청한 질문*/}
            <div className={"h-32 flex mb-12"}>
                <MyActionButton text={"내가 한 질문"}/>
                <div className={"w-16"}/>
                <MyActionButton text={"내가 구매 한 답변"}/>
                <div className={"w-16"}/>
                <MyActionButton text={"알림 신청한 질문"}/>
            </div>
            <QuestionGridList questionState={questionState}/>
        </>
    );
}

export default ProfilePage;