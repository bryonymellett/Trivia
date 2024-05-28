import React from "react";
import { Country } from "./App";
import { Link } from "react-router-dom";

interface CapitalsPageProps {
    countryData: Country[]
}

const CapitalsPage: React.FC<CapitalsPageProps>= ({countryData}) => {

    const regions =  countryData.map((country) => country.region);
    const regionArray = Array.from(new Set(regions))

    return (
        <div className="app">
            <div style={{width: '90%', height: '60%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            {regionArray.map((region, i) => 
            <Link className='link' to={`/${region}`}>
                <div key={i} className="module-box">
                    {region}
                    
                </div>
            </Link>
                )}
            </div>
            
        </div>    
    )
}

export default CapitalsPage;