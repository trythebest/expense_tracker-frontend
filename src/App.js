import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Home from "./components/Home/home";
import { useState } from "react";
import AddTransaction from "./components/Home/add";
import History from "./components/Home/history";
import "./App.css";


export default function App() {
  const [data, setData] = useState([]);



  return (
    <div className="App">
      
      <Home data={data} />
      <History data={data} />
      <AddTransaction data={data} setData={setData} />
      </div>
    

  )
}