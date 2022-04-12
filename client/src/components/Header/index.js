import React from "react";
import {
    Layout,
    Row,
    Col,
    Avatar,
    Image
} from 'antd'
import Typed from "react-typed";

const Header = () => {

    return (
        <div style={{ marginTop: "12%" }}>
            <Row justify="center">
                <Col span={12} style={{ textAlign: "center", zIndex: "101" }}>
                    <Image src="images/programmer.gif" preview={false} style={{ width: 300 }}/>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "2%", textAlign: "center" }}>
                <Col span={12} style={{ zIndex: "101" }}>
                    <h1 className="title">
                        <Typed strings={["Eduardo Miguel Hernández"]} typeSpeed={40} />
                    </h1>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "2%", textAlign: "center" }}>
                <Col span={12} style={{ zIndex: "101" }}>
                    <h2 className="title">
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
                    </h2>
                </Col>
            </Row>
        </div>
    )
}

export default Header;