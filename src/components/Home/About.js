import React from "react";
import Image from "react-bootstrap/Image";
import MarioAdrianA from "../../assets/images/Mario and Adrian A.jpg";
import MarioAdrianB from "../../assets/images/Mario and Adrian B.jpg";

function About() {
  return (
    <article className="background-container" id="about" aria-labelledby="about-title">
      <div className="container">
        <div id="about-text">
          <div className="section-header">
            <h2 className="display-text" id="about-title">Little Lemon</h2>
            <h3 className="subtitle-text">Chicago</h3>
          </div>
          <p id="about-description" aria-labelledby="about-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div id="about-images" aria-label="Photos of Mario and Adrian at the kitchen">
          <Image src={MarioAdrianA} alt="Mario and Adrian at the kitchen" />
          <Image src={MarioAdrianB} alt="Mario and Adrian at the kitchen" />
        </div>
      </div>
    </article>
  );
}

export default About;
