import React from 'react';
import { Link } from "react-router-dom";

const Movie = (props) => {
    const summ = props.summary
    const handelSummary = () => {
        return { __html: summ };
    }
    return (
        <>
            <div className="movie">
                <Link to="/"><button>Back</button></Link>
                <div className="center">
                    <img src={props.image}></img>
                    <h2>{props.name}</h2>
                    <div className="summary" dangerouslySetInnerHTML={handelSummary()}></div>
                    <div>
                        <button>Watch Now</button>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Movie;
