import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {INIT_MODAL} from "../reducers/SearchModalState";
import Badges from "./Badges";

function SearchModal(props) {
    const [badges, setBadges] = useState([
        "햄버거",
        "세종대왕",
        "장영실",
        "은하 지평선",
        "장수 풍뎅이",
        "아밀라아제",
        "아밀라아제",
        "아밀라아제",
        "아밀라아제",
    ]);

    const modal = useRef(null);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: INIT_MODAL, modalRef: modal})
    }, []);


    return (
        <div ref={modal}
             className={"absolute h-full" +
                 " bg-white left-0 w-full"}>
            <span className={"text-2xl font-bold mt-10"}>최근 검색어</span>
            <div className={"border-[1px] border-black my-8"}/>
            <Badges badges={badges}/>
        </div>
    );
}

export default SearchModal;