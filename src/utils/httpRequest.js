import axios from 'axios'

export const httpRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export const get = async (path) => {
    const res = await httpRequest.get(path)
    return res.data
}
