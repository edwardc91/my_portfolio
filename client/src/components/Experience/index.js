import React from "react";
import {
    Row,
    Col,
    Typography,
    Tag
} from "antd";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./index.scss"

const { Title } = Typography;

const Experience = () => {

    const experience_data = [
        {
            "company": "DefOpenSource",
            "title": "Front-End Developer",
            "years": "10.2019 - present",
            "mainTech": [
                "Angular 8/9/10"
            ],
            "technologies": [
                "REST API",
                "RxJS",
                "JavaScript",
                "Bootstrap",
                "MDBootstrap",
                "EF Core",
                ".NET Core",
                "SignalR",
                "Angular Material"
            ]
        },
        {
            "company": "Serros Solutions",
            "title": "Intern",
            "years": "01.2018 - 09.2019",
            "mainTech": [
                "Angular 7/8"
            ],
            "technologies": [
                "RxJS",
                "Django",
                "PHP",
                "JavaScript",
                "DHTMLX Gantt"
            ]
        }
    ]

    const work = experience_data.map((work, i) => {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
            return (
                <Tag key={i}>
                    <span className="font-pixel">{technology}</span>
                </Tag>
            );
        });

        var tech = technologies.map((technology, i) => {
            return (
                <Tag key={i}>
                    <span className="font-pixel">{technology}</span>
                </Tag>
            );
        });

        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: '7px solid  #555555' }}
                date={work.years}
                iconStyle={{
                    background: "#555555",
                    color: "#fff",
                    textAlign: "center",
                }}
                //icon={<i className="fab fa-angular experience-icon"></i>}
                key={i}
            >
                <div style={{ textAlign: "left", marginBottom: "4px" }}>
                    {mainTech}
                </div>

                <Title level={3}
                    className="font-pixel font-color"
                    style={{ textAlign: "left" }}
                >
                    {work.title}
                </Title>
                <Title level={4}
                    className="font-pixel font-color"
                    style={{ textAlign: "left" }}
                >
                    {work.company}
                </Title>
                <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            </VerticalTimelineElement>
        );
    });


    return (
        <div className="experience-container" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
            <Row justify="center">
                <Col span={24} className="front-particles">
                    <Col span={24} style={{ textAlign: "center" }}>
                        <Title className="font-pixel font-color">
                            Experience
                        </Title>
                    </Col>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={20}>
                    <VerticalTimeline>
                        {work}
                        {/* <VerticalTimelineElement
                            iconStyle={{
                                background: "#555555",
                                color: "#fff",
                                textAlign: "center",
                            }}
                        // icon={
                        //     <HourglassTwoTone />
                        // }
                        /> */}
                    </VerticalTimeline>
                </Col>
            </Row>
        </div>
    )
}

export default Experience;