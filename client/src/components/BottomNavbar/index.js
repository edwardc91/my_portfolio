import React, { useState } from "react";
import { Col, Grid, Row, Drawer, Button } from "antd";
import { BarsOutlined } from '@ant-design/icons';

import './index.scss';

import ThemeSwitch from "../ThemeSwitch";

const { useBreakpoint } = Grid;

const BottomNavbar = () => {
    const { md } = useBreakpoint();

    const [drawerVisible, setDrawerVisible] = useState(false)

    const showDrawer = () => {
        setDrawerVisible(true)
    }

    const onCloseDrawer = () => {
        setDrawerVisible(false)
    }

    return (
        <nav
            className="bottom-navbar"
            style={{ zIndex: "200" }}
        >
            <Row>

                {md ?
                    <>
                        <Col flex="auto"><ThemeSwitch /></Col>
                        <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#about-me">About me</a></Col>
                        <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#experience">Experience</a></Col>
                        <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#skills">Skills</a></Col>
                        <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#contact">Contact</a></Col>
                    </>
                    :
                    <>
                        <Button className="barsMenu" type="outlined" onClick={showDrawer}>
                            <BarsOutlined/>
                        </Button>
                        <Drawer
                            placement="bottom"
                            closable={false}
                            onClose={onCloseDrawer}
                            visible={drawerVisible}
                        >
                            <Col flex="auto"><ThemeSwitch /></Col>
                            <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#about-me">About me</a></Col>
                            <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#experience">Experience</a></Col>
                            <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#skills">Skills</a></Col>
                            <Col flex="auto"><a className="font-pixel font-color nav-bar-links" href="#contact">Contact</a></Col>
                        </Drawer>
                    </>
                }
            </Row>
        </nav >
    )
}

export default BottomNavbar;