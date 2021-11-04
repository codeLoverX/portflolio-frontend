import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../../actions/loginAction";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./SideBar.css";
import { IconContext } from "react-icons";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const showSidebar = () => setSidebar(!sidebar);

  const onLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar bg-dark" style={{height: "60px"}}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active bg-dark" : "nav-menu"}>
          <ul className="nav-menu-items bg-dark" onClick={showSidebar}>
            <li className="sidebar-toggle bg-dark">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {item.title === "Logout" ? (
                    <span onClick={onLogout} style={{cursor: "pointer", fontWeight: "bold", fontSize: "18px", color: "white"}}>
                      {item.icon}
                      <span>{item.title}</span>
                    </span>
                  ) : (
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
