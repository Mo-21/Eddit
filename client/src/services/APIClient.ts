import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

class APIClient<T, R> {
  constructor(private endpoint: string) {}

  createPost = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  logIn = (data: T) => {
    return axiosInstance.post<R>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
