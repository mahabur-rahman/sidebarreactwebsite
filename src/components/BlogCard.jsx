import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BlogCard = ({ imgSrc, title, url }) => {
  return (
    <>
      <Col xl={6} lg={6} md={6}>
        <NavLink to={url}>
          <Card className="shadow-lg">
            <Card.Img variant="top" src={imgSrc} className="py-4" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
          </Card>
        </NavLink>
      </Col>
    </>
  );
};

export default BlogCard;
