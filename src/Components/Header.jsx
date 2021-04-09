import React from 'react';

const Header = () => {
    const list = ["Home", "Films", "Serises", "Contact Us"];
    return (

        <header>
            <div className="navbar">
                <h1>Home of Movies</h1>
                <ul>
                    {list.map(el => <li><a>{el}</a></li>)}
                </ul>

            </div>
        </header>

    );
}


export default Header;