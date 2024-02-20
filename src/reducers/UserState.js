const initialState = {
    isLogin: false,
    userId: null,
    accessToken: null,
    refreshToken: null,
};

export const INIT_USER = "INIT_USER";
export const LOGIN = "LOGIN";


export const UserState = (state = initialState, action) => {
    switch (action.type) {
        case INIT_USER:
            return {
                isLogin: true,
                userId: action.userId,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
            };
        case LOGIN:
            return {
                isLogin: true,
                ...state
            };
        default:
            return state;
    }
}