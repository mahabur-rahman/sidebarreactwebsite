import React from "react";
import Title from "../components/Title";
import AboutInfo from "../components/AboutInfo";
import Skills from "../components/Skills";
import Services from "../components/Services";

const About = () => {
  return (
    <>
      <section id="about">
        <Title title={"About me"} subTitle={"About me"} />
        <AboutInfo />
        <Skills />
        <Title title={"Services"} />
        <Services />
      </section>
    </>
  );
};

export default About;
