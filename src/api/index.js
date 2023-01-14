import project from "./modules/project.js";
import todo from "./modules/todo.js";
import push from "./modules/push.js";
import auth from "./modules/auth.js";

const baseUrl = process.env.API_BASE_URL;
const baseHeaders = {};

const api = {
  setToken(token) {
    baseHeaders["Authorization"] = `Bearer ${token}`;
  },
  
  project,
  todo,
  push,
  auth,
};

export default api;

export const request = {
  get(url) {
    const fetchConfig = {
      method: "GET",
      headers: baseHeaders,
    };
    return fetch(baseUrl + url, fetchConfig);
  },
  post(url, jsonBody) {
    const fetchConfig = {
      method: "POST",
      headers: {
        ...baseHeaders,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonBody),
    };
    return fetch(baseUrl + url, fetchConfig);
  },
  put(url, jsonBody) {
    const fetchConfig = {
      method: "PUT",
      headers: {
        ...baseHeaders,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonBody),
    };
    return fetch(baseUrl + url, fetchConfig);
  },
  delete() {
    const fetchConfig = {
      method: "DELETE",
      headers: baseHeaders,
    };
    return fetch(baseUrl + url, fetchConfig);
  },
};
