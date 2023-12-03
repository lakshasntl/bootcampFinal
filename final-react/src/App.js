import React from "react";
import "./App.css";
import Home from "./Home";
import Laksha from "./laksha_aboutme";
import Jessica from "./jessica_aboutme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/laksha" element={<Laksha />}>
          <Laksha />
        </Route>
        <Route path="/jessica" element={<Jessica />}>
          <Jessica />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
