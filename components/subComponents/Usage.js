import React from "react";
import SchemaImage from "./../../resources/schema.png";

export default function Usage() {
    function resetURL() {
        document
            .querySelector(".base-url-input-0")
            .setAttribute(
                "value",
                "http://poke-dart.herokuapp.com/api/pokemons/"
            );
    }
    function resetURL1() {
        document
            .querySelector(".base-url-input-1")
            .setAttribute(
                "value",
                "http://poke-dart.herokuapp.com/api/pokemons/name/<name>"
            );
    }
    function resetURL2() {
        document
            .querySelector(".base-url-input-2")
            .setAttribute(
                "value",
                "http://poke-dart.herokuapp.com/api/pokemons/id/<ID>"
            );
    }
    function resetURL3() {
        document
            .querySelector(".base-url-input-3")
            .setAttribute(
                "value",
                "http://poke-dart.herokuapp.com/api/pokemons/all/"
            );
    }
    return (
        <div className="about" id="usage">
            <div className="heading-div">
                <div className="universal-heading">USAGE</div>
                <div className="universal-sub-heading">
                    FOLLOW THE INSTRUCTIONS WRITTEN BELOW TO FETCH POKEMONS
                </div>
            </div>
            <div className="base-url">
                BASE URL :{" "}
                <input
                    onChange={resetURL}
                    value={"http://poke-dart.herokuapp.com/api/pokemons/"}
                    className="base-url-input base-url-input-0"
                ></input>
            </div>
            <div className="fetch-info">
                <div className="usage-heading"> Fetching with name :</div>
                <p className="about-pre usage-paragraph">
                    {" "}
                    For fetching a pokemon with its name just follow the format
                    given below. Ensure that the name of the pokemon is correct
                    and the names are case sensetive and hence input name
                    accordingly. Some pokemons that have special characters in
                    their name eg, Farfetche'd, simply ignore the ' and search
                    farfetched. Also for pokemon that have male/female
                    cateogory, eg. Nidoran(MALE) search nidoranm or nidoranf.
                </p>
            </div>
            <div className="base-url base-url-name">
                FETCH WITH NAME :{" "}
                <input
                    onChange={resetURL1}
                    value={
                        "http://poke-dart.herokuapp.com/api/pokemons/name/<name>"
                    }
                    className="base-url-input base-url-input-name base-url-input-1"
                ></input>
            </div>
            <div className="fetch-info">
                <div className="usage-heading"> Fetching with ID :</div>
                <p className="about-pre usage-paragraph">
                    {" "}
                    For fetching a pokemon with its ID follow the format given
                    below. Pokemon id is based on the pokedex index which will
                    be linked below. These id are universal and dont repeat even
                    across generations!
                </p>
            </div>
            <div className="base-url base-url-name">
                FETCH WITH ID :{" "}
                <input
                    onChange={resetURL2}
                    value={
                        "http://poke-dart.herokuapp.com/api/pokemons/id/<ID>"
                    }
                    className="base-url-input base-url-input-name base-url-input-2"
                ></input>
            </div>
            <div className="fetch-info">
                <div className="usage-heading"> Fetching all Pokemon :</div>
                <p className="about-pre usage-paragraph">
                    {" "}
                    For fetching all pokemon use the URL below. Also make sure
                    to understand the format of data coming in.
                </p>
            </div>
            <div className="base-url base-url-name">
                FETCH ALL POKEMON :{" "}
                <input
                    onChange={resetURL3}
                    value={"http://poke-dart.herokuapp.com/api/pokemons/all/"}
                    className="base-url-input base-url-input-name base-url-input-3"
                ></input>
            </div>
            <div className="fetch-info fetch-info-schema">
                <div className="usage-heading"> Pokemon Data Format :</div>
                <p className="about-pre usage-paragraph">
                    {" "}
                    The format below shows the datatype and the fields that are
                    present in the response that you will recieve from the api.
                </p>
                {/* prettier-ignore */}
                <div className="formatted">
                    <pre className="schema-format">
                   {`
{
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    alias: {
        type: String,
    },
    type: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    weakness: {
        type: String,
    },
    hp: {
        type: Number,
    },
    moves: {
        type: Array,
    },
}
                   `}
                </pre>
                </div>
                {/* <img src={SchemaImage} className="schema-image"></img> */}
            </div>
        </div>
    );
}
