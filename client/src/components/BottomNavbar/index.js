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
            </Row>
        </nav>
    )
}

export default BottomNavbar;