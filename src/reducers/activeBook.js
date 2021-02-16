
const activeBookReducer = (state = 0, action) => {
    switch(action.type) {
        case 'CHANGE_ACTIVE_BOOK':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default activeBookReducer;