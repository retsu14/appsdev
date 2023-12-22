import axios from "axios";

const API_URL = "http://localhost:5001/api/announcements/";

const getAnnouncements = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const deleteAnnouncement = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

const createAnnouncement = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, data, config);

  return response.data;
};

const announcementService = {
  getAnnouncements,
  deleteAnnouncement,
  createAnnouncement,
};

export default announcementService;
