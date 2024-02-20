import React from 'react';

function SizeBOX({width, height}) {
    const sizeBoxStyle = {
        width: width,
        height: height,
    }
    return (
        <div style={sizeBoxStyle}></div>
    );
}

export default SizeBOX;