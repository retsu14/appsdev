import axios from "axios";

const API_URL = "http://localhost:5001/api/householdrecords/";

const getHouseholds = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const createHouseholds = async (formdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, formdata, config);

  return response.data;
};

const deleteHousehold = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

const updateHousehold = async (id, formdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + id, formdata, config);

  return response.data;
};

const householdService = {
  getHouseholds,
  createHouseholds,
  deleteHousehold,
  updateHousehold,
};

export default householdService;
