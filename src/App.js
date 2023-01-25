import './App.css';
import FrontPage from "./Components/FrontPage"
import Home from "./Components/Home"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <FrontPage/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
    </div>
  );
}

export default App;
