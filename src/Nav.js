import React from "react";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/menu">MENU</a>
        </li>
        <li>
          <a href="/reservations">RESERVATIONS</a>
        </li>
        <li>
          <a href="/order">ORDER ONLINE</a>
        </li>
        <li>
          <a href="/login">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
