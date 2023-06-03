import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Movies from "./pages/Movies";
import Cartoon from "./pages/Cartoon";
import TV from "./pages/TV";
import Header from "./components/Header";

function App() {
  return (
    <Router basename="/">
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cartoon" element={<Cartoon />} />
          <Route path="/shows" element={<TV />} />
          <Route path="/search" element={<Home />} />
          <Route path="/user" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
