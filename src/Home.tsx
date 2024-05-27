import React from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div className="app">
        <Link to="/learn" className="link">
            <div className="module-box" >
                CAPITALS
        </div></Link>
        
        </div>

    )
}

export default Home;