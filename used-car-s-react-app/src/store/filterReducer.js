const initialState = {
    make: '',
    engine: '',
    transmission: '',
    make: '',
    type: '',
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_ENGINE":
            return {
                ...state,
                engine: action.value
            };
        case "CHANGE_TRANSMISSION":
            return {
                ...state,
                transmission: action.value
            };
        case "CHANGE_MAKE":
            return {
                ...state,
                make: action.value
            };
        case "CHANGE_TYPE":
            return {
                ...state,
                type: action.value
            };
        case "CLEAR_FILTERING":
            return {
                ...state,
                make: '',
                engine: '',
                transmission: '',
                make: '',
                type: ''
            };

        default:
            return state;
    }

}

export default filterReducer;