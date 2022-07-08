import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_URL } from "./baseUrl";
import { SignIn, Home, Categorized, MoviePage, AccountDashboard, MovieTypes } from "./pages";
import HeaderContainer from "./header/HeaderContainer";
import Footer from "./footer/Footer";
import {Provider} from "react-redux";
import store from "../statemanagement/store";
import "../css/reset.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../css/font.css";
import "../css/app.css";

function App() {
  console.log('app')
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <HeaderContainer/>
          <Routes>
            <Route path={BASE_URL + "signin"} element= {<SignIn />} />
            <Route path={BASE_URL} element= {<Home />} />
            <Route path={BASE_URL+":category"} element= {<Categorized/>} />
            <Route path={BASE_URL+":category/:type/:movieId"} element= {<MoviePage/>} />
            <Route path={BASE_URL+":category/:type"} element={<MovieTypes/>} />
            <Route path={BASE_URL+"dashboard"} element={<AccountDashboard/>} />
            {/* <Route path="*" element ={<Page404/>} */}
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
