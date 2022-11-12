const baseUrl = "http://127.0.0.1:8000/api/todo";

export default {
  async getAll() {
    const response = await fetch(baseUrl, { method: "GET" });
    return await response.json();
  },
  async save(newTodo) {
    const response = await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return await response.json();
  },
  async remove(todoId) {
    const response = await fetch(`${baseUrl}/${todoId}`, { method: "DELETE" });
    return await response.json();
  },
  async update(todo) {
    const response = await fetch(`${baseUrl}/${todo._id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return await response.json();
  }
};
