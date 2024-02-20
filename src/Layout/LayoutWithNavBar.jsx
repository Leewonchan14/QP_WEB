import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchModal from "../components/SearchModal";
import {useSelector} from "react-redux";

function LayoutWithNavBar({...rest}) {
    let {isModalOpen} = useSelector(state => state.SearchModalState);

    return (
        <>
            <NavBar/>
            <div className={"relative w-full pl-60 pr-60"}>
                <div className={"relative w-full h-full "
                 + (isModalOpen ? "" : "hidden")}>
                    <SearchModal/>
                </div>
                <div className={"w-full " +
                    " " + (isModalOpen ? "hidden" : "")}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default LayoutWithNavBar;