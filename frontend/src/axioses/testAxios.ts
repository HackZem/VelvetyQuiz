import axios from "axios";
import IAuthResponse from "../models/responses/AuthResponse";

export const API_URL = "http://localhost:5000/api/";

const testApi = axios.create({
  baseURL: API_URL,
});

testApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
});

testApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const req = err.config;

    if (err?.response?.status === 401 && req && !req._retry) {
      req._isRetry = true;

      try {
        const { data } = await axios.get<IAuthResponse>(
          `${API_URL}users/auth/refresh`,
          { withCredentials: true }
        );

        localStorage.setItem("token", data.accessToken);

        return testApi.request(req);
      } catch (err) {
        console.log("Not authorized");
      }
    }

    throw err;
  }
);

export default testApi;
