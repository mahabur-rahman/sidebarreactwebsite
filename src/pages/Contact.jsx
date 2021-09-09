import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import contactData from "../Data/ContactData";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <Title title={"Contact Me"} subTitle={"Contact Me"} />
        <Container>
          <Row className="mt-5 pt-4">
            <Col xl={12}>
              <Row>
                <Col xl={6} lg={12} className="align-self-center">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239034277!2d90.27923688816911!3d23.780887457377204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1631082734754!5m2!1sen!2sbd"
                    width="420"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen="0"
                    loading="lazy"
                  ></iframe>
                </Col>
                <Col
                  xl={6}
                  lg={6}
                  className="align-self-center mx-auto mt-4 mt-xl-0"
                >
                  {contactData.map((data) => (
                    <div className="contact-box d-flex shadow" key={data.id}>
                      <div className="icon">{data.icon}</div>
                      <div className="text mx-4">
                        <h3>{data.title}</h3>
                        <p>{data.subTitle2}</p>
                        <p>{data.subTitle3}</p>
                      </div>
                    </div>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
