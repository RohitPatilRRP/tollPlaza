import GenerateReceipt from "./components/generateReceipt";
import ValidateReceipt from "./components/validateReceipt";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <center>
        <h1>Toll Plaza</h1>
        <div>
          <Router>
            <center>
              <nav className="horizontal">
                <ul className="nobull">
                  <li className="horizontalLi">
                    <Link to="/generate">Generate Receipt</Link>
                  </li>
                  <li className="horizontalLi">
                    <Link to="/validate">Validate Receipt</Link>
                  </li>
                </ul>
              </nav>
            </center>
            <Switch>
              <Route exact path="/"
                render={() => {
                  return (
                    <Redirect to="/generate" />
                  )
                }}
              />
              <Route path="/generate">
                <GenerateReceipt />
              </Route>
              <Route path="/validate">
                <ValidateReceipt />
              </Route>
            </Switch>
          </Router>
        </div>
      </center>
    </div>
  );
}

export default App;
