import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home"></Route>
          <Route exact path="/history"></Route>
          <Route exact path="/overview"></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
