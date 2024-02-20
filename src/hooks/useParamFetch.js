import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {SEARCH} from "../reducers/SearchModalState";

const useParamFetch = ({key = "search"}) => {

    const location = window.location;

    const params = new URLSearchParams(location.search);

    let {search} = useSelector(state => state.SearchModalState);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: SEARCH, input: params.get(key)})
    }, [search]);
}

export default useParamFetch;