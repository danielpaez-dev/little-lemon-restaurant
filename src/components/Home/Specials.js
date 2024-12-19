import React from "react";
import Button from "react-bootstrap/Button";
import Image1 from "../../assets/images/greek salad.jpg";
import Image2 from "../../assets/images/bruchetta.svg";
import Image3 from "../../assets/images/lemon dessert.jpg";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

function Specials() {
  const weekSpecials = [
    {
      imgSrc: Image1,
      sectionTitle: "Greek Salad",
      price: "12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
      imgSrc: Image2,
      sectionTitle: "Bruschetta",
      price: "5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
      imgSrc: Image3,
      sectionTitle: "Lemon Dessert",
      price: "5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
  ];

  return (
    <article
      className="background-container"
      id="specials"
      aria-labelledby="specials-title"
      aria-describedby="specials-description"
    >
      <div className="container">
        <div id="specials-header" className="section-header">
          <h2 className="section-title">This Weeks Specials!</h2>
          <Button
            className="custom-button"
            title="Reserve a table"
            href="/menu"
            aria-label="View the online menu"
          >
            Online Menu
          </Button>
        </div>
        <div id="special-cards">
          {weekSpecials.map((weekSpecial, index) =>
            <Card
              key={index}
              aria-labelledby={`special-title-${index}`}
              aria-describedby={`special-description-${index}`}
            >
              <Card.Img
                variant="top"
                src={weekSpecial.imgSrc}
                alt={`${weekSpecial.sectionTitle}`}
              />
              <Card.Body>
                <div className="title-price">
                  <Card.Title
                    id={`special-title-${index}`}
                    className="title-card-specials"
                  >
                    {weekSpecial.sectionTitle}
                  </Card.Title>
                  <Card.Title className="price">
                    {weekSpecial.price}
                  </Card.Title>
                </div>
                <Card.Text id={`special-description-${index}`}>
                  {weekSpecial.description}
                </Card.Text>
                <a
                  href="/booking"
                  aria-label={`Order a delivery for ${weekSpecial.sectionTitle}`}
                >
                  Order a delivery <FontAwesomeIcon icon={faTruck} />
                </a>
              </Card.Body>
            </Card>
          )}
        </div>
        <div />
      </div>
    </article>
  );
}

export default Specials;
