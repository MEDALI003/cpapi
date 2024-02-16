import { CHANGE_MODE } from "./action";

const initialState = {
    isDark: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_MODE:
            return { ...state, isDark: !state.isDark };
        default:
            return state; 
    }
};

export default reducer;
