
const activeShelfReducer = (state = 0, action) => {
    switch(action.type) {
        case 'CHANGE_ACTIVE_SHELF':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default activeShelfReducer;