import './App.css';
import React from 'react';
import pages from "./components";
import { Router } from "react-router";
import routes from "./components/routes";
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={browserHistory}>
          {routes(pages)}
      </Router>
    </>
  );
}

export default App;
