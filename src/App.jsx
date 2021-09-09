import React, { useState } from "react";
// React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// custom sass
import "./index.scss";
// Responsive sass
import "./Responsive.scss";
// All pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// import Error from "./pages/Error";

// components
import Sidebar from "./components/Sidebar";

// React Router Dom
import { Switch, Route, Redirect } from "react-router-dom";

import { FaBars } from "react-icons/fa";

function App() {
  // toggle btn
  const [toggle, setToggle] = useState(false);

  const clickToggle = () => {
    setToggle((prevClick) => !prevClick);
  };

  return (
    <>
      <div id="mixWithSidebar">
        <div className={`sidebar ${toggle ? "nav-toggle" : ""}`}>
          <Sidebar />
        </div>
        {/* toggle button */}
        <div className="toggleBtn">
          <span className="toggleBars">
            <FaBars onClick={clickToggle} />
          </span>
        </div>
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
