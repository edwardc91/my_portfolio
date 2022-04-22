import React from "react";
import { Row, Col, Typography, Card, Progress, Grid } from "antd"
import Typed from 'react-typed'

const { Title } = Typography;

const { useBreakpoint } = Grid

const Skills = () => {
    const { md } = useBreakpoint();

    const skillsBackendData = [
        {
            name: "Python",
            value: 90,
            image_url: "images/skills_logos/django-logo.png"
        },
        {
            name: "Django",
            value: 90,
            image_url: "images/skills_logos/django-logo.png"
        },
        {
            name: "Flask",
            value: 70,
            image_url: "images/skills_logos/flask-logo.png"
        },
        {
            name: "Django-REST",
            value: 75,
            image_url: "images/skills_logos/django-rest.png"
        },
        {
            name: "PostgreSQL",
            value: 80,
            image_url: "images/skills_logos/postgresql-logo.png"
        },
        {
            name: "MySQL",
            value: 65,
            image_url: "images/skills_logos/postgresql-logo.png"
        },
        {
            name: "Odoo",
            value: 75,
            image_url: "images/skills_logos/postgresql-logo.png"
        },
        {
            name: "Geonode",
            value: 30,
            image_url: "images/skills_logos/postgresql-logo.png"
        },
    ]

    const skillsFrontendData = [
        {
            name: "HTML5",
            value: 90,
            image_url: "images/skills_logos/django-logo.png"
        },
        {
            name: "CSS/SCSS",
            value: 65,
            image_url: "images/skills_logos/django-logo.png"
        },
        {
            name: "ReactJS",
            value: 65,
            image_url: "images/skills_logos/django-logo.png"
        },
        {
            name: "React-Redux",
            value: 65,
            image_url: "images/skills_logos/django-logo.png"
        },
        {
            name: "Bootstrap",
            value: 70,
            image_url: "images/skills_logos/flask-logo.png"
        },
    ]

    const skillsDevOpsData = [
        {
            name: "Git/CI-CD",
            value: 70,
            image_url: "images/skills_logos/django-logo.png"
        },
        {
            name: "Docker",
            value: 75,
            image_url: "images/skills_logos/django-logo.png"
        },
        {
            name: "AWS",
            value: 50,
            image_url: "images/skills_logos/django-logo.png"
        },
        {
            name: "Agile Development",
            value: 70,
            image_url: "images/skills_logos/django-logo.png"
        },
    ]

    const generateSkills = (skills) => {
        return (
            <Col xs={24}>
                <Card className="skill-card front-particles">
                    {skills.map((skill, i) => {
                        return (
                            <Row gutter={[8,8]}>
                                <Col style={{ textAlign: md ? "end" : "start"}} span={12}>
                                    <div className="font-color" key={i}>{skill.name} </div>
                                </Col>
                                <Col style={{ textAlign: "start"}} span={12}>
                                    <Progress percent={skill.value} steps={6} showInfo={false}/>
                                </Col>
                            </Row>
                        )
                    }
                    )
                    }
                </Card>
            </Col>
        )
    }

    return (
        <div id="skills" className="skills-container" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
            <Row justify="center">
                <Col span={24} className="front-particles">
                    <Col span={24} style={{ textAlign: "center" }}>
                        <Title className="font-pixel font-color">
                            <Typed strings={["Skills"]} typeSpeed={40} />
                        </Title>
                    </Col>
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center" style={{ padding: "1%" }}>
                <Col xs={24} md={8}>
                    <Card title="Backend" className="font-pixel font-color card-skills-group">
                        <Row justify="space-around" style={{ padding: "2%" }} gutter={[8, 8]}>
                            {generateSkills(skillsBackendData)}
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card title="Frontend" className="font-pixel font-color card-skills-group">
                        <Row justify="space-around" style={{ padding: "2%" }} gutter={[8, 8]}>
                            {generateSkills(skillsFrontendData)}
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card title="DevOps" className="font-pixel font-color card-skills-group">
                        <Row justify="space-around" style={{ padding: "2%" }} gutter={[8, 8]}>
                            {generateSkills(skillsDevOpsData)}
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Skills;