import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./Home/Resume";
import About from "./Home/About";
import Contact from "./Home/Contact";
import ContactForm from "./Home/ContactForm";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Main from "./Home/Main";
import Navbar from "./Home/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/contact-form" component={ContactForm} />
          <Route path="/">
            <Header />
            <About />
            <Main />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
