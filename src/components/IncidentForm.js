import React, { useState, useEffect } from 'react';
import { createIncident, updateIncident } from '../services/incident';

const IncidentForm = ({ currentIncident, onSave }) => {
  const [incident, setIncident] = useState({
    title: '',
    description: '',
    status: ''
  });

  useEffect(() => {
    if (currentIncident) {
      setIncident(currentIncident);
    }
  }, [currentIncident]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncident({
      ...incident,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (incident.id) {
      await updateIncident(incident.id, incident);
    } else {
      await createIncident(incident);
    }
    onSave();
  };

  return (
    <div>
      <h2>{incident.id ? 'Edit Incident' : 'Add Incident'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={incident.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="description"
          value={incident.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button type="submit">{incident.id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default IncidentForm;
