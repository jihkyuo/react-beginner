import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// config css
import "./css/reset.css";
import "./css/styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:tomato">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
