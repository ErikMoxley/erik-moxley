import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Resume from "./components/pages/Resume";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

import "../src/styles/App.css";

function App() {
  return (
    <Router>
      <div className="container">
      <Nav/>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/skills" component={Skills} />
              <Route path="/blog" component={Blog} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;