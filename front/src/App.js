import "./App.css";
import { serial } from "./helper/serial";
import {
  Router,
  Route,
  BrowserRouter,
  Routes,
  useLocation,
} from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Controller from "./views/Controller";
import Showroom from "./views/Showroom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
