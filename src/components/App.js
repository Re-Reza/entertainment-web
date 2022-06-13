import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../css/reset.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import {BASE_URL} from "./baseUrl";
import {SignIn} from "./pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path={BASE_URL} element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
