import axios from 'axios';

const url = "http://localhost:8888";

export function getList() {
    return axios.get(`${url}/getlist`);
}

export function addList(params: any) {
    return axios.post(`${url}/addlist`, params);
}

export function complish(params: any) {
    return axios.post(`${url}/complish`, params);
}

export function deletelist(params: any) {
    return axios.post(`${url}/deletelist`, params);
}

export function edit(params: any) {
    return axios.post(`${url}/edit`, params);
}