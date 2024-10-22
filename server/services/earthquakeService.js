const axios = require('axios');

exports.fetchEarthquakeData = async (starttime, endtime) => {
  const url = `https://earthquake.usgs.gov/fdsnws/event/1/query`;
  const params = {
    format: 'geojson',
    starttime,
    endtime
  };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch earthquake data from USGS API');
  }
};