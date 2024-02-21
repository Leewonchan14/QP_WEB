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
            <div className={"flex justify-center"}>
                <div className={"w-[80rem] mx-10"}>
                    <div className={"relative w-full h-full "
                        + (isModalOpen ? "" : "hidden")}>
                        <SearchModal/>
                    </div>
                    <div className={"w-full mb-20 " +
                        " " + (isModalOpen ? "hidden" : "")}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutWithNavBar;