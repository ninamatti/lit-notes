import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shelf from './components/Shelf';
import Book from './components/BookSingleview';
import Profile from './components/Profile';
import NoteScrollview from './components/NoteScrollview';
import Login from './components/session/Login.jsx';
import './App.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import fire from './fire.js';

function App() {
  const activeShelf = useSelector(state => state.activeShelfId);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  console.log('logged in?', isLoggedIn);

  return (
    <div className="App">
      
        <BrowserRouter>
        <Header loginStatus={isLoggedIn}/>
        <section className="main">
          {!isLoggedIn ?
            (
            <Switch>
              <Route exact={true} path="/">
                <Login />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
            )
            :
            (
            <>          
            <div className="sidenav nav-list">
              <button className="btn"><Link to="/home" className="nav-link">HOME</Link></button>
              <button className="btn"><Link to="/shelf" className="nav-link">SHELF</Link></button>
              <button className="btn"><Link to="/book" className="nav-link">BOOK</Link></button>
              <button className="btn"><Link to="/note" className="nav-link">NOTE</Link></button>
              <button className="btn"><Link to="/profile" className="nav-link">PROFILE</Link></button>
            </div>
            <Switch>
              <Route exact={true} path="/" >
                <Home />
              </Route>
              <Route path="/home" >
                <Home />
              </Route>
              <Route path="/shelf">
                <Shelf  shelfName={activeShelf}/>
              </Route>
              <Route path="/book">
                <Book />
              </Route>
              <Route path="/note">
                <NoteScrollview />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
            </>
            )
          }
        </section>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
