import axios from "axios";

const api = axios.create({
    baseURL: "https://pa-be-k3.herokuapp.com/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Accept : "application/json"
    },
    withCreditentials: true
})

export function getRequest(URL) {
  return api.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
  return api.post(`/${URL}`, payload).then(response => response);
}

export function putRequest(URL, payload) {
  return api.put(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
  return api.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
  return api.delete(`/${URL}`).then(response => response);
}