import React from "react";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="heading-div">
                <div className="universal-heading">ABOUT</div>
                <div className="universal-sub-heading">
                    A RESTFUL API FOR FETCHING ORIGINAL GENERATION 1 POKEMON
                    INFORMATION
                </div>
            </div>
            {/* prettier-ignore */}
            <div className="mew-div">
                <div className="about-pre">
                Poke-dart is an API that is capable of fetching information of
                the original 151 Pokemons. The format is suitable for making player cards, reasearch purposes, utilization in other projects. Pokemons can be fetched using their Pokidex id, or their names. The development notes and other informations can be checked below. This is just a personal project and do not claim any Idea or Pokemon as my own. This project was made using, <strong>React, Node.js, Mongo.DB with Mongoose and Express</strong> and hence is a Full Stack project. I came up with idea of making this API as I myself owned the Generation 1 pokemon cards and always wondered where the infomation on those cards came from.Also the project follows MVC architecture to allow for proper logic segregation in the project. This API might move onto a version 2 and include pokemons from all generations in a future update.
            </div>
            <div className="mew-png"></div>
            </div>
            <div className="cool-keywords">
                <div className="cool" style={{ backgroundColor: "red" }}>
                    RESTFUL
                </div>
                <div className="cool" style={{ backgroundColor: "purple" }}>
                    SIMPLE
                </div>
                <div
                    className="cool"
                    style={{ backgroundColor: "rgb(126, 207, 235)" }}
                >
                    NO KEY
                </div>
                <div className="cool" style={{ backgroundColor: "lightgreen" }}>
                    GEN ONE
                </div>
            </div>
        </div>
    );
}
