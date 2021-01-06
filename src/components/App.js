import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Anim1 from './anim/bg/Anim1';
import Anim3 from './anim/text/Anim3';
import Anim4 from './anim/loader/Anim4';
import Anim5 from './anim/bg/Anim5';
import Anim6 from './anim/bg/Anim6';
import PageNotFound from './PageNotFound';
import '../styles/App.css';
import home_icon from '../images/home_icon.png';

class App extends React.Component {
  render() {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <div className="app">
        <HashRouter>
          <div>
            <Link to="/"><img className="home_icon" src={home_icon} alt="home icon" /></Link>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/1" exact component={Anim1} />
              <Route path="/2" exact component={Anim3} />
              <Route path="/3" exact component={Anim4} />
              <Route path="/4" exact component={Anim5} />
              <Route path="/5" exact component={Anim6} />
              <Route component={PageNotFound} />
            </Switch>
            <footer>Copyright {year} Justyna Biernacka</footer>
          </div>
          </HashRouter>
      </div>
    )
  }
}

export default App;