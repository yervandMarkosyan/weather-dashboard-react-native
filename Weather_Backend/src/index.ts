import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
  return res.status(500).json({ error: 'API key is missing' });
}

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: { q: city, appid: apiKey, units: 'metric' }
    });
    res.json({ data: response.data});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});



app.listen(3000, () => console.log('Server running on port 3000'));
