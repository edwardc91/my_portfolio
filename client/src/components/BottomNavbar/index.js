import React from "react";
import './index.scss';

import ThemeSwitch from "../ThemeSwitch";

const BottomNavbar = () => {

    return (
        <nav
            className="bottom-navbar"
            style={{ zIndex: "200" }}
        >
            <ThemeSwitch />
        </nav>
    )
}

export default BottomNavbar;