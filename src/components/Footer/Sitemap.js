import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/menu", label: "MENU" },
  { path: "/booking", label: "BOOKIING" },
  { path: "/order", label: "ORDER" },
  { path: "/login", label: "LOGIN" }
];

function Sitemap() {
  return (
    <div id="sitemap">
      <h3>Sitemap</h3>
      <Navbar>
        <Nav>
          {navLinks.map(link =>
            <Nav.Link key={link.path} as={Link} to={link.path}>
              {link.label}
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Sitemap;
