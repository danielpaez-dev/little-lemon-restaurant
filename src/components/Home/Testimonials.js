import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
      .then((response) => response.json())
      .then((data) => {
        const users = data.results.map((user) => ({
          image: user.picture.large,
          name: `${user.name.first} ${user.name.last}`,
          stars: Math.floor(Math.random() * 11) / 2, // Rango de 0 a 5 con pasos de 0.5
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at magna vel ex auctor scelerisque.",
        }));
        setTestimonials(users);
      })
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <article className="background-container" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
        </div>
        <div id="testimonials-grid">
          {testimonials.map((testimonial, index) => {
            const fullStars = Math.floor(testimonial.stars);
            const hasHalfStar = testimonial.stars % 1 !== 0;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

            return (
              <Card key={index} className="testimonial-card">
                <Card.Img
                  src={testimonial.image}
                  alt={testimonial.name}
                  title={testimonial.name}
                />
                <Card.Body>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <div className="rating" aria-label={`Rating: ${testimonial.stars} out of 5 stars`}>
                    {/* Estrellas llenas */}
                    {Array.from({ length: fullStars }, (_, i) => (
                      <FontAwesomeIcon
                        key={`full-${i}`}
                        icon={faStar}
                        className="star"
                      />
                    ))}
                    {/* Estrella media */}
                    {hasHalfStar && (
                      <span className="half-star">
                        <FontAwesomeIcon icon={faStarHalfStroke} className="star" />
                      </span>
                    )}
                    {/* Estrellas vacías */}
                    {Array.from({ length: emptyStars }, (_, i) => (
                      <FontAwesomeIcon
                        key={`empty-${i}`}
                        icon={faEmptyStar}
                        className="star"
                      />
                    ))}
                  </div>
                  <Card.Text aria-label={`Testimonial from ${testimonial.name}`}>{`"${testimonial.description}"`}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Testimonials;
