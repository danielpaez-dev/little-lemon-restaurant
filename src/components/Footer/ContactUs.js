import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"; // Import the necessary icons

function ContactUs() {
  return (
    <div id="contact-us">
      <h3>Contact us</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faLocationDot} /> Little Lemon, 19/20 Royal
          Hibernian Way, Duke Lane Upper, Dublin 2 Dublin 2, Dublin, D02 K772,
          Irlanda
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} /> +35319058777
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> customer@littlelemon.com
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
