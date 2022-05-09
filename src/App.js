import React from 'react'
import Home from './pages/Home';
// import {Switch,Route} from 'react-router-dom';
import { Route, Routes } from "react-router";
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App