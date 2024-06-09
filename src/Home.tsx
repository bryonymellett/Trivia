import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {

    return (
        <div className="app">
            <Link to="/capitals" className="link">
                <div className="module-box" >
                    CAPITALS
                </div>
            </Link>
            <Link to="/capitals" className="link">
                <div className="module-box" >
                    FLAGS
                </div>
            </Link>
        
        </div>

    )
}

export default Home;