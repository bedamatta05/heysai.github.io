import React from "react";
import "./App.css";
import About from "./Home/About";
import Contact from "./Home/Contact";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Main from "./Home/Main";
import Navbar from "./Home/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
