import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shelf from './components/Shelf';
import Book from './components/Book';
import Profile from './components/Profile';
import Noteview from './components/Noteview';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <BrowserRouter>
          <div className="sidenav nav-list">
            <button className="btn"><Link to="/home">Home</Link></button>
            <button className="btn"><Link to="/shelf">Shelf</Link></button>
            <button className="btn"><Link to="/book">Book</Link></button>
            <button className="btn"><Link to="/note">Note</Link></button>
            <button className="btn"><Link to="/profile">Profile</Link></button>
          </div>
          <Switch>
            <Route path="/home" >
              <Home />
            </Route>
            <Route path="/shelf">
              <Shelf />
            </Route>
            <Route path="/book">
              <Book />
            </Route>
            <Route path="/note">
              <Noteview />
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
