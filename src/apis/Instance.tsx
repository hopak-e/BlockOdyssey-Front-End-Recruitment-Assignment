import axios from 'axios'

export const createAxiosInstance = () => {
    const base = axios.create({
        baseURL: 'https://dummyjson.com',
    })
    return base
}
