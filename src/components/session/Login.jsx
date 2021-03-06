import { useState } from 'react';
import fire from '../../fire.js';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                history.push("/home");
            })
            .catch((error) => {
            console.error('Incorrect username or password');
        });
    }
    return (
        <div className="login-container">    
        <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={({ target }) =>     
                      setEmail(target.value)}
                    placeholder="Email"
                    className="login-input_email"
                />
                <br />
                <input
                    type="password"
                    onChange={({ target}) => 
                      setPassword(target.value)}
                    placeholder="Password"
                    className="login-input_password"
                />
                <br />
                <button type="submit" className="login-submit-btn">
                    Sign in
                </button>
            </form>
        </div>
    )
};
export default Login






