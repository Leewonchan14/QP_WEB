import {createStore} from "redux";
import rootReducer from './conbine';

const store = createStore(rootReducer);

export default store;