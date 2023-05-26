//import './App.css'
import Entrance from "./components/Entrance";
import Home from "./components/Home";
import Registar from "./components/Registar";
import { useState, useEffect } from "react";


import { Routes, Route } from 'react-router-dom';// Routes

function App() {
  const isAuthenticated = sessionStorage.getItem("token");
  return (
  <>
  {isAuthenticated ? (<Entrance />):(<Registar/>)}
  <Routes>
    <Route path="*" element={<Entrance/>}></Route>
    <Route path="/" element={<Entrance/>}></Route>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/Registar" element={<Registar/>}></Route>
  </Routes>
  </>)
}


export default App;
