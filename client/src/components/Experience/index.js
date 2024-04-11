import React from "react";
import { Row, Col, Typography, Tag, Grid } from "antd";
import { useSelector } from "react-redux";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Typed from "react-typed";

import { useTranslation } from "react-i18next";

import "react-vertical-timeline-component/style.min.css";
import "./index.scss";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Experience = () => {
  const { t } = useTranslation("common");
  const { md } = useBreakpoint();
  const currentTheme = useSelector((state) => state.themeSwitch.currentTheme);

  const experience_data = [
    {
      company: "AISCO",
      title: t("Experience.position_sd", "Software Developer"),
      description: t(
        "Experience.aisco.description",
        "Development of the client side and microservices of the company's product AISCO Workspace, a plataform to facilite the collaboration between dealers and customers in the design and quote of irrigation projects for farms."
      ),
      years: `2023 - ${t("present", "present")}`,
      mainTech: ["Python Django, React/NextJS"],
      technologies: [
        "REST API",
        "Python",
        "Django",
        "ReactJS",
        "NextJS",
        "OpenLayers",
        "TypeScript",
        "Postgres",
        "Stripe",
      ],
    },
    {
      company: "Geocuba",
      title: t("Experience.position_sis", "Specialist in Informatics Science"),
      description: t(
        "Experience.geocuba.description",
        "Development of Web Applications for geo-spatial related services"
      ),
      years: "2020 - 2023",
      mainTech: ["Python Django"],
      technologies: [
        "REST API",
        "Python",
        "Django",
        "GeoDjango",
        "ReactJS",
        "Pandas",
        "Postgres/Postgis",
        "Geonode",
        "Docker",
      ],
    },
    {
      company: "IllumenAI",
      title: t("Experience.position_sd", "Software Developer"),
      description: t(
        "Experience.illumen.description",
        "Development of a plataform for smart lights and sensors managment using AWS IoT. Development of software to calculate aggregation of electric consumption's data. Managment and deployment in AWS."
      ),
      years: "2019 - 2021",
      mainTech: ["Python Flask/ReactJS"],
      technologies: ["Flask", "AWS", "ReactJS", "Alembic", "MySQL"],
    },
    {
      company: "Desoft",
      title: t("Experience.position_sis", "Specialist in Informatics Science"),
      description: t(
        "Experience.desoft.description",
        "ERP systems development  for several process in several companies."
      ),
      years: "2019 - 2020",
      mainTech: ["Odoo"],
      technologies: ["Odoo", "Django", "ReactJS", "PostgreSQL"],
    },
    {
      company: t(
        "Experience.cbq.company",
        "Chemical Bioactive Center (Central University of Las Villas)"
      ),
      title: t("Experience.position_sd", "Software Developer"),
      description: t(
        "Experience.cbq.description",
        "Web applications developer, landing page developer and manager, and data manager specialist of a clinical trail."
      ),
      years: "2015 - 2019",
      mainTech: ["Django"],
      technologies: [
        "Odoo",
        "Django",
        "ReactJS",
        "PostgreSQL",
        "OpenClinica",
        "HTML/CSS",
        "JavaScript",
      ],
    },
  ];

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
        contentArrowStyle={{
          borderRight:
            currentTheme === "dark"
              ? "7px solid  #555555"
              : "7px solid  #a1a1a1",
        }}
        date={work.years}
        iconStyle={{
          background: currentTheme === "dark" ? "#555555" : "#a1a1a1",
          color: currentTheme === "dark" ? "#fff" : "#000",
          box: currentTheme === "dark" ? "#fff" : "#000",
          boxShadow:
            currentTheme === "dark"
              ? "0 0 0 4px ,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)"
              : "0 0 0 4px ,inset 0 2px 0 rgba(255,255,255,.08),0 3px 0 4px rgba(0,0,0,.05)",
          textAlign: "center",
        }}
        //icon={<i className="fab fa-angular experience-icon"></i>}
        key={i}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>{mainTech}</div>

        <Title
          level={3}
          className="font-pixel font-color"
          style={{ textAlign: "left" }}
        >
          {work.title}
        </Title>
        <Title
          level={4}
          className="font-pixel font-color"
          style={{ textAlign: "left" }}
        >
          {work.company}
        </Title>
        <Paragraph className="font-pixel font-color">
          {work.description}
        </Paragraph>
        <div style={{ textAlign: "left" }}>{tech}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <div
      id="experience"
      className="experience-container"
      style={{ paddingTop: "3%", paddingBottom: "3%" }}
    >
      <Row justify="center">
        <Col span={24} className="front-particles">
          <Col span={24} style={{ textAlign: "center" }}>
            <Title className="font-pixel font-color">
              <Typed
                strings={[t("Experience.title", "Experience")]}
                typeSpeed={110}
                loop
              />
            </Title>
          </Col>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "3%" }}>
        <Col span={20}>
          <VerticalTimeline
            lineColor={currentTheme === "dark" ? "white" : "black"}
            animate={md}
          >
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
  );
};

export default Experience;
