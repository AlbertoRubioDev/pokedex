import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import PokemonList from "../pokemonList";
import SelectedPokemon from "../selectedPokemon";
import Topbar from '../topbar/topbar'
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = () => {
  return <h1>NO QUIERO HACER EL HOME</h1>
}


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/list', name: 'About', Component: PokemonList },
  { path: '/pokemon/:number', name: 'Contact', Component: SelectedPokemon },
]


export default function App() {

  return (
    <Router>
      <ScrollToTop />
    <Topbar/>
    {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
    </Router>
  );
}


const ScrollToTop  = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
