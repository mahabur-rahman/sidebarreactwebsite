import React from "react";
import aboutImg from "../images/about.svg";
import { Col, Container, Image, Row } from "react-bootstrap";
import { BioData, BioDataResult } from "../Data/BioData";
import LoadingBtn from "../components/Button";

const AboutInfo = () => {
  return (
    <>
      <section id="aboutInfo">
        <Container>
          <Row>
            <Col xl={6} lg={6} className="align-self-center">
              <div className="left-part">
                <Image src={aboutImg} alt="About Me" fluid />
              </div>
            </Col>
            <Col xl={6} lg={6} className="align-self-center mt-5 mt-xl-0">
              <div className="right-part">
                <h3>
                  I'm <span>Mahabur</span>
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe voluptatibus ea voluptas quo labore unde?
                </p>
                <div className="info">
                  <div className="left-info d-flex justify-content-between">
                    <ul>
                      {BioData.map((data) => (
                        <li
                          key={data.id}
                          className="text-capitalize letter-spacing"
                        >
                          {data.title}
                        </li>
                      ))}
                    </ul>
                    <ul>
                      {BioDataResult.map((data) => (
                        <li key={data.id} className="letter-spacing">
                          {data.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <LoadingBtn />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutInfo;
