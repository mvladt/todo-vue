import { baseUrl, fetchGet, fetchPostJson, fetchPutJson, fetchDelete } from "./index.js";

const url = baseUrl + "/todo";

export default {
  async getAll() {
    return await fetchGet(url);
  },
  async save(newTodo) {
    return await fetchPostJson(url, newTodo);
  },
  async remove(todoId) {
    return await fetchDelete(`${url}/${todoId}`);
  },
  async update(todo) {
    return await fetchPutJson(`${url}/${todo.id}`, todo);
  },
};
