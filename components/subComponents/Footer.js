import React from "react";
import Preetam from "./../../resources/preetamSingh.png";
import Pokemon from "./../../resources/pokemonLogo.png";
// import PreetamWebsite from ;
// import PokemonWebsite from ;

export default function Footer() {
    function clickPreetam(event) {
        event.preventDefault();
        window.open("https://preetam-profile.netlify.app", "_blank");
    }
    function clickPokemon(event) {
        event.preventDefault();
        window.open("https://www.pokemon.com/us/", "_blank");
    }
    return (
        <div className="footer" id="footer">
            <div className="footer-nav">
                <a className="footer-link-1 footer-link" onClick={clickPreetam}>
                    <img src={Preetam} className="preetam-logo"></img>
                </a>
                <a className="footer-link-2 footer-link">
                    <img
                        src={Pokemon}
                        className="poki-logo"
                        onClick={clickPokemon}
                    ></img>
                </a>
            </div>
            <div className="credits-1">This API was made by Preetam Singh</div>
            <div className="credits-2">
                Inspired from Pokemon. This was a Solo project, do not claim as
                your own or use for teaching.
            </div>
        </div>
    );
}
