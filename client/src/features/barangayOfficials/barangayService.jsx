import axios from "axios";

const API_URL = "http://localhost:5001/api/barangayofficials/";

//create
const createBarangayOfficial = async (barangayData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, barangayData, config);

  return response.data;
};

//get
const getBarangayOfficials = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//delete

const deleteBarangayOfficial = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);

  return response.data;
};
const barangayService = {
  createBarangayOfficial,
  getBarangayOfficials,
  deleteBarangayOfficial,
};

export default barangayService;
