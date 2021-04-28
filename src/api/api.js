import axios from "axios";

const url = "/api/post";

export default class API {
  static async getAllPost() {
    const res = await axios.get(url);
    console.log("API_ALL", res.data);
    return res.data;
  }

  static async getPostByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }

  static async addPost(data) {
    const res = await axios.post(url, data);
    return res.data;
  }

  static async updatePost(id, data) {
    const res = await axios.patch(`${url}/${id}`, data);
    return res.data;
  }

  static async deletePost(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
