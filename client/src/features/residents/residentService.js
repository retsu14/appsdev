import axios from "axios";

const API_URL = "http://localhost:5001/api/residents/";

const getResidents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const createResident = async (formdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, formdata, config);

  return response.data;
};

const deleteResident = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

const updateResident = async (id, formdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + id, formdata, config);

  return response.data;
};
const residentService = {
  getResidents,
  createResident,
  deleteResident,
  updateResident,
};
export default residentService;
