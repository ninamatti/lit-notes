import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shelf from './components/Shelf';
import Book from './components/BookSingleview';
import Profile from './components/Profile';
import NoteScrollview from './components/NoteScrollview';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const activeShelf = useSelector(state => state.activeShelfId);

  return (
    <div className="App">
      <Header />
      <section className="main">
        <BrowserRouter>
          <div className="sidenav nav-list">
            <button className="btn"><Link to="/home" className="nav-link">HOME</Link></button>
            <button className="btn"><Link to="/shelf" className="nav-link">SHELF</Link></button>
            <button className="btn"><Link to="/book" className="nav-link">BOOK</Link></button>
            <button className="btn"><Link to="/note" className="nav-link">NOTE</Link></button>
            <button className="btn"><Link to="/profile" className="nav-link">PROFILE</Link></button>
          </div>
          {/* <div className="v-divider"></div> */}
          <Switch>
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
        </BrowserRouter>
        
      </section>
      <Footer />
    </div>
  );
}

export default App;
