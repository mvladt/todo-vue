import { fetchPostJson } from "./index.js";

const baseUrl = "/auth";

export default {
  async signin(user) {
    return await fetchPostJson(`${baseUrl}/signin`, user);
  },
  async signup(user) {
    return await fetchPostJson(`${baseUrl}/signup`, user);
  },
};
