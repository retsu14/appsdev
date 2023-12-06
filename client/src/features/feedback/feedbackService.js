import axios from "axios";

const API_URL = "http://localhost:5001/api/feedbacks/";

const getFeedbacks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const deleteFeedback = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

const createFeedback = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, data, config);

  return response.data;
};

const feedbackService = {
  getFeedbacks,
  deleteFeedback,
  createFeedback,
};

export default feedbackService;
