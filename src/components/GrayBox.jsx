import React from 'react';

function GrayBox({children, ...rest}) {
    return (
        <div
            className={"w-full h-full border-4 rounded-3xl border-gray-300 " + rest.className}
        >{children}</div>
    );
}

export default GrayBox;