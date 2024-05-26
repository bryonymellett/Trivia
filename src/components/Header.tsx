import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="header">
            <h1>Trivia</h1>
            <h1>Learn</h1>
            <h1>Test</h1>
        </div>
    )
}

export default Header;



