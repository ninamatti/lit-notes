import axios from 'axios';
import fire from '../fire';

const url = 'http://localhost:8080/api';

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

export const addToNotes = (title, content) => {
  const payload = {
    title,
    content,
  }
  axios.post(url, payload);
};