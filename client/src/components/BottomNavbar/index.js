import React from "react";
import { Col, Image, Row } from "antd";

import './index.scss';

import ThemeSwitch from "../ThemeSwitch";

const BottomNavbar = () => {

    return (
        <nav
            className="bottom-navbar"
            style={{ zIndex: "200" }}
        >
            <Row>
                <Col flex="auto"><ThemeSwitch /></Col>
                <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#about-me">About me</a></Col>
                <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#experience">Experience</a></Col>
                <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#skills">Skills</a></Col>
                <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#contact">Contact</a></Col>
            </Row>
        </nav>
    )
}

export default BottomNavbar;