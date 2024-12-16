import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import Image from 'react-bootstrap/Image';

const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/menu", label: "MENU" },
  { path: "/reservations", label: "RESERVATIONS" },
  { path: "/order", label: "ORDER" },
  { path: "/login", label: "LOGIN" }
];

function HeaderNav() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/">
        <Image
          src={Logo}
          alt="Logo of Little Lemon Restaurant"
          title="Go Home"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        aria-label="Toggle navigation"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {navLinks.map(link =>
            <Nav.Link
              key={link.path}
              as={Link}
              to={link.path}
              title={`Go to ${link.path}`}
            >
              {link.label}
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderNav;
