import axios from 'axios';
import fire from '../fire';

const url = 'http://localhost:8080/api';

// create user auth token
const createToken = async () => {
    const user = fire.auth().currentUser;
    const token = user && (await user.getIdToken());
    const payloadHeader = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return payloadHeader;
}

// post request for new note
export const addToNotes = (title, content) => {
const header = await createToken();

const payload = {
    title,
    content,
}
try {
    const res = await axios.post(url, payload, header);
    return res.data;
} catch (e) {
    console.error(e);
}

axios.post(url, payload);
};

// get request for all notes
export const getAllNotes = async () => {
    const header = await createToken();
    try {
        const res = await axios.get(url, header);
        return res.data;
    } catch (e) {
        console.error(e);
    }
}