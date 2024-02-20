import React from 'react';
import ChatIcon from "../assets/ChatIcon.png";
import LikeIcon from "../assets/LikeIcon.png";

function ChatAndLike({chat, like}) {
    return (
        <div className={"absolute flex h-full right-3"}>
            <div className={"flex mr-5"}>
                <img src={ChatIcon} alt="댓글" className={"mr-2"}/>
                <div className={"flex justify-center items-center"}>{chat}</div>
            </div>
            <div className={"flex"}>
                <img src={LikeIcon} alt="좋아요" className={"mr-2"}/>
                <div className={"flex justify-center items-center"}>{like}</div>
            </div>
        </div>
    );
}

export default ChatAndLike;