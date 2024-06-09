import React from "react";
import { Country } from "./App";
import { Link } from "react-router-dom";

interface CapitalsPageProps {
    countryData: Country[]
}

const CapitalsPage: React.FC<CapitalsPageProps> = ({countryData}) => {

    const regionCounts = countryData.reduce((acc, country) => {
        if (country.region) {
            acc[country.region] = (acc[country.region] || 0) + 1;
        }
        return acc;
    }, {} as { [key: string]: number });

    const regionArray = Object.keys(regionCounts);

    return (
        <div className="app">
            <div style={{width: '90%', height: '60%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            {regionArray.map((region, i) => 
            <Link className='link' to={`/capitals/${region}`}>
                <div key={i} className="module-box">
                    {region}({regionCounts[region]})
                    
                </div>
            </Link>
                )}
            </div>
            
        </div>    
    )
}

export default CapitalsPage;