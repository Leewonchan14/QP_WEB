import React, {useEffect, useRef} from 'react';
import Lenses from "../assets/Lenses.png";
import Search from "../assets/Seach.png";
import Arrow from "../assets/Arrow.png";
import {useDispatch, useSelector} from "react-redux";
import {CLICK_BACK_ARROW, CLICK_SEARCH_BAR, INPUT_CHANGE, SEARCH} from "../reducers/SearchModalState";
import {useNavigate} from "react-router-dom";

function SearchBar({className}) {
    let navigate = useNavigate();

    let {isSearchOpen, input} = useSelector(state => state.SearchModalState);
    let dispatch = useDispatch();

    useEffect(() => {
        let params = new URLSearchParams(window.location.search);
        let search = params.get("search");
        if (search) {
            dispatch({type:INPUT_CHANGE, value: search})
        }
    }, []);


    const onChange = (e) => {
        dispatch({type: INPUT_CHANGE, value: e.target.value})
    }

    const onFocus = () => {
        dispatch({type: CLICK_SEARCH_BAR})
    }

    const onReset = () => {
        dispatch({type: CLICK_BACK_ARROW})
    }
    const onSummit = () => {
        if (isSearchOpen) {
            dispatch({type: SEARCH, input})
            navigate(`/search?search=${input}`)
        } else {
            dispatch({type: CLICK_SEARCH_BAR})
        }
    }

    return (
        <div
            className={className + ` ${isSearchOpen ? "w-[55%]" : "w-1/3"} transition-all ease-in-out duration-300 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex justify-center items-center text-white font-bold text-2xl` +
                " min-w-60 relative overflow-visible"}>
            <div
                className={"cursor-pointer" +
                    " absolute w-28 h-full flex justify-center items-center transition-all ease-in-out duration-300 " + (isSearchOpen ? "left-[90%]" : " left-[-2rem]")}>
                <img draggable="false" src={Lenses} alt={"렌즈"}
                     onClick={onSummit}
                     className={"absolute w-full h-full object-cover overflow-visible"}/>
                <img
                    onClick={onSummit}
                    draggable="false" src={Search} alt="검색"
                    className={"absolute w-14"}/>
            </div>
            {isSearchOpen && <img draggable={"false"} src={Arrow} alt="화살표" className={"h-full p-5 cursor-pointer"}
                                  onClick={onReset}/>}
            <input onFocus={onFocus} onChange={onChange}
                   value={input} type="text" placeholder={isSearchOpen ? "단어 형태로 검색어를 입력하세요" : "질문하기 전 검색하기"}
                   className={"" +
                       " outline-none transition-all ease-in-out duration-300 placeholder:text-white w-full h-full bg-transparent text-white text-2xl font-bold " + (isSearchOpen ? "text-start placeholder:opacity-50 pr-20" : "text-center")}/>
        </div>
    );
}

export default SearchBar;