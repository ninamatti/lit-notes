

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
            "cover": "romeo_juliet_cover.jpg",
            "notes": [],
            "shelf": "none" 
        },
        {
            "id": 40,
            "title": "Thinking, fast and slow",
            "author": "Daniel Kahneman",
            "isbn": "978-0-374-53355-7",
            "cover": "thinking_fast_and_slow_cover.jpg",
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