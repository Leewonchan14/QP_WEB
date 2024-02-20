import React, {useEffect} from 'react';
import '../index.css';
import QuestionGridList from "../components/QuestionComp";
import useFetchQuestion from "../hooks/useFetchQuestion";

function HomePage(props) {

    let [questionState, ] = useFetchQuestion({})


    return (
        <div className={"relative w-full"}>
            <QuestionGridList questionState={questionState}/>
        </div>
    );
}

export default HomePage;