import React from "react";
import { Row, Col, Typography, Card, Image } from "antd"
import Typed from 'react-typed'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const { Title } = Typography;

const Skills = () => {
    const getData = (value) => {
        return {
            //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    //label: '# of Votes',
                    data: [value, 100 - value],
                    backgroundColor: [
                        'rgba(85, 85, 85, 1)',
                        'rgba(0, 0, 0, 1)',
                    ],
                    borderColor: [
                        'rgba(85, 85, 85, 1)',
                        'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        }
    }

    return (
        <div className="skills-container" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
            <Row justify="center">
                <Col span={24} className="front-particles">
                    <Col span={24} style={{ textAlign: "center" }}>
                        <Title className="font-pixel font-color">
                            <Typed strings={["Skills"]} typeSpeed={40} />
                        </Title>
                    </Col>
                </Col>
            </Row>
            <Row justify="space-around" style={{ paddingTop: "2%" }}>
                <Col span={3} style={{ textAlign: "center" }}>
                    <Card className="skill-card">
                        <Doughnut data={getData(80)}/>
                        <Image src="images/skills_logos/django-logo.png" preview={false} style={{ marginTop: "3%", width: "130px" }}/>
                        <Title className="font-pixel font-color" level={4} style={{ marginTop: "2%"}}>
                            Django
                        </Title>
                    </Card>
                </Col>
                <Col span={3} style={{ textAlign: "center" }}>
                    <Card className="skill-card">
                        <Doughnut data={getData(80)}/>
                        <Image src="images/skills_logos/flask-logo.png" preview={false} style={{ marginTop: "3%", width: "50px" }}/>
                        <Title className="font-pixel font-color" level={4} style={{ marginTop: "2%"}}>
                            Flask
                        </Title>
                    </Card>
                </Col>
                <Col span={3} style={{ textAlign: "center" }}>
                    <Card className="skill-card">
                        <Doughnut data={getData(80)}/>
                        <Image src="images/skills_logos/django-rest.png" preview={false} style={{ marginTop: "3%", width: "130px" }}/>
                        <Title className="font-pixel font-color" level={4} style={{ marginTop: "2%"}}>
                            Django-REST
                        </Title>
                    </Card>
                </Col>
                <Col span={3} style={{ textAlign: "center" }}>
                    <Card className="skill-card">
                        <Doughnut data={getData(80)}/>
                        <Image src="images/skills_logos/postgresql-logo.png" preview={false} style={{ marginTop: "3%", width: "50px" }}/>
                        <Title className="font-pixel font-color" level={4} style={{ marginTop: "2%"}}>
                            Flask
                        </Title>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Skills;