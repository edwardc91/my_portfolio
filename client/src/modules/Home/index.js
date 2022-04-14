import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Particles from "../../components/Particles";
import BottomNavbar from "../../components/BottomNavbar";

const Home = () => {

    return (
        <React.Fragment >
            <Header />
            <About/>
            <Experience/>
            <BottomNavbar />
            <Particles />
        </React.Fragment>
    )
}

export default Home;