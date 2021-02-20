import fire from '../fire.js';

function Header( { loginStatus }) {
    const signOut = () => {
        fire.auth().signOut()
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

export default Header
