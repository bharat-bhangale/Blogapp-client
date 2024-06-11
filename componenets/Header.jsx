import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Usercontext";

const Header = () => {
 const {setUserInfo, userInfo} = useContext(UserContext)

  useEffect(() => {
    fetch("https://blogapp-server-bfj0.onrender.com/profile", {
      credentials: "include",
    }).then((response) => response.json().then((userInfo) => {setUserInfo(userInfo);}));
  }, []);

  const logout = () => {
    fetch("https://blogapp-server-bfj0.onrender.com/logout", {
      credentials: "include",
      method:"POST",
    })
    setUserInfo(null);
  };


  const username = userInfo?.username;
  
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          BlogApp
        </Link>
        <nav>
          {username && (
            <>
              <Link to="/create">Create new post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
