import { request } from "../index.js";

export default {
  getByProjectId(projectId) {
    return request
      .get(`/todo/${projectId}`)
      .then((request) => request.json())
      .catch((error) => console.error(error));
  },
  add(projectId, newTodo) {
    return request
      .post(`/todo/${projectId}`, newTodo)
      .then((request) => request.json())
      .catch((error) => console.error(error));
  },
  remove(todoId) {
    return request
      .delete(`/todo/${todoId}`)
      .then((request) => request.json())
      .catch((error) => console.error(error));
  },
  update(todo) {
    return request
      .put(`/todo/${todo._id}`, todo)
      .then((request) => request.json())
      .catch((error) => console.log(error));
  },
};
