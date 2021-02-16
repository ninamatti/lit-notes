
const shelfData = [
    {
        "shelfName": "Currently Reading",
        "bookIds": [
            10, 20
        ],
    },
    {
        "shelfName": "Want to read",
        "bookIds": [
            30
        ],
    },
    {
    "shelfName": "Have read",
        "bookIds": [
            40
        ],
    }
]



const shelfReducer = (state = shelfData, action) => {
    switch(action.type) {
        case 'PUT_ON_SHELF':
            shelfData.push(action.payload);
            return shelfData
        default:
            return state;
    }
}

export default shelfReducer;