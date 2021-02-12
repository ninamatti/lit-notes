import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/shelf">
            <Home />
          </Route>
          <Route path="/book">
            <Home />
          </Route>
          <Route path="/note">
            <Home />
          </Route>
          <Route path="/profile">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
