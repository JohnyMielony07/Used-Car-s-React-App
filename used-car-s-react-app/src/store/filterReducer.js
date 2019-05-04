const initialState = {
    engineFilter: 'diesel'
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHECK":
            return {
                state
            };
        default:
            return state;
    }
}

export default filterReducer;