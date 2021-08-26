import GenerateReceipt from "./components/generateReceipt";
import ValidateReceipt from "./components/validateReceipt";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Toll Plaza</h1>
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/generate">Generate Receipt</Link>
              </li>
              <li>
                <Link to="/validate">Validate Receipt</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/generate">
              <GenerateReceipt />
            </Route>
            <Route path="/validate">
              <ValidateReceipt />
            </Route>
          </Switch>
        </Router>
        </div>
      </div>
      );
}

      export default App;
