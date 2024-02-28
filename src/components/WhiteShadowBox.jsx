import React from 'react';

function WhiteShadowBox(props) {
    return (
        <div
            className={"shadow-[inset_0px_4px_2px_rgba(0,0,0,0.3),0px_4px_4px_rgba(0,0,0,0.3)] p-8 bg-white rounded-3xl w-full flex flex-col "
                + props.className
            }>
            {props.children}
        </div>
    );
}

export default WhiteShadowBox;