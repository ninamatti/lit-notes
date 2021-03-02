import { useSelector } from 'react-redux';
import { useState } from 'react';

function Quicknote() {
    const [quicknoteTitle, setTitle] = useState();
    const [quicknoteContent, setContent] = useState();
    const bookData = useSelector(state => state.books);
    const activeBook = useSelector(state => state.activeBookId);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("title: ", quicknoteTitle, "content: ", quicknoteContent);
    }

    return (
        <div>
            <h2 className="quick-note-input">Add a quick note:</h2>
            <form onSubmit={handleSubmit}>
                <input className="quick-title-input" 
                            type="text"
                            placeholder="What's this note about?"
                            onChange={({ target }) => setTitle(target.value)}></input>
                <textarea className="quick-note-content-input" 
                    name="Text1" 
                    cols="40" 
                    rows="5"
                    placeholder="All of your amazing thoughts go here!"
                    onChange={({ target }) => setContent(target.value)}></textarea>
                <button type="submit"
                     className="submit-new-quicknote-btn"> Save new note </button>
            </form>
        </div>
    )
}

export default Quicknote;
