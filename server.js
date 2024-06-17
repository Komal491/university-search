const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { Favourite } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// API to fetch universities
app.get('/api/universities', async (req, res) => {
  try {
    const { data } = await axios.get('http://universities.hipolabs.com/search?country=India');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching universities');
  }
});

// API to save favourite university
app.post('/api/favourites', async (req, res) => {
  try {
    const favourite = await Favourite.create(req.body);
    res.json(favourite);
  } catch (error) {
    res.status(500).send('Error saving favourite');
  }
});

// API to get favourite universities
app.get('/api/favourites', async (req, res) => {
  try {
    const favourites = await Favourite.findAll();
    res.json(favourites);
  } catch (error) {
    res.status(500).send('Error fetching favourites');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
