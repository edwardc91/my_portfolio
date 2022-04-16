import React from "react";
import { Row, Col, Typography, Card, Image } from "antd"
import Typed from 'react-typed'
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from 'recharts';

const { Title } = Typography;

const Skills = () => {
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
            name: "Git/Gitlab/CI/CD",
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

    const getData = (skill, value) => {
        return [
            { name: skill, value },
            { name: 'resto', value: 100 - value },
        ]
    }

    const COLORS = ["#ffffff", "#555555"]

    const generateSkills = (skills) => {
        return skills.map((skill, i) => {
            return (
                <Col span={3} style={{ textAlign: "center" }} key={i}>
                    <Card className="skill-card front-particles">
                        <div style={{ width: 165, height: 180, margin: 'auto' }}>
                        <ResponsiveContainer>
                            <PieChart className="front-particles">
                                <Pie
                                    className="front-particles"
                                    data={getData(skill.name, skill.value)}
                                    cx="50%"
                                    cy="50%"
                                    startAngle={180}
                                    endAngle={0}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#ffffff"
                                    
                                    dataKey="value"
                                    labelLine={false}
                                >
                                    {getData(skill.name, skill.value).map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    <Label className="font-color" value={`${skill.value}%`} fill={'#fff'} position="center" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        </div>
                        {/* <Image src={skill.image_url} preview={false} style={{ marginTop: "3%", width: "130px" }} /> */}
                        <Title className="font-pixel font-color" level={4} style={{ marginTop: "2%" }}>
                            {skill.name}
                        </Title>
                    </Card>
                </Col>
            )
        }
        )
    }

    return (
        <div id="skills" className="skills-container" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
            <Row justify="center">
                <Col span={24} className="front-particles">
                    <Col span={24} style={{ textAlign: "center" }}>
                        <Title  className="font-pixel font-color">
                            <Typed strings={["Skills"]} typeSpeed={40} />
                        </Title>
                    </Col>
                </Col>
            </Row>
            <Row justify="center" style={{ padding: "1%" }}>
                <Col span={24}>
                    <Card title="Backend" className="font-pixel font-color card-skills-group">
                        <Row justify="space-around" style={{ padding: "2%" }} gutter={[8, 8]}>
                            {generateSkills(skillsBackendData)}
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row justify="center" style={{ padding: "1%" }}>
                <Col span={24}>
                    <Card title="Frontend" className="font-pixel font-color card-skills-group">
                        <Row justify="space-around" style={{ padding: "2%" }} gutter={[8, 8]}>
                            {generateSkills(skillsFrontendData)}
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row justify="center" style={{ padding: "1%" }}>
                <Col span={24}>
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