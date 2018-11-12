import React, { Component } from "react";
import "./App.css";
import styles from "./App.module.css";
import TagCloud from "./components/TagCloud";
import HorizontalSlide from "./components/HorizontalSlide";
import Input from "./components/Input";
import SearchList from "./components/SearchList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path={"/TagCloud"} component={TagCloud} />
            <Route path={"/HorizontalSlide"} component={HorizontalSlide} />
            <Route path={"/ControlInput"} component={Input} />
            <Route path={"/SearchList"} component={SearchList} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
