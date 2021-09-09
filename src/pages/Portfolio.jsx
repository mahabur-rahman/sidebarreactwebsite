import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { FaGithub, FaYoutube } from "react-icons/fa";
import Title from "../components/Title";
// data
import portfolios from "../Data/PortfolioData";

// for mapping all categories 👍
const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

const Portfolio = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filterData = portfolios.filter((item) => {
      return item.category === category;
    });

    setMenuItems(filterData);
  };

  return (
    <>
      <section id="portfolio">
        <Title title={"Portfolio"} subTitle={"Portfolio"} />
        <Container>
          <Row className="text-center mt-5 pt-4">
            <Col xl={12} className="mx-auto">
              <div className="filterBtn">
                <ul className="list-inline">
                  {categories.map((category, i) => (
                    <li
                      className="list-inline-item my-1 my-lg-0"
                      key={i}
                      onClick={() => filter(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="text-center my-5">
            <Col xl={12} className="mx-auto">
              <Row className="gy-4">
                {menuItems.map((data) => (
                  <Col xl={4} lg={4} md={6} key={data.id}>
                    <div className="filterItem">
                      <Card>
                        <Card.Img
                          variant="top"
                          src={data.image}
                          alt={data.title}
                        />
                        <Card.Body>
                          <Card.Title>{data.title}</Card.Title>
                          <Card.Text>{data.text}</Card.Text>
                          {/* hide link // active on hover  */}
                          <div className="hideLinks">
                            <a href={data.link1} target="blank">
                              <FaGithub />
                            </a>
                            <a href={data.link2} target="blank">
                              <FaYoutube />
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
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

export default Portfolio;
