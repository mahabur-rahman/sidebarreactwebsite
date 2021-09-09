import React, { useEffect, useRef } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// ityped plugin
import { init } from "ityped";

const Hero = () => {
  // ityped
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["full stack developer", "react developer", "web designer"],
    });
  }, []);

  return (
    <>
      <section id="hero">
        <Container>
          <Row>
            <Col xl={8} className="mx-auto">
              <div className="hero-content">
                <div className="hero-info">
                  <h2 className="display-4 fw-bold">
                    Hi, I'm <span className="name">Mahabur</span>
                  </h2>
                  <h5>
                    Freelance <span className="move" ref={textRef}></span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem dolorem vero excepturi sapiente, id
                    consequatur reiciendis magni quasi laudantium ipsam.
                  </p>
                </div>
                <div className="hero-social-links">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <NavLink to="/contact" className="mx-3">
                        <FaFacebookF />
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/contact" className="mx-3">
                        <FaGithub />
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/contact" className="mx-3">
                        <FaTwitter />
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/contact" className="mx-3">
                        <FaLinkedinIn />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
