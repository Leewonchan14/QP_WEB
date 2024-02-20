import {useNavigate} from "react-router-dom";

function App() {
    let navigate = useNavigate();
    const onClick = () => {
        console.log("hello")
        navigate("/home");
    }

    console.log(process.env.REACT_APP_MY_SECRET_KEY);
    return (
        <div className={"relative flex flex-col"}>
            <div className={"bg-amber-600 w-full"}>
                {process.env.MY_SECRET_KEY}
            </div>
        </div>
    );
}

export default App;
