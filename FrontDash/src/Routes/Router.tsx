import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "../pages/Calendar/Calendar";
import { SideBar } from "../components/SideBar/SideBar";
import Home from "../pages/Home/Home";
import React from "react";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="Aplication">
          <div className="aside">
            <SideBar />
          </div>
          <div className="content-app">
            <Routes>
              <Route  path="/" Component={Home} />
              <Route  path="/Calendar" Component={Calendar} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
