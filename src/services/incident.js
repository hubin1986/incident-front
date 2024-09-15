import axios from 'axios';

const API_URL = 'http://localhost:8080/incident';

export const getAllIncidents = async () => {
  return await axios.get(`${API_URL}/list`);
};

export const createIncident = async (incident) => {
  return await axios.post(`${API_URL}/create`, incident);
};

export const updateIncident = async (id, incident) => {
  return await axios.put(`${API_URL}/update/${id}`, incident);
};

export const deleteIncident = async (id) => {
  return await axios.delete(`${API_URL}/delete/${id}`);
};
