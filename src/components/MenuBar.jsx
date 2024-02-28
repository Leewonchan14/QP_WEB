import React, {useEffect, useRef, useState} from "react";
import MenuIcon from "../assets/menuIcon.png";

function MenuBar({menuBarRef, isOpen, setIsOpen, ...rest}) {
    const MenuItem = ({content, ...rest}) => {
        return (
            <div className={"my-1 flex justify-center items-center cursor-pointer"}>{content}</div>
        )
    }

    return (
        <div ref={menuBarRef} className={"absolute w-36 border-2 bg-white right-0 top-5 " +
            (isOpen ? "visible" : "invisible")}>
            <MenuItem content={"수정하기"}/>
            <MenuItem content={"신고하기"}/>
        </div>
    )
}

function MenuIconComp(props) {

    const [isOpen, setIsOpen] = useState(false)

    const menuBarRef = useRef(null);

    // 다른 곳을 클릭하면 메뉴바가 닫히게 하기 위한 이벤트
    useEffect(() => {
        const handleClick = (e) => {
            if (menuBarRef.current && !menuBarRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [menuBarRef]);

    const onClick = () => {
        setIsOpen(isOpen => {
            return !isOpen;
        });
    };
    return (
        <>
            <div className={"absolute w-3 h-12 right-0 top-0 cursor-pointer"} onClick={onClick}>
                <img src={MenuIcon} alt={""} className={"absolute right-[50%] h-5"}/>
            </div>
            <MenuBar menuBarRef={menuBarRef} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
}

export default MenuIconComp;