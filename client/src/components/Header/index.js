import React from "react";
import {
    Row,
    Col,
    Image,
    Typography,
    Grid
} from 'antd'
import Typed from "react-typed";
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const { useBreakpoint } = Grid;

const Header = () => {
    const { md } = useBreakpoint();
    const {t} = useTranslation('common')

    return (
        <div className="main-container-home" style={{ paddingBottom: "8%", height: "100vh", overflow: "auto" }}>
            {
                md ?
                    <>
                        <Row>
                            <Col className="front-particles" span={12}>
                                <a href="https://github.com/edwardc91">
                                    <Image src="images/github-qr.svg" preview={false} style={{ width: 130 }} />
                                    <Title className="title font-pixel" level={3}> {t("header.check_github","Check my github here")}</Title>
                                </a>
                            </Col>
                        </Row>
                    </>
                    :
                    <></>
            }
            <Row justify="center" style={{}}>
                <Col className="front-particles" span={12} style={{ textAlign: "center", marginTop: md ? "5%" : "50%" }}>
                    <Image src="images/programmer.gif" preview={false} style={{ width: "100%" }} />
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "2%", textAlign: "center" }}>
                <Col span={12} className="front-particles">
                    <Title className="title font-pixel" level={md ? 1 : 4}>
                        <Typed strings={["Eduardo Miguel Hernández"]} typeSpeed={40} />
                    </Title>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "2%", textAlign: "center" }}>
                <Col span={12} className="front-particles">
                    <Title className="title font-pixel" level={md ? 2 : 5}>
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
            <Row justify="center" style={{ marginTop: "2%", textAlign: "center" }}>
                <Col span={12} className="front-particles">
                    {
                        md ?
                            <Title className="title font-pixel" level={5}>
                                Keep scrolling to learn more...
                            </Title>
                            :
                            <span className="title font-pixel">Keep scrolling to learn more...</span>
                    }

                </Col>
            </Row>
        </div>
    )
}

export default Header;