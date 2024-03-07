import "./sideBar.css";
import { IoMdHome } from "react-icons/io";
import { IoIosCalendar } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import {NavLink } from "react-router-dom";
import React from "react";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <div>
        <div className="perfil">
          <img
            src="https://avatars.githubusercontent.com/u/99615871?v=4"
            alt="perfil"
          />
          <div className="nameP">
            <p>Olá João</p>
          </div>
        </div>

        <div className="pagseAside">
          <div className="title-content">
            <h3>Páginas</h3>
          </div>

          <div className="contentPages">
          <NavLink to="/" className="loc">
            <div className="page-link">
              <div className="icon-nav">
                <IoMdHome />
              </div>
              <p className="funcTo">Home</p>
            </div>
            </NavLink>
          <NavLink to="/Calendar" className="loc">
            <div className="page-link">
              <div className="icon-nav">
                <IoIosCalendar />
              </div>
              <p className="funcTo">Calendário</p>
            </div>
            </NavLink>
            <div className="page-link">
              <div className="icon-nav">
                <FiActivity />
              </div>
              <p>Ver Atividades</p>
            </div>

            <div className="page-link">
              <div className="icon-nav">
                <FaCircleUser />
              </div>
              <p>Perfil</p>
            </div>
            <div className="logOut">
              <div className="page-link">
                <div className="icon-nav">
                  <IoLogOutOutline />
                </div>
                <p>Sair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
