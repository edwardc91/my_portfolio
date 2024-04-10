import React from "react";
import { Row, Col, Typography, Image, Grid } from "antd";
import Typed from "react-typed";

const { Title, Paragraph } = Typography;

const { useBreakpoint } = Grid;

const About = () => {
  const { md } = useBreakpoint();

  return (
    <div id="about-me" className="about-container" style={{ padding: "5%" }}>
      <Row justify="center">
        {md ? (
          <Col
            className="front-particles"
            md={10}
            style={{ textAlign: "center" }}
          >
            <Image
              src="images/pc-worker-pixel.gif"
              preview={false}
              style={{ width: 600 }}
            />
          </Col>
        ) : (
          <></>
        )}
        <Col className="front-particles" xs={24} md={12}>
          <Typography
            className="font-pixel"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            <Title className="font-color">
              <Typed strings={["About me"]} typeSpeed={40} />
            </Title>
            <Paragraph className="font-color">
              Graduated of the Central University of Las Villas "Marta Abreus"
              in 2015 with a bachelor's degree in Computer Science. Worked fours
              years on Chemical Biocative's Center as a software and web
              applications developer and also in the data managment of a
              clinical trial. One year working in several projects in the
              software developer company Desoft, while also working as software
              developer for a smart light plataform for canadian company
              IllumenAI . Later worked on Geocuba Company Group as a main
              specialist creating plataforms for managment of services and
              company data's thorugh the web. Currently working as one of the
              developers of AISCO's product AISCO Workspace, a plataform to
              facilite the collaboration between dealers and customers in the
              design and quote of irrigation projects for farms.
            </Paragraph>
            <Paragraph className="font-color">
              Pasionate and avid to learn new technologies and solve problems. I
              like to have fun while coding, so that results on a higher quality
              product. I have the moto that most of the time the best solution
              is the easiest to implement and the hardest to find. Good
              communication skills and willing to help fellow coworkers.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </div>
  );
};

export default About;
