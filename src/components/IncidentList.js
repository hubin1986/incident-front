import React, { useEffect, useState } from 'react';
import { getAllIncidents, deleteIncident } from '../services/incident';

const IncidentList = ({ onEdit }) => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    const result = await getAllIncidents();
    console.log(result);
    setIncidents(result.data);
  };

  const handleDelete = async (id) => {
    await deleteIncident(id);
    fetchIncidents();
  };

  return (
    <div>
      <h2>Incident List</h2>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            {incident.title} - {incident.description}
            <button onClick={() => onEdit(incident)}>Edit</button>
            <button onClick={() => handleDelete(incident.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentList;
