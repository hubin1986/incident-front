import React, { useState } from 'react';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';

const App = () => {
  const [currentIncident, setCurrentIncident] = useState(null);

  const handleEdit = (incident) => {
    setCurrentIncident(incident);
  };

  const handleSave = () => {
    setCurrentIncident(null);
  };

  return (
    <div className="App">
      <h1>Incident Management System</h1>
      <IncidentForm currentIncident={currentIncident} onSave={handleSave} />
      <IncidentList onEdit={handleEdit} />
    </div>
  );
};

export default App;
