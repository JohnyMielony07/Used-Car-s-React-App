const initialState = {
    carsCounter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET":
            return {
                carsCounter: 1
            }
        return state;
    }
}

export default reducer;