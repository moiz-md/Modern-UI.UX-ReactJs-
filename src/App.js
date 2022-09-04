import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Solutions,
  Header,
} from "./containers";

import { Brand, Cta, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Solutions />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default App;

{
  {
    /* <Router> */
  }

  /* <Switch>
              <Route path="/" exact component={Blog} />
              <Route path="/" exact component={Footer} />
            </Switch>
          </Router> */
}
