const axios = require('axios')
const express = require('express')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors()); 

let countryData = []

const fetchCountryData = async() => {
    try {
        const res = await axios.get('https://countriesnow.space/api/v0.1/countries/capital')
        countryData = res.data;

    } catch (error) {
        console.log(error)
    }
}

//run the fetch on server start
fetchCountryData();

//set data to server endpoint
app.get('/api/countries', async (req, res) => {
    try {
        res.json(countryData);

    } catch (error) {
      console.error('Error fetching countries data:', error);
      res.status(500).send('Server error');
    }
  });
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });