import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter as faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function ConnectWithUs() {
  return (
    <div id="connect-with-us">
      <h3>Connect With Us</h3>
      <ul>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faFacebook} title="Go to Facebook"/>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faXTwitter}  title="Go to X"/>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faInstagram}  title="Go to Instagram"/>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ConnectWithUs;
