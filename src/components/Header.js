import fire from '../fire.js';
import { useHistory } from 'react-router-dom';

function Header({ loginStatus }) {
    let history = useHistory();

    const signOut = () => {
        fire.auth().signOut()
        .then((user) => {
            history.push('/login')
            })
           .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <header>
                <div className="logo-wrapper">
                    <h1>LIT NOTES</h1>
                    <h3>What are you reading today?</h3>
                </div>
                { { loginStatus } ?
                    <button className="btn-logout" onClick={signOut}>LOGOUT</button>
                    : ""
                }
            </header>
        </div>
    )
}

export default Header;
