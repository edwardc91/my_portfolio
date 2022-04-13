import React from "react";
import { Divider } from "antd";
import Header from "../../components/Header";
import About from "../../components/About";
import Particles from "../../components/Particles";
import BottomNavbar from "../../components/BottomNavbar";

const Home = () => {

    return (
        <React.Fragment >
            <Header />
            <About/>
            <BottomNavbar />
            <Particles />
        </React.Fragment>
    )
}

export default Home;