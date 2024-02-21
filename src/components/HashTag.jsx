import React from 'react';

function HashTagList({tags}) {
    return (
        <div className={"flex text-lg"}>
            {tags.map((tag, index) => {
                return <HashTag key={index} tag={tag}/>
            })}
        </div>
    );
}

function HashTag({tag}) {
    let {hashtag} = tag;
    return (
        <div className={"mr-4"}>#{hashtag}</div>
    );
}

export default HashTagList;