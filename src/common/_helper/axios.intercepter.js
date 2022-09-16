import axios from "axios";

export function jwtInterceptor() {
  axios.interceptors.request.use((request) => {
    const accessToken = localStorage.getItem('token');

    if (accessToken) {
      request.headers.common.Authorization = `Bearer ${JSON.parse(accessToken)}`;
    }

    return request;
  }, (error) => {
    return Promise.reject(error);
  });
}