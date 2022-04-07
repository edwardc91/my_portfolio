import React from "react";
import {
    Row,
    Avatar,
    Image
} from 'antd'
import Typed from "react-typed";

const Header = () => {

  return (
    <div>
        <Row>
        <Avatar src={<Image src="../../statics/images/avatar.png" />} alt="Eduardo Miguel" />
        </Row>
        <h4>
            <Typed strings={["Eduardo Miguel Hernández"]} typeSpeed={40} />
        </h4>

        <h5>
            <Typed
                strings={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Graphics Engine enthusiastic",
                    "Also i love huskies",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
        </h5>
    </div>
  )
}

export default Header;