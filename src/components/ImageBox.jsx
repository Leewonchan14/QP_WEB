import React from 'react';

function ImageBox({width, height, image, alt, onClick, style, className, children, ...rest}) {
    const imageBoxStyle = {
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        objectFit : "cover",
        ...style
    }

    const imageStyle = {
        width: "100%",
        height: "100%",
    }

    return (
        <div style={imageBoxStyle}>
            <img draggable="false" style={imageStyle} src={image} alt={alt} onClick={onClick} className={className} {...rest}/>
        </div>
    );
}

export default ImageBox;