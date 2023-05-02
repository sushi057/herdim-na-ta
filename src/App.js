import "./App.css";
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
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={New} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/cartoon" component={Cartoon} />
          <Route exact path="/tv" component={TV} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
