import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ServicesData from "../Data/ServicesData";

const Services = () => {
  return (
    <>
      <section id="services">
        <Container>
          <Row className="gy-4">
            {ServicesData.map((data) => (
              <Col xl={4} lg={6} key={data.id}>
                <NavLink to={data.url}>
                  <Card>
                    <Card.Body>
                      <div className="card-icons">{data.icon}</div>
                      <Card.Title className="my-3">{data.heading}</Card.Title>
                      <Card.Text>{data.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </NavLink>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
