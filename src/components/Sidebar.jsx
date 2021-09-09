import React from "react";
import profile from "../images/profile.jpg";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  FaHome,
  FaBookReader,
  FaPortrait,
  FaMicroblog,
  FaPhoneAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="fixed-sidebar">
        <Container>
          <Row>
            <Col>
              <div className="main-sidebar">
                <div className="sidebar-img">
                  <div className="profile">
                    <NavLink to="/">
                      <Image src={profile} alt="Profile" />
                    </NavLink>
                  </div>
                </div>
                <div className="sidebar-links">
                  <ul>
                    <li>
                      <NavLink to="/" exact activeClassName="activeMenu">
                        <span className="mx-2 icon">
                          <FaHome />
                        </span>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" activeClassName="activeMenu">
                        <span className="mx-2 icon">
                          <FaBookReader />
                        </span>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio" activeClassName="activeMenu">
                        <span className="mx-2 icon">
                          <FaPortrait />
                        </span>
                        Portfolio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog" activeClassName="activeMenu">
                        <span className="mx-2 icon">
                          <FaMicroblog />
                        </span>
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" activeClassName="activeMenu">
                        <span className="mx-2 icon">
                          <FaPhoneAlt />
                        </span>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-footer">
                  <p>
                    &copy; Copyright & All Right Reserved By
                    <NavLink to="/contact"> Mahabur Rahman</NavLink>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Sidebar;
