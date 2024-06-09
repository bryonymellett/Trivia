import React, { useEffect, useState } from "react";
import { Country } from "./App";
import { useParams } from "react-router-dom";

interface RegionPageProps {
    countryData: Country[]
}


const Region:React.FC<RegionPageProps> = ({countryData}) => {
    const [randomCountry, setRandomCountry] = useState<Country | null>(null);

    const {region} = useParams();
    
    const countriesInRegion = countryData.filter((country) => country.region === region)

    const getRandomCountry = (countries: Country[]) => {
        if (countries.length === 0) {
          return null;
        }
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries[randomIndex];
      };
    
      useEffect(() => {
        setRandomCountry(getRandomCountry(countriesInRegion));
      }, [countriesInRegion]);
    
      const handleRandom = () => {
        setRandomCountry(getRandomCountry(countriesInRegion));
      };


    return (
        <div className="app" style={{flexDirection: "column"}}>
            <h1>{region}</h1>
            
            <div className="module-box-learn">
                {randomCountry ? (
                <h2>{randomCountry.name}</h2>
                ) : (
                <h2>No countries available in this region</h2>
                )}
            </div>
            <div className="module-box-learn">
                {randomCountry && (
                <h2>{randomCountry.capital}</h2>
                )}
            </div>
            <div onClick={handleRandom}>Next</div>
            <div onClick={handleRandom}>Next</div>


            

        </div>
        
    )
}

export default Region;