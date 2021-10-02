import React from "react";
import { Switch, Route } from "react-router-dom";
import PAGE_NOT_FOUND from "./Pages/error/Page-Not-Found";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Pokemon from './Pages/Pokemon/Pokemon'
import About from './Pages/About/About'

function App() {

  return (
    <Switch className="switch">
      <Route exact path="/">
        <Navbar  />
        <Home />
      </Route>
      <Route exact path="/pokemon">
        <Navbar  />
        <Pokemon />
      </Route>
      <Route exact path="/about">
        <Navbar  />
        <About />
      </Route>

      {/* -- page not found -- */}
      <Route>
        <PAGE_NOT_FOUND />
      </Route>
    </Switch>
  );
}

export default App;
