import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

function App() {
  const [facilities, setFacilities] = useState([
    { id: 1, type: 'Media', status: 'Good', needsReplacement: false },
    { id: 2, type: 'Furniture', status: 'Bad', needsReplacement: true },
    { id: 3, type: 'Electrical', status: 'Good', needsReplacement: false },
    { id: 4, type: 'Furniture', status: 'Bad', needsReplacement: false },
    { id: 5, type: 'Media', status: 'Bad', needsReplacement: true },
  ]);

  const [newFacility, setNewFacility] = useState({ type: '', status: '', needsReplacement: false });

  const totalFacilities = facilities.length;
  const badFacilities = facilities.filter((facility) => facility.status === 'Bad').length;
  const facilitiesNeedingReplacement = facilities.filter((facility) => facility.needsReplacement).length;

  const facilityTypes = facilities.reduce((acc, facility) => {
    if (!acc[facility.type]) {
      acc[facility.type] = 0;
    }
    acc[facility.type]++;
    return acc;
  }, {});

  // Bar chart data
  const chartData = {
    labels: Object.keys(facilityTypes),
    datasets: [
      {
        label: 'Number of Facilities',
        data: Object.values(facilityTypes),
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
      },
    ],
  };

  // Add new facility to the list
  const addFacility = () => {
    const id = facilities.length + 1;
    setFacilities([...facilities, { id, ...newFacility }]);
    setNewFacility({ type: '', status: '', needsReplacement: false });
  };

  return (
    <div className="App">
      <h1>Facilities Dashboard</h1>
      <div className="snapshot">
        <Bar data={chartData} />
      </div>
      <div className="facility-list">
        <h2>Facilities List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Status</th>
              <th>Needs Replacement</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((facility) => (
              <tr key={facility.id}>
                <td>{facility.id}</td>
                <td>{facility.type}</td>
                <td>{facility.status}</td>
                <td>{facility.needsReplacement ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-facility">
        <h3>Add New Facility</h3>
        <input
          type="text"
          placeholder="Type (e.g., Media)"
          value={newFacility.type}
          onChange={(e) => setNewFacility({ ...newFacility, type: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status (Good/Bad)"
          value={newFacility.status}
          onChange={(e) => setNewFacility({ ...newFacility, status: e.target.value })}
        />
        <label>
          <input
            type="checkbox"
            checked={newFacility.needsReplacement}
            onChange={(e) => setNewFacility({ ...newFacility, needsReplacement: e.target.checked })}
          />
          Needs Replacement
        </label>
        <button onClick={addFacility}>Add Facility</button>
      </div>
    </div>
  );
}

export default App;
