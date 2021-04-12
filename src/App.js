import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Router>
  );
}

export default App;
