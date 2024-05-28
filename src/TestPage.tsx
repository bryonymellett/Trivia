import React, { useEffect, useState } from "react";
import axios from "axios";

interface Country {
    id: number,
    name: string,
    capital: string,
}


    const TestPage: React.FC = () => {
  

    return (
        <>
            <div className="app" style={{flexDirection: "column"}}>
                <div className="module-box-learn">
                  
                </div>
                <div className="module-box-learn">
                    <h2></h2>
                </div>
            </div>
        </>   )
}

export default TestPage;