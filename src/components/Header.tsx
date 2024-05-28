import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="header"> 
                <Link to="/" className="link">
               <h3>Trivia</h3></Link>

        
            <div style={{display: 'flex'}}>
            <Link to="/learn" className="header-link">
                <h3>Learn</h3>
            </Link>
            <Link to="/test" className="header-link">
                <h3>Test</h3>
            </Link>
    
            </div>
        </div>
    )
}

export default Header;



