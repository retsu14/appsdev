import axios from "axios";

const API_URL = "http://localhost:5001/api/users/";

const getUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};
const register = async (formdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, formdata, config);
  return response.data;
};
const userService = {
  getUser,
  register,
};

export default userService;
