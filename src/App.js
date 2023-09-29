import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home"; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="homePageStyle">
          Learn more about <Link to="/home">Animals</Link>
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
