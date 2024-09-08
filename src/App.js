import React, { useState } from 'react';
import './App.css';

function App() {
  // Sample data
  const [facilities, setFacilities] = useState([
    { id: 1, type: 'Media', status: 'Good', needsReplacement: false },
    { id: 2, type: 'Furniture', status: 'Bad', needsReplacement: true },
    { id: 3, type: 'Electrical', status: 'Good', needsReplacement: false },
    { id: 4, type: 'Furniture', status: 'Bad', needsReplacement: false },
    { id: 5, type: 'Media', status: 'Bad', needsReplacement: true },
  ]);

  // Total number of facilities
  const totalFacilities = facilities.length;

  // Total bad facilities
  const badFacilities = facilities.filter((facility) => facility.status === 'Bad').length;

  // Facilities needing replacement
  const facilitiesNeedingReplacement = facilities.filter((facility) => facility.needsReplacement).length;

  // Group facilities by type
  const facilityTypes = facilities.reduce((acc, facility) => {
    if (!acc[facility.type]) {
      acc[facility.type] = 0;
    }
    acc[facility.type]++;
    return acc;
  }, {});

  return (
    <div className="App">
      <h1>Facilities Dashboard</h1>
      <div className="dashboard">
        <div className="stat">
          <h3>Total Facilities</h3>
          <p>{totalFacilities}</p>
        </div>
        <div className="stat">
          <h3>Bad Facilities</h3>
          <p>{badFacilities}</p>
        </div>
        <div className="stat">
          <h3>Facilities Needing Replacement</h3>
          <p>{facilitiesNeedingReplacement}</p>
        </div>
        <div className="stat">
          <h3>Facilities by Type</h3>
          <ul>
            {Object.entries(facilityTypes).map(([type, count]) => (
              <li key={type}>{type}: {count}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
