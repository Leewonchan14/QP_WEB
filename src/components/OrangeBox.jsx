import React, {useRef} from 'react';

function OrangeBox(props) {
    return (
        <div className={"h-full border-[2rem] border-amber-600 " + props.className}>
                {props.children}
        </div>
    );
}

export default OrangeBox;