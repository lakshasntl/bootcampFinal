import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Jessica } from "./jessica_aboutme";
export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/jessica">
          <Jessica />
        </Route>
      </Switch>
    </Router>
  );
};
