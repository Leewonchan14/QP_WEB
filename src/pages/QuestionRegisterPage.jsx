import React, {useState} from 'react';
import GrayBox from "../components/GrayBox";
import Badges from "../components/Badges";
import ChatBox from "../assets/ChatBox.png"
import Check from "../assets/Check.png"

function BoldText({text}) {
    return (
        <div className={"text-3xl font-bold mb-6"}>{text}</div>
    );
}

function QuestionRegisterPage(props) {
    const [inputs, setInputs] = useState({
        title: "현재 아르테미스 계획은 어떻게 되어 가고 있나요?현재 아르테미스 계획은 어떻게 되어 가고 았나요 현재 아르테",
        content: "현재 아르테미스 계획은 어떻게 되어 가고 있나요?현재 아르테미스 계획은 어떻게 되어 가고 았나요 현재 아르테",
    })

    const [badges, setBadges] = useState([
        "햄버거",
        "세종대왕",
        "장영실",
    ]);

    let [isChild, setIsChild] = useState(false);
    const [isCheck, setIsCheck] = useState(false);

    const check = () => {
        setIsCheck(state => !state);
        console.log(isCheck);
    }

    return (
        <>
            <BoldText text={"제목"}/>
            <div className={"mb-2"}>
                <GrayBox>
                    <div className={"p-4"}>
                        <textarea className={"text-xl resize-none w-full h-14 outline-none text-pretty"}
                                  value={inputs.title}/>
                    </div>
                </GrayBox>
            </div>
            <div className={"mb-10"}>최소 5자 / 최대 60자 / ?(물음표)로 끝내기</div>
            <BoldText text={"본문"}/>
            <div className={"mb-2"}>
                <GrayBox>
                    <div className={"p-4"}>
                        <textarea className={"text-xl resize-none w-full h-40 outline-none text-pretty"}
                                  value={inputs.content}/>
                    </div>
                </GrayBox>
            </div>
            <div className={"mb-10"}>최소 5자 / 최대 60자 / ?(물음표)로 끝내기</div>
            <BoldText text={"해시태그(최대 3개)"}/>
            <input type="text" className={"mb-8 block outline-none border-b-2 border-b-black text-xl w-2/5"}/>
            <div className={"mb-20"}>
                <Badges badges={badges}/>
            </div>
            <BoldText text={"난이도"}/>
            <div className={"inline-block cursor-pointer mb-2"} onClick={() => {
                setIsChild(state => !state);
            }}>
                <GrayBox
                    className={"rounded-[20px] "
                        + (isChild ? "bg-amber-600 text-white !border-amber-600 " : "")}>
                    <div
                        className={"font-bold text-xl px-10 py-2 " + (isChild ? "" : "")}>
                        어린이
                    </div>
                </GrayBox>
            </div>
            <div className={"w-96 h-24 bg-no-repeat bg-[length:100%] p-6 mb-10"}
                 style={{backgroundImage: `url(${ChatBox})`}}>
                <div className={"w-full h-full text-white"}>
                    ‘어린이’를 활성화시키면
                    어린이 수준에 맞는 답변을 해줍니다.
                </div>
            </div>
            <BoldText text={"질문 등록 시 유의사항(필수)"}/>
            <div>
                <GrayBox className={"p-6"}>
                    작성자님께서 궁금해하고 등록한 질문은 다른 사람들도 궁금해할 만한 질문들입니다.
                    <br/><br/>
                    질문에 대한 답변을 구매하는 형식이기에 <span className={"font-bold text-amber-600 font underline"}>한 사람이라도 답변을 구매한다면 질문을 수정하거나 삭제할 수 없습니다.</span>
                    <br/><br/>
                    이와 같은 이유로 작성하실 때 신중히 작성해주세요.
                </GrayBox>
            </div>
            <div className={"flex items-center w-full p-4 mb-12"}>
                <div
                    onClick={() => check()}
                    className={"rounded-sm border-2 w-6 h-6 mr-4 flex justify-center items-center "
                        + (isCheck ? "bg-amber-600 !border-amber-600" : "")
                    }>
                    {isCheck && <img src={Check} alt={"체크"} className={"w-full h-full"}/>}
                </div>
                <div className={"inline-block font-bold"}>유의사항을 모두 읽고 동의합니다.</div>
            </div>
            <div className={"flex justify-center"}>
                <div className={"inline-block border-4 rounded-3xl px-16 py-3 font-bold text-xl "}>등록</div>
            </div>
            <div className={"h-10"}></div>
        </>
    );
}

export default QuestionRegisterPage;