import { fetchGet, fetchPostJson, fetchPutJson, fetchDelete } from "./index.js";

const baseUrl = "/todo";

export default {
  async getByProjectId(projectId) {
    return await fetchGet(`${baseUrl}/${projectId}`);
  },
  async add(projectId, newTodo) {
    return await fetchPostJson(`${baseUrl}/${projectId}`, newTodo);
  },
  async remove(todoId) {
    return await fetchDelete(`${baseUrl}/${todoId}`);
  },
  async update(todo) {
    return await fetchPutJson(`${baseUrl}/${todo._id}`, todo);
  },
};
