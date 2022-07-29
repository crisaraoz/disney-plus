import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import ScrollToTop from './components/ScrollToTop';
import Marvel from './components/Marvel';
import Disney from './components/Disney';
import Star from './components/Star';
import National from './components/National';
import StarWars from './components/StarWars';
import Pixar from './components/Pixar';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <Router basename="/disney-plus">
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/movies/:title/:id'>
            <Detail />
          </Route>
          {/* <Route path='/movies/:title/:id'>
            <Movie />
          </Route> */}
          <Route path='/marvel'>
            <Marvel />
          </Route>
          <Route path='/disney'>
            <Disney />
          </Route>
          <Route path='/star'>
            <Star />
          </Route>
          <Route path='/national-geographic'>
            <National />
          </Route>
          <Route path='/star-wars'>
            <StarWars />
          </Route>
          <Route path='/pixar'>
            <Pixar />
          </Route>
          <Route path='/*'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;