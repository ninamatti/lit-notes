const shelfData = [
    {
        "shelfName": "Currently Reading",
        "bookIds": [
            20
        ],
    },
    {
        "shelfName": "Want to read",
        "bookIds": [
            10, 30
        ],
    },
    {
    "shelfName": "Have read",
        "bookIds": [
            20
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