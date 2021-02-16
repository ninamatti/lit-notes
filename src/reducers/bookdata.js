
const bookData = 
    [
        {
            "id": 10,
            "title": "Harry Potter and the Chamber of Secrets",
            "author": "J.K. Rowling",
            "isbn": "978-1-4088-4565-3",
            "cover": "hp_chamber_cover.jpeg",
            "currentPage": "",
            "notes": [
                {
                    "id": 123,
                    "title": "Chapter 13 thoughts",
                    "content": "The early glimpse of Riddle is telling. He is a school hero who has won his glory by framing another student, Hagrid, for the murder that he himself caused. One could go so far as to note a Satanic element in this fall of Riddle into Voldemort, from Hogwarts hero to the demonic figure who caused such a reign of terror among the wizard community. At the same time, a Jesus-like element resides in the younger Dumbledore, who sweeps through the halls with his auburn hair, understanding more than he lets on, yet preserving a forgiving, reticent wisdom that has not faded after fifty years. Furthermore, it is noted several times that Voldemort is threatened only by Dumbledore, because he knows that Dumbledore would never join his side."
                },
                {
                    "id":124,
                    "title": "What I loved",
                    "content": "Harry first learns about Voldemort and his role in Harry’s life in Harry Potter and the Sorcerer’s Stone, a year before Chamber of Secrets. He’s introduced as the evil wizard who murdered Harry’s parents, and Harry even meets Voldemort in his formless state on the back of Quirrell’s head. It’s not until Chamber of Secrets that Harry (and the reader) begins to learn about Voldemort as a character and as a human. Harry’s introduction to Tom Riddle through the Horcrux diary is interesting because it allows him to build some empathy for Riddle and his upbringing – both of them see Hogwarts as the first place they ever belonged. Of course, what Riddle showed him in the diary was a lie, but it’s the first spark of humanity that we see in Voldemort, something that doesn’t return again until Harry Potter and the Half-Blood Prince with Harry’s journeys into the Pensieve as he learns about how Voldemort became the monster he is."
                }
            ],
            "shelf": "none"
        },
        {
            "id": 20,
            "title": "Pride & Prejudice",
            "author": "Jane Austen",
            "isbn": "978-0-14-119907-8",
            "cover": "pride_prejudice_cover.jpg",
            "currentPage": "",
            "notes": [
                {
                    "id": 156,
                    "title": "Why Mr. Darcy continues to intrigue",
                    "content": "Darcy may appear the classic unavailable man, but we come to know that he is love sick with his desire for Elizabeth. He is the tortured soul, who longs for the heroine... even though he does not want to, says Silke Jahn, Founder and Editor of Romance & Smut, an online literary hub for romance novels.  But once he makes his mind up, he is all in and pursues the relationship with focus. In this way he really is not all that different at all from modern romantic heroes."
                },
            ],
            "shelf": "none"
        },
        {
            "id": 30,
            "title": "Romeo and Juliet",
            "author": "William Shakespeare",
            "isbn": "978-0-14-139647-7",
            "cover": "romeo_juliet_cover.jpg",
            "currentPage": "",
            "notes": [
                {
                    "id": 156,
                    "title": "Best part",
                    "content": ""
                },
            ],
            "shelf": "none" 
        },
        {
            "id": 40,
            "title": "Thinking, fast and slow",
            "author": "Daniel Kahneman",
            "isbn": "978-0-374-53355-7",
            "cover": "thinking_fast_and_slow_cover.jpg",
            "currentPage": "",
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