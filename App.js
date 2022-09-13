import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

export default function App() {
        React.useEffect(() => {
        // smooth scrolling
        const allLinks = document.querySelectorAll("a");

        allLinks.forEach(function (link) {
            link.addEventListener("click", function (e) {
                if (this.classList.contains("no-default")) return;
                e.preventDefault();
                const href = link.getAttribute("href");

                // Scroll back to top
                if (href === "#")
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });

                // Scroll to other links
                if (href != "" && href !== "#" && href.startsWith("#")) {
                    const sectionEl = document.querySelector(href);
                    if (sectionEl.classList.contains("section--hidden")) {
                        const top = sectionEl.getBoundingClientRect().top;
                        window.scrollTo({
                            left: 0,
                            top: top + window.scrollY - "80",
                            behavior: "smooth",
                        });
                    } else {
                        sectionEl.scrollIntoView({ behavior: "smooth" });
                    }
                }
            });
        });
    }, []);
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}
