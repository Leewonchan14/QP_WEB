import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AuthPage from "./pages/AuthPage";
import store from "./reducers/config/store";
import {Provider} from "react-redux";
import HomePage from "./pages/HomePage";
import App from "./App";
import LayoutWithNavBar from "./Layout/LayoutWithNavBar";
import QuestionDetailPage from "./pages/QuestionDetailPage";
import WidthController from "./components/widthController";
import SearchPage from "./pages/SearchPage";
import QuestionRegisterPage from "./pages/QuestionRegisterPage";
import ProfilePage from "./pages/ProfilePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <WidthController/>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LayoutWithNavBar/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/search"} element={<SearchPage/>}/>
                    <Route path={"/questions/:questionId"} element={<QuestionDetailPage/>}/>
                    <Route path={"/register"} element={<QuestionRegisterPage/>}/>
                    <Route path={"/profile"} element={<ProfilePage/>}/>
                    <Route path={"/app"} element={<App/>}/>
                </Route>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/auth/kakao/login" element={<AuthPage/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
