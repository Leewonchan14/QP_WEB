const initialState = {
    isSearchOpen: false,
    isModalOpen: false,
    search : "",
    input: "",
    searchModal: null,
};

export const INITIALIZE = "INITIALIZE";
export const CLICK_SEARCH_BAR = "CLICK_SEARCH_BAR";
export const CLICK_BACK_ARROW = "CLICK_BACK_ARROW";
export const INIT_MODAL = "INIT_MODAL";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const SEARCH = "SEARCH";


export const SearchModalState = (state = initialState, action) => {
    switch (action.type) {
        case INIT_MODAL:
            return {
                ...state,
                searchModal: action.modalRef,
            };
        case INITIALIZE:
            return {
                ...initialState,
                searchModal: state.searchModal,
            };
        case INPUT_CHANGE:
            return {
                ...state,
                isSearchOpen: true,
                input: action.value,
            }
        case CLICK_SEARCH_BAR:
            return {
                ...state,
                isSearchOpen: true,
                isModalOpen: true,
            };
        case CLICK_BACK_ARROW:
            return {
                ...state,
                isSearchOpen: false,
                isModalOpen: false,
                input: "",
            };
        case SEARCH:
            return {
                ...state,
                search: action.input,
                isSearchOpen: true,
                isModalOpen: false,
            }
        default:
            return state;
    }
}