import { request } from "../index.js";

export default {
  signin(user) {
    return request
      .post("/auth/signin", user)
      .then((request) => request.json())
      .catch((error) => console.error(error));
  },
  signup(user) {
    return request
      .post("/auth/signup", user)
      .then((request) => request.json())
      .catch((error) => console.error(error));
  },
};
