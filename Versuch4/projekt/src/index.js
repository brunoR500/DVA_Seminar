import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import XSS from "./pages/XSS";
import NotFound from "./pages/NotFound";
import CounterIncrement from "./pages/CounterIncrement";
import CounterMultiply from "./pages/CounterMultiply";
import Button from "./pages/Button";
import { Navbar } from "./components/Navbar";
import Bootstrap from "./pages/Bootstrap";

const Router2 = () => {
  const [count, setCount] = useState(0);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/xss" component={XSS} />
      <Route
        path="/counter-increment"
        render={() => <CounterIncrement count={count} setCount={setCount} />}
      />
      <Route
        path="/counter-multiply"
        render={() => <CounterMultiply count={count} setCount={setCount} />}
      />
      <Route path="/bootstrap" component={Bootstrap} />
      <Route path="/button" component={Button} />
      <Route component={NotFound} />
    </Switch>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Router2 />
  </BrowserRouter>,
  document.getElementById("root")
);
