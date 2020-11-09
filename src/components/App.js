import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Anim1 from './anim/bg/Anim1';
import PageNotFound from './PageNotFound';
import '../styles/App.css';

class App extends React.Component {
  render() {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/1" exact component={Anim1} />
              <Route component={PageNotFound} />
            </Switch>
            <footer>Copyright {year} Justyna Biernacka</footer>
          </div>
          </BrowserRouter>
      </div>
    )
  }
}

export default App;