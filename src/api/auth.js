import { baseUrl, fetchPostJson } from "./index.js";

const url = baseUrl + "/auth";

export default {
  async signin(user) {
    return await fetchPostJson(`${url}/signin`, user);
  },
  async signup(user) {
    return await fetchPostJson(`${url}/signup`, user);
  },
};
