
const activeShelfReducer = (state = 0, action) => {
    switch(action.type) {
        case 'CHANGE_ACTIVE':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default activeShelfReducer;