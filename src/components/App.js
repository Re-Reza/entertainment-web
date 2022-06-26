import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_URL } from "./baseUrl";
import { SignIn, Home, Categorized, MoviePage } from "./pages";
import HeaderContainer from "./header/HeaderContainer";
import {Provider} from "react-redux";
import store from "../statemanagement/store";
import "../css/reset.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../css/font.css";
import "../css/app.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <HeaderContainer/>
          <Routes>
            <Route path={BASE_URL + "/signin"} element= {<SignIn />} />
            <Route path={BASE_URL+"home"} element= {<Home />} />
            <Route path={BASE_URL+"/:category"} element= {<Categorized/>} />
            <Route path={BASE_URL+":category/:type/:movieId"} element= {<MoviePage/>} />
            {/* <Route path="*" element ={<Page404/>} */}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
