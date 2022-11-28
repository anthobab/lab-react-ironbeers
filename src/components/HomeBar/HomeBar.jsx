import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const HomeBar = () => {
  return (
    <header className="HomeBar">
      <Link to="" className="toHomeBar">
        {/* <picture> */}
        <FontAwesomeIcon icon={faHouse} className="iconHouse" />
        {/* </picture> */}
      </Link>
      <Outlet />
    </header>
  );
};

export default HomeBar;
