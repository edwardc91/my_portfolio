import React from "react";
import {
    Row,
    Col,
    Image,
    Typography,
} from 'antd'
import Typed from "react-typed";

const { Title } = Typography;

const Header = () => {

    return (
        <div className="main-container-home" style={{ paddingBottom: "8%"}}>
            <Row>
                <Col className="front-particles" span={12}>
                    <a href="https://github.com/edwardc91">
                        <Image src="images/github-qr.svg" preview={false} style={{ width: 130 }} />
                    </a>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "5%" }}>
                <Col className="front-particles" span={12} style={{ textAlign: "center" }}>
                    <Image src="images/programmer.gif" preview={false} style={{ width: 300 }} />
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "2%", textAlign: "center" }}>
                <Col span={12} className="front-particles">
                    <Title className="title font-pixel" level={1}>
                        <Typed strings={["Eduardo Miguel Hernández"]} typeSpeed={40} />
                    </Title>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "2%", textAlign: "center" }}>
                <Col span={12} className="front-particles">
                    <Title className="title font-pixel" level={2}>
                        <Typed
                            strings={[
                                "Fullstack Developer",
                                "Backend Developer",
                                "Graphics Engine enthusiastic",
                                "Also i love huskies",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </Title>
                </Col>
            </Row>
        </div>
    )
}

export default Header;