import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosClient.interceptors.request.use(async (config) => {
  config.params = { api_key: process.env.REACT_APP_GIPHY_API_KEY };
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    const errorMessage = error.response.data;
    throw errorMessage;
  }
);

export default axiosClient;
