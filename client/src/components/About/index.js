import React from "react";
import { Row, Col, Typography, Image } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const About = () => {

    return (
        <div className="about-container" style={{ padding: "2%" }}>
            <Row justify="center">
                <Col className="front-particles" span={10} style={{ textAlign: "center" }}>
                    <Image src="images/pc-worker-pixel.gif" preview={false} style={{ width: 600 }}/>
                </Col>
                <Col className="front-particles" span={12}>
                    <Typography className="font-pixel">
                        <Title className="font-color" >About me</Title>
                        <Paragraph className="font-color">
                            Graduated of the Central University of Las Villas "Marta Abreus" in 2015 with a bachelor's degree in Computer Science.  Worked fours years on Chemical Biocative's Center as a softare and web applications developer and also in the data managment of a clinical trial. One year working in several projects in the software developer company Desoft, while also working as software developer for a smart light plataform for canadian company IllumenAI . Currently working on Geocuba Company Group as a main specialist creating plataforms for managment of services and company data's thorugh the web.
                            Pasionate and avid to learn new technologies and solve problems. I like to have fun while coding, so that results on a higher quality product. I have the moto that most of the time the best solution is the easiest to implement and the hardest to find. Good communication skills and willing to help fellow coworkers.
                        </Paragraph>
                    </Typography>
                </Col>
            </Row>
        </div>
    )
}

export default About;