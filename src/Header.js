import React from "react";
import Nav from "./Nav";
import Logo from "./assets/images/Logo.svg";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo of Little Lemon Restaurant"/>
      <Nav />
    </header>
  );
}

export default Header;