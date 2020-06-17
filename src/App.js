import React from "react";

import Search from "./search";
import "./App.css";

import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Settings from "./setting";
import Explore from "./explore";
import { createStore, redux } from "redux";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Search />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
          </Switch>
          <div className="bottom-nav">
            <div>
              <Link to="/home">
                <div>Home</div>
              </Link>
            </div>
            <div>
              <Link to="/explore">
                <div>Explore</div>
              </Link>
            </div>

            <div>
              <Link to="/">
                <div>Home</div>
              </Link>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
