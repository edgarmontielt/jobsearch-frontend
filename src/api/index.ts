import axios from "axios";
import { URL } from "../config";

const instance = axios.create({
    baseURL: URL
})

const get: Function = async (url: string) => {
    return await instance.get(url, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
}

const post = async (url: string, data: object) => {
    return await instance.post(url, data, {
        withCredentials: false,
    })
}

const postToken = async (url: string, data: object) => {
    return await instance.post(url, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
}

export default instance
export { get, post, postToken }