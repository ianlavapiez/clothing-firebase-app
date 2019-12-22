import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      {/* Switch catches the first path and then not renders the rest */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" />
      </Switch>
    </div>
  );
}

export default App;
