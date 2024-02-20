const initialState = {
    width: 0,
};

export const CHANGE_WIDTH = "CHANGE_WIDTH";


export const LayoutState = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_WIDTH:
            return {
                ...state,
                width: action.width,
            };
        default:
            return state;
    }
}