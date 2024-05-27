import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="header">
            <Link to="/" className="link"><h1>Trivia</h1></Link>

            
            <h1>Learn</h1>
            <h1>Test</h1>
        </div>
    )
}

export default Header;



