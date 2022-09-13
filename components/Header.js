import React from "react";
import projectLogo from "./../resources/logo.png";
import { HelpCircle } from "react-ionicons";
import { CodeSlash } from "react-ionicons";

export default function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={projectLogo} className="header-image"></img>
            </div>
            <div className="header-nav">
                <a href="#about" className="header-nav-link">
                    ABOUT
                </a>
                <a href="#usage" className="header-nav-link">
                    USAGE
                </a>
                <a href="#footer" className="header-nav-link-special">
                    CREDITS
                </a>
            </div>
            <div className="header-nav-mobile">
                <a href="#about" className="header-nav-link">
                    ABOUT
                </a>

                <a href="#footer" className="header-nav-link-special">
                    CREDITS
                </a>
            </div>
        </div>
    );
}
