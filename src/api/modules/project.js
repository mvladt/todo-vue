import { request } from "../index.js";

export default {
  async getAll() {
    return request
      .get("/project/")
      .then((response) => response.json())
      .catch((error) => console.error(error));
  },
  async add(newProjectName) {
    return request
      .post("/project/", { name: newProjectName })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  },
};
