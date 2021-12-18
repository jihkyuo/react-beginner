import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Genre from "./routes/Genre";

// config css
import "./css/reset.css";
// 전역 css
import "./css/styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id(\d+)">
          <Detail />
        </Route>
        <Route path="/movie/:params/:urlPage">
          <Genre />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
