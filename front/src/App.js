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
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Showroom" element={<Showroom />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Controller" element={<Controller />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
