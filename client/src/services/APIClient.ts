import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

class APIClient<T, R> {
  constructor(private endpoint: string) {}

  logIn = (data: T) => {
    return axiosInstance.post<R>(this.endpoint, data).then((res) => res.data);
  };

  register = (data: T) => {
    return axiosInstance.post<R>(this.endpoint, data).then((res) => res.data);
  };

  createPost = (data: T) => {
    const createUrl = `${this.endpoint}/create`;

    return axiosInstance.post<T>(createUrl, data).then((res) => res.data);
  };

  deletePost = (postId: string, userId: string) => {
    const deleteUrl = `${this.endpoint}/${postId}/delete`;
    return axiosInstance.delete<R>(deleteUrl, {
      params: { postId, userId },
    });
  };
}

export default APIClient;
