import React from "react";
import Banner from "./subComponents/Banner.js";
import About from "./subComponents/About.js";
import Usage from "./subComponents/Usage.js";
import Footer from "./subComponents/Footer.js";

export default function Body() {
    return (
        <div className="body">
            <Banner />
            <About />
            <Usage />
            <Footer />
            {/* <div className="the-line"></div> */}
        </div>
    );
}
