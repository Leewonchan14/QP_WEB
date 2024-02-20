import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_WIDTH} from "../reducers/LayoutState";

function WidthController(props) {
    let dispatch = useDispatch();
    let {width} = useSelector(state => state.LayoutState);
    const root = useRef(window.document.getElementById("html"));
    useEffect(() => {
        const handleResize = () => {
            dispatch({type: CHANGE_WIDTH, width: window.innerWidth});
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    useEffect(() => {
        dispatch({type: CHANGE_WIDTH, width: window.innerWidth});
    }, []);

    return (
        <></>
    );
}

export default WidthController;