import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import RestaurantFood from "../../assets/images/restaurantfood.jpg";

function Hero() {
  return (
    <article className="background-container" id="hero" aria-labelledby="hero-title" aria-describedby="hero-description">
      <div className="container">
        <div>
          <h1 id="hero-title">Little Lemon</h1>
          <h2 className="subtitle-text">Chicago</h2>
          <p id="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button
            className="custom-button"
            title="Reserve a table"
            href="/reservations"
            aria-label="Reserve a table at Little Lemon Restaurant"
          >
            Reserve a table
          </Button>
        </div>
        <div className="image-container">
          <Image
            src={RestaurantFood}
            alt="Bruschettas"
            aria-label="Image of bruschettas"
          />
        </div>
      </div>
    </article>
  );
}

export default Hero;
