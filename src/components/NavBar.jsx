import React from 'react';
import '../index.css';
import QPLogo from "./QPLogo";
import SearchBar from "./SearchBar";
import MainLoginButton from "./MainLoginButton";
import MyPageButton from "./MyPageButton";
import {useSelector} from "react-redux";


function NavBar() {
    let {isLogin} = useSelector(state => state.UserState);

    return (
        <div className={"m-8 ml-[2%] mr-[2%]"}>
            <div className={"relative h-20 flex w-full justify-center"}>
                <QPLogo className={"absolute h-full left-0"}/>
                <SearchBar className={"h-full"}/>
                {isLogin && <MyPageButton/>}
                {!isLogin && <MainLoginButton className={"absolute h-full min-w-40 right-[1%]"}/>}
            </div>
        </div>
    );
}

export default NavBar;