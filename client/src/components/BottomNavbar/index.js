import React, { useState } from "react";
import { Col, Grid, Row, Drawer, Button, Menu } from "antd";
import { MenuOutlined } from '@ant-design/icons';

import './index.scss';

import ThemeSwitch from "../ThemeSwitch";

const { useBreakpoint } = Grid;
const { Item } = Menu;

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
                            <MenuOutlined />
                        </Button>
                        <Drawer
                            placement="bottom"
                            closable={false}
                            onClose={onCloseDrawer}
                            visible={drawerVisible}
                        >
                            <ThemeSwitch />
                            <Menu mode="inline" style={{ marginTop: "1%"}}>
                                <Item><a className="font-pixel font-color nav-bar-links" href="#about-me">About me</a></Item>
                                <Item><a className="font-pixel font-color nav-bar-links" href="#experience">Experience</a></Item>
                                <Item><a className="font-pixel font-color nav-bar-links" href="#skills">Skills</a></Item>
                                <Item><a className="font-pixel font-color nav-bar-links" href="#contact">Contact</a></Item>
                            </Menu>
                        </Drawer>
                    </>
                }
            </Row>
        </nav >
    )
}

export default BottomNavbar;