export const changeActiveShelf = (index) => {
    return {
        type: 'CHANGE_ACTIVE_SHELF',
        payload: index
    }
}

export const changeActiveBook = (index) => {
    return {
        type: 'CHANGE_ACTIVE_BOOK',
        payload: index
    }
}