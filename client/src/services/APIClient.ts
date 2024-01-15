import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAllPosts = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  createPost = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
