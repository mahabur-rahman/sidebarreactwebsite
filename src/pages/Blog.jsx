import React from "react";
import Title from "../components/Title";
import BlogCard from "../components/BlogCard";
import { Col, Container, Row } from "react-bootstrap";
import blogCardData from "../Data/BlogCardData";

const Blog = () => {
  return (
    <>
      <section id="blog">
        <Title title={"Recent Blogs"} subTitle={"Recent Blogs"} />
        <Container>
          <Row>
            <Col xl={8} className="mx-auto">
              <Row className="gy-4 mt-5">
                {blogCardData.map((data) => (
                  <BlogCard {...data} key={data.id} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
