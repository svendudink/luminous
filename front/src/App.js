import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./views/About";
// import Home from "./views/Home";
// import Controller from "./views/Controller";
// import Showroom from "./views/Showroom";
import Main from "./views/Main";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Main" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
