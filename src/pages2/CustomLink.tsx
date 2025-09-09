import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const CustomLink = () => {
  const navigate = useNavigate();
  const handleRedirect = (): void => {
    if (window.location.href === "http://localhost:5173/home-page") {
      navigate("/home-page"); 
    } else {
      navigate("/not-found"); 
    }
  };
  return (
    <div>
      <h3>CustomLink</h3>
      <Link to={"/home-page"} onClick={handleRedirect}>To homepage</Link>
    </div>
  );
};
