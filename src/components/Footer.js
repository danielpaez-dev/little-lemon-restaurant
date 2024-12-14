import React from "react";
import Image from "react-bootstrap/Image";
import FooterLogo from "../assets/images/logo-white.png";
import Sitemap from "./Footer/Sitemap";
import ContactUs from "./Footer/ContactUs";
import ConnectWithUs from "./Footer/ConnectWithUs";

function Footer() {
  return (
    <footer className="background-container">
      <div className="container">
        <Image src={FooterLogo} alt="Logo of Little Lemon Restaurant" />
        <Sitemap />
        <ContactUs />
        <ConnectWithUs />
      </div>
    </footer>
  );
}

export default Footer;
