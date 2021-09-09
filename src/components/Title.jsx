import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const Title = ({ title, subTitle }) => {
  return (
    <>
      <section id="title">
        <Container>
          <Row>
            <Col xl={4}>
              <div className="main-title">
                <h2>{title}</h2>
                <div className="title-progress">
                  <ProgressBar now={45} />
                </div>
              </div>
              <div className="less-opacity-title">
                <h2 className="display-5 text-uppercase">{subTitle}</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Title;
