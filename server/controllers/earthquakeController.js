const earthquakeService = require('../services/earthquakeService');

exports.getEarthquakeData = async (req, res) => {
  try {
    const { starttime, endtime } = req.query;
    const data = await earthquakeService.fetchEarthquakeData(starttime, endtime);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching earthquake data' });
  }
};