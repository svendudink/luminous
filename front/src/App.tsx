import "./App.css";

import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Controller from "./views/Controller";
import Showroom from "./views/Showroom";
import { GlobalContextProvider } from "./context/GlobalContext";
import DrawerAppBar from "./components/DrawerAppBar";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <DrawerAppBar />
        <div>
          <Routes>
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/Main" element={<Main />} /> */}
            <Route path="/Showroom" element={<Showroom />} />
            <Route path="/Controller" element={<Controller />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
