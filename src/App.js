import React from "react";
import './sass/style.scss';
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
    <div>
      <Home />
    </div>
    <div className="wrapper">
    <div className="container">
      <Heading />
      
    </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
