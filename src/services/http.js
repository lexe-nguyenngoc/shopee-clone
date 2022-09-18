import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'Application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
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
    // Handle errors
    throw error;
  }
);

const GET = (url, params) => {
  console.log({ url, params });
  return axiosClient.get(url, {
    params,
  });
};

const POST = (url, data) => {
  return axiosClient.post(url, data);
};

const PUT = (url, data) => {
  return axiosClient.put(url, {
    data,
  });
};

const PATCH = (url, data) => {
  return axiosClient.patch(url, {
    data,
  });
};

const DELETE = (url) => {
  return axiosClient.delete(url);
};

const http = {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
  default: axiosClient,
};

export default http;
