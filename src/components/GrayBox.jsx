import React from 'react';

function GrayBox({className, children, ...rest}) {
    return (
        <div
            className={"w-full h-full border-4 rounded-3xl border-gray-300 " + className}
        >{children}</div>
    );
}

export default GrayBox;