import React, { useState } from 'react';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [earthquakeData, setEarthquakeData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/earthquake?starttime=${startDate}&endtime=${endDate}`);
      const data = await response.json();
      setEarthquakeData(data);
    } catch (error) {
      console.error('Error fetching earthquake data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Earthquake Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">List Earthquakes</button>
      </form>
      {earthquakeData && (
        <table>
          <thead>
            <tr>
              <th>Magnitude</th>
              <th>Place</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {earthquakeData.features.map((earthquake) => (
              <tr key={earthquake.id}>
                <td>{earthquake.properties.mag}</td>
                <td>{earthquake.properties.place}</td>
                <td>{new Date(earthquake.properties.time).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;