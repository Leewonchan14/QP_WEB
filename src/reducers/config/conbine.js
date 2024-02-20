import {combineReducers} from "redux";
import {UserState} from "../UserState";
import {LayoutState} from "../LayoutState";
import {SearchModalState} from "../SearchModalState";

const rootReducer = combineReducers({
    UserState,
    LayoutState,
    SearchModalState
});

export default rootReducer;