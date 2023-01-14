// TODO: рефакторинг api (в синглтон)

export const API_BASE_URL = process.env.API_BASE_URL;

const baseHeadersObj = {};

export function headersSetToken(token) {
  baseHeadersObj["Authorization"] = `Bearer ${token}`;
}

export async function fetchGet(url) {
  const response = await fetch(API_BASE_URL + url, {
    method: "GET",
    headers: new Headers(baseHeadersObj),
  });
  return await response.json();
}

export async function fetchPostJson(url, jsonBody) {
  const response = await fetch(API_BASE_URL + url, {
    method: "POST",
    body: JSON.stringify(jsonBody),
    headers: new Headers({
      ...baseHeadersObj,
      "Content-Type": "application/json",
    }),
  });
  return await response.json();
}

export async function fetchPutJson(url, jsonBody) {
  const response = await fetch(API_BASE_URL + url, {
    method: "PUT",
    body: JSON.stringify(jsonBody),
    headers: new Headers({
      ...baseHeadersObj,
      "Content-Type": "application/json",
    }),
  });
  return await response.json();
}

export async function fetchDelete(url) {
  const response = await fetch(API_BASE_URL + url, {
    method: "DELETE",
    headers: new Headers(baseHeadersObj),
  });
  return await response.json();
}
