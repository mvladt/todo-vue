import { fetchGet, fetchPostJson } from "./index.js";

const baseUrl = "/project/";

export default {
  async getAll() {
    return await fetchGet(baseUrl);
  },
  async add(newProjectName) {
    return await fetchPostJson(baseUrl, { name: newProjectName });
  },
};
