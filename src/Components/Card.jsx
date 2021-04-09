import React from 'react';



const Card =(props) =>{
    return (
        <div className="movie-container">
            <div className="image">
             <img src={props.image} alt ="product imge"/>   
            </div>
            <div className="MovieName">
                <h3>{props.name}</h3>
            </div>
            
        </div>
    );
}
export default Card;
