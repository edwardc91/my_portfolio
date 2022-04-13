import React from "react";
import Header from "../../components/Header";
import Particles from "../../components/Particles";
import BottomNavbar from "../../components/BottomNavbar";

const Home = () => {

    return (
        <React.Fragment>
            <Header />
            <BottomNavbar />
            <Particles />
        </React.Fragment>
    )
}

export default Home;