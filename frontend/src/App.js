import { useEffect, useState } from "react";
import "./App.css";
// import Card from "./components/card/Card";
import axios from "axios";
import Dashboard from "./components/dashboard/Dashboard";
import AddMovie from "./components/AddMovie/AddMovie";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Movie List</h1>
          {/* <button className="addButton">Add</button> */}
          <NavLink className="addButton" to="/add">
            Add Movie
          </NavLink>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="*" element={<Dashboard />}></Route>
          <Route path="/add" element={<AddMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
