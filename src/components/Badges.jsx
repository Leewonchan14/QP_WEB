import React from 'react';
import OrangeCancel from "../assets/OrangeCancel.png";

function Badges({badges, ...rest}) {
    return (
        <>
            {badges.map((badge, index) => {
                return (
                    <div key={index}
                         className={"inline-block border-2 border-amber-600 rounded-full mr-3 mb-3 px-2 py-1"}>
                        <div className={"h-full flex justify-center items-center"}>
                            {badge}
                            <img src={OrangeCancel} alt="취소" className={"inline-block h-full cursor-pointer"}
                                 onClick={()=>rest.onClick(index)}/>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Badges;