import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import History from "./pages/History";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/overview">
            <Overview />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
