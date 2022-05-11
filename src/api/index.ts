import axios from "axios";
import { URL } from "../config";

const instance = axios.create({
    baseURL: URL
})

const get: Function = async (url: string) => {
    return await instance.get(url, {
        withCredentials: true
    })
}

const post = async (url: string, data: object) => {
    return await instance.post(url, data, {
        withCredentials: false,
    });
};

export default instance
export { get, post}