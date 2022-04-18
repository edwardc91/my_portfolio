import React from "react";
import { Row, Col, Typography, Grid } from "antd";
import { GithubFilled, 
        FacebookFilled, 
        InstagramFilled,
        WhatsAppOutlined,
        MailOutlined,
    } from '@ant-design/icons';

import "./index.scss";

const { Title } = Typography;

const { useBreakpoint } = Grid

const Footer = () => {
    const { md } = useBreakpoint();

    return (
        <div className="front-particles footer-container" style={{ padding: "5%" , paddingBottom: md ? "5%"  : "17%" }}>
            <Row justify="center">
                <Col xs={3} md={1} style={{ textAlign: "center" }}>
                    <a className="font-color footer-media-link" href="https://github.com/edwardc91"><GithubFilled/></a>
                </Col>
                <Col xs={3} md={1} style={{ textAlign: "center" }}>
                    <a className="font-color footer-media-link" href="https://www.facebook.com/eduardo.miguelhernandez1991/"><FacebookFilled/></a>
                </Col>
                <Col xs={3} md={1} style={{ textAlign: "center" }}>
                    <a className="font-color footer-media-link" href="https://www.instagram.com/edward_jorgeovich/"><InstagramFilled/></a>
                </Col>
            </Row>
            <Row id="contact" justify="center" style={{ marginTop: "1%" }}>
                <Col span={24} style={{ textAlign: "center" }}>
                    <Title className="font-color font-pixel" level={3}>Contact</Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={24} style={{ textAlign: "center" }}>
                    <Title className="font-color font-pixel" level={5}><WhatsAppOutlined/> +5355172188</Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={24} style={{ textAlign: "center" }}>
                    <a className="font-color font-pixel" href="mailto:emiguelc1991@protonmail.com"><MailOutlined/> emiguelc1991@protonmail.com</a>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;