import React from 'react';

function WhiteShadowBox(props) {
    return (
        <div
            className={"shadow-[inset_0px_0px_12px_rgba(0,0,0,0.8)] p-8 bg-white rounded-3xl w-full flex flex-col "
                + props.className
        }>
            {props.children}
        </div>
    );
}

export default WhiteShadowBox;