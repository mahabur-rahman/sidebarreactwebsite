import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Title from "./Title";
import SkillsData from "../Data/SkillsData";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <Title title={"Skills"} />
        <Container>
          <Row>
            <Col xl={10} lg={12}>
              <Row>
                {SkillsData.map((data) => (
                  <Col xl={6} lg={6} key={data.id}>
                    <div className="title mt-5">
                      <h6>{data.title}</h6>
                      <ProgressBar now={data.now} label={data.label} />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skills;
