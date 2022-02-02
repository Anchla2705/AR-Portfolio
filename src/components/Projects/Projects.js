import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently and my published
          paper.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Toy shop"
              description="I have made small online toy store projet with basic e-commerce funtions build with react.js, Online Toy Store web application is used to buy exclusive toys and sporting equipment for kids. User add desired items to their shopping cart and save  You can enter any quantity of items as long as the number is within the inventory range. A soft delete is implemented on the deletion of products."
              link="https://github.com/Anchla2705/shopping-cart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="My portfolio"
              description=" A portfolio site is essential for every software developer to showcase projects and technical skills which demonstrates what you can do based upon your resume.
              So I have built my site using react.js My personal portfolio project which features some of my github projects as well as my resume and technical skills This project was built using these technologies React.js,Node.js,Express.js,CSS3,VsCode,Vercel"
              link="https://github.com/Anchla2705/AR-Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Food restro"
              description="Online food ordering system build with react.js. food ordering system which supports html, css, bootstrap and js code with instant view of website A mini project on React js to implement Food ordering with login, signup, add to cart functionalities. and aading api calling feature."
              link="https://github.com/Anchla2705/food-react-js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Survey paper"
              description="In this paper, experimental validation of the self-powered WSN for indoor monitoring proposed on multi-hop topology the choice of solor cell type microcontroller and  sensor are the factors for device development. the harvested energy must  be above the WSN energy requirements."
              link="https://www.jetir.org/view?paper=JETIR2101062"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Research paper"
              description="This paper presents a proof of concept for self powered Internet of Things (IoT) device, which is maintenance free and  completely self-sustainable through energy harvesting  also you can search this paper ID SR21422180055 with this link https://www.ijsr.net/search_index_results.php" 
              link="https://www.ijsr.net/archive/v10i4/SR21422180055.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
