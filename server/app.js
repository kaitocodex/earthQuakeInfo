// const express = require('express');
// const cors = require('cors');
// const earthquakeRoutes = require('./routes/earthquakeRoutes');

// const app = express();
// const PORT = process.env.PORT || 8080;

// app.use(cors());
// app.use(express.json());

// app.use('/api', earthquakeRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/api/earthquake', async (req, res) => {
  try {
    const { starttime, endtime } = req.query;
    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query`;
    const params = {
      format: 'geojson',
      starttime,
      endtime
    };

    const response = await axios.get(url, { params });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching earthquake data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});