const axios = require('axios')
const express = require('express')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors()); 

let countryData = []

const fetchCountryData = async() => {
    try {
        const res = await axios.get('https://restcountries.com/v3.1/all')
        countryData = res.data.map((country) => ({
            name: country.name.common,
            capital: country.capital,
            region: country.region,

        }))
        // const res = await axios.get('https://countriesnow.space/api/v0.1/countries/capital')
        // countryData = res.data.data.map((country, index) => ({
        //     id: index + 1,
        //     name: country.name,
        //     capital: country.capital
        // }))
        console.log(countryData)

    } catch (error) {
        console.log(error)
    }
}

//run the fetch on/before server start
(async () => {
    await fetchCountryData();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();


//set data to server endpoint
app.get('/api/countries', async (req, res) => {
    try {
        res.json(countryData);
        console.log('server', countryData)


    } catch (error) {
      console.error('Error fetching countries data:', error);
      res.status(500).send('Server error');
    }
  });
  
