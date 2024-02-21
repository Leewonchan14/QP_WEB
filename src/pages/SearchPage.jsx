import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {INITIALIZE, SEARCH} from "../reducers/SearchModalState";
import QuestionGridList from "../components/QuestionComp";
import useParamFetch from "../hooks/useParamFetch";
import useFetchQuestion from "../hooks/useFetchQuestion";
import {useNavigate} from "react-router-dom";

function SearchPage({...rest}) {
    useParamFetch({key:"search"});

    let [questionState,] = useFetchQuestion({size:3});

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const onClick = () => {
        dispatch({type:INITIALIZE})
        navigate("/register")
    }

    return (
        <div className={"w-full"}>
            <div className={"mb-12 flex justify-center text-2xl font-bold"}>총 {questionState.listSize}개의 질문이 있습니다.</div>
            <QuestionGridList questionState={questionState}/>
            <div className={"flex flex-col w-full h-auto"}>
                <div className={"flex w-full justify-center text-amber-600 mt-10 font-bold text-xl"}>원하는 질문이 없으세요?</div>
                <div className={"w-full h-auto flex justify-center"}>
                    <p onClick={onClick}
                       className={"cursor-pointer inline-block p-6 rounded-full text-white bg-gradient-to-b from-amber-600/80 to-amber-600 text-center my-10 font-bold text-xl"}>질문
                        등록하러 가기</p>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;