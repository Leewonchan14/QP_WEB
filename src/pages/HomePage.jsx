import React from 'react';
import '../index.css';
import QuestionGridList from "../components/QuestionComp";
import useFetchQuestion from "../hooks/useFetchQuestion";
import useAutoLogin from "../hooks/useAutoLogin";

function HomePage(props) {

    useAutoLogin();

    let [questionState,] = useFetchQuestion({})

    return (
        <div className={"relative w-full"}>
            <div className={"mb-12 flex justify-center text-2xl font-bold"}>총 {questionState.listSize}개의 질문이 있습니다.</div>
            <QuestionGridList questionState={questionState}/>
        </div>
    );
}

export default HomePage;