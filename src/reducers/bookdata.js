

const bookData = 
    [
        {
            "id": 10,
            "title": "Harry Potter and the Chamber of Secrets",
            "author": "J.K. Rowling",
            "isbn": "978-1-4088-4565-3",
            "cover": "hp_chamber_cover.jpeg",
            "notes": [],
            "shelf": "none"
        },
        {
            "id": 20,
            "title": "Pride & Prejudice",
            "author": "Jane Austen",
            "isbn": "978-0-14-119907-8",
            "cover": "pride_prejudice_cover.jpg",
            "notes": [],
            "shelf": "none"
        },
        {
            "id": 30,
            "title": "Romeo and Juliet",
            "author": "William Shakespeare",
            "isbn": "978-0-14-139647-7",
            "cover": "romeo_juliet.cover.jpg",
            "notes": [],
            "shelf": "none" 
        }
];


const bookdataReducer = (state = bookData, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default bookdataReducer;