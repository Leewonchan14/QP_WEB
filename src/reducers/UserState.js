const initialState = {
    isLogin: false,
    userId: null,
    accessToken: null,
    refreshToken: null,
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const UserState = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLogin: true,
                userId: action.userId,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
            };
        case LOGOUT:
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("userId");
            action.navigate("/")
            return {
                isLogin: false,
                userId: null,
                accessToken: null,
                refreshToken: null,
            };
        default:
            return state;
    }
}