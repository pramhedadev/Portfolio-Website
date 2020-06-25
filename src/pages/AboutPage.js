import React from "react";
import HomeTitle from "../components/HomeTitle";
import Content from "../components/Content";
import "../styles/about.css";

function AboutPage(props) {
  return (
    <div>
      <HomeTitle title={props.title} />

      <Content>
        <p>
          <p> Hey there, </p> I'm Hlela Maqoqa , also known as
          <a
            style={{ color: "dimgray" }}
            href="https://www.instagram.com/pram_heda_dev/"
          >
            {" "}
            pram_heda_dev{" "}
          </a>{" "}
          on Instagram. I'm a Fullstack Software Developer in South Africa ,
          Cape Town.
          <p>
            I'm passionate about designing and building and I am currently using
            Reactjs as my front-end framework.
          </p>
          <p>
            My journey started in High School, when I chose Information
            Technology as one of my major subjects. We started with the
            fundumentals of logical/algorithmic thinking using Scratch. That was
            fun{" "}
          </p>
          <p>We then continued coding in Delphi / Pascal until Matric. </p>
          <p>
            Post matric I took a gap year and did a learnership in Systems
            Development and we focused on Java, 6 months down the line I landed
            an internship at a Web Development company for 6 months which became
            one complete year of me being part of the industry{" "}
          </p>
          <p>
            {" "}
            I became part of a passionate group of young upcoming software
            developers at Younglings Africa ( Absa Aliens) and continued
            programing in Java for 6 months. I was then offered a Scholarship to
            study Full Stack Coding at an intense 6 week program called
            <a style={{ color: "dimgray" }} href="https://ixperience.co/">
              {" "}
              iXperience{" "}
            </a>{" "}
            and that was when I got introduced to Full Stack Software
            Development{" "}
          </p>
          <h2> My Skills </h2>
          <div style={{ textAlign: "center" }} className="skills-container">
            <ul>
              <div className="skills-column">
                <li>HTML5/CSS5 </li>
                <li>Bootstrap </li>

                <li> AdobeXD</li>
              </div>
              <div className="skills-column">
                <li>JavaScript </li>

                <li>Java </li>

                <li> TypeScript</li>
              </div>
              <div className="skills-column">
                <li>React.js </li>
                <li> Angular.js</li>
                <li>SQL </li>
              </div>
              <div className="skills-column">
                <li>Firebase </li>
                <li>Express</li>
                <li> Git</li>
              </div>
            </ul>
          </div>
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
