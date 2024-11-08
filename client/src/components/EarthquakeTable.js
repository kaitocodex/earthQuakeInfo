import React from 'react';

function EarthquakeTable({ data }) {
  if (!data || !data.features) {
    return <p>No earthquake data available.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Magnitude</th>
          <th>Place</th>
          <th>Time</th>
          <th>Status</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.features.map((earthquake) => (
          <tr key={earthquake.id}>
            <td>{earthquake.properties.mag}</td>
            <td>{earthquake.properties.place}</td>
            <td>{new Date(earthquake.properties.time).toLocaleString()}</td>
            <td>{earthquake.properties.status}</td>
            <td>{earthquake.properties.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EarthquakeTable;