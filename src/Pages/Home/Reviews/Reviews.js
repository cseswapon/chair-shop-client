import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";

const Reviews = ({ view }) => {
  const { name, email, rating, description } = view;
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title className="text-center fs-3">{name}</Card.Title>
          <Card.Title className="text-center text-danger fs-6">
            {email}
          </Card.Title>
          <Card.Text className="text-center">{description}</Card.Text>
          <div className="text-center text-warning">
            <Rating
              style={{ fontSize: 10, color: "golden" }}
              readonly
              initialRating={rating}
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
            />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Reviews;
