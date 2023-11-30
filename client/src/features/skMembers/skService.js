import axios from "axios";

const API_URL = "http://localhost:5001/api/skmembers/";

//get
const getSkmembers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};
//create
const createSkmember = async (formdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, formdata, config);

  return response.data;
};

//delete

const deleteSkmember = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

//update
const updateSkmember = async (id, skData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id, skData, config);

  return response.data;
};

const skService = {
  getSkmembers,
  createSkmember,
  deleteSkmember,
  updateSkmember,
};

export default skService;
