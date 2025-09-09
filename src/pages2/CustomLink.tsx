import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const CustomLink = () => {
  const navigate = useNavigate();
 
  return (
    <div>
      <h3>CustomLink</h3>
      {window.location.href === "http://localhost:5173/home-page"?       <Link to={"/home-page"} >To homepage</Link>
 :        <Link to={"/not-found"} >To notfound</Link>
}
    </div>
  );
};

