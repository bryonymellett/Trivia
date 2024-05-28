import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactFlipCard from "reactjs-flip-card";


interface Country {
    name: string,
}

    const LearnPage: React.FC = () => {
        const [countryData, setCountryData] = useState<Country[]>([]);
        const [randomIndex, setRandomIndex] = useState(0);
        const [randomCountry, setRandomCountry] = useState<Country | null>(null)

        useEffect(() => {
            const fetchCountryData = async() => {
            try {
                const res = await axios.get<Country[]>('http://localhost:5000/api/countries')
                setCountryData(res.data)
            } catch (error) {
                console.log('learnpage', error)
            }
        };

            fetchCountryData();

        }, [])

        
    const totalCountries = countryData.length;

    const getRandomIndex = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const handleRandom = () => {
        setRandomIndex(getRandomIndex(0, countryData.length))
        setRandomCountry(countryData[randomIndex])
    }
 



    return (
        <>
            <div className="app">
            <div onClick={handleRandom}><h1>Next</h1></div>
            <div className="app" style={{flexDirection: "column"}}>
            
                <div className="module-box-learn">
                    {randomCountry&&
                    <h2>{randomCountry.name}</h2>}
                </div>
                <div className="module-box-reveal">
                    {randomCountry&&
                    <h2>{randomCountry.name}</h2>}
                </div>
         

                <div>
              
                </div>
            </div>
            </div>
        </>   )
}

export default LearnPage;

