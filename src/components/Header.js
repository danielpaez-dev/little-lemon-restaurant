import React from "react";
import HeaderNav from "./Nav";

function Header() {
  return (
    <header className="background-container" role="banner">
      <div className="container">
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
