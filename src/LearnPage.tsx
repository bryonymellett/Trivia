import React, { useEffect, useState } from "react";

interface Country {
    country: string;
    capital: string;
}

const LearnPage: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([])

    useEffect(() => {
        const fetchCountries = async() => {
            try {
                const countryData = await getCountryData();
                setCountries(countryData);

            } catch (error) {
                console.log('Failiure at LearnPage', error)
            }
        };

        fetchCountries();

    }, [])

    return (
        <>
            <div className="app" style={{flexDirection: "column"}}>
                <div className="module-box-learn">
                    ENGLAND
                </div>
                <div className="module-box-learn">
                    <h2></h2>
                </div>
            </div>
        </>
    )
}

export default LearnPage;