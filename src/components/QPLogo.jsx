import React from 'react';
import QPLogo from '../assets/QPICON.png';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {INITIALIZE} from "../reducers/SearchModalState";

function QpLogo({className}) {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const onClick = () => {
        dispatch({type: INITIALIZE})
        navigate("/");
    }

    const imageStyle = {
        display: "flex",
        width:"100%",
        height:"100%",
        justifyContent: "center",
        alignItems: "center",
        objectFit:"cover",
    };

    return (
        <div className={className + " cursor-pointer"} onClick={onClick}>
            <img draggable="false" className={"object-fill"} style={imageStyle} src={QPLogo} alt=""/>
        </div>
    );
}

export default QpLogo;