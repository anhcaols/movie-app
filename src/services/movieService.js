import * as requestMovie from '~/utils/httpRequest'

const API_KEY = 'api_key=8e6ce93930533e9735da28b27d751706'

export const movie = async () => {
    try {
        const res = await requestMovie.get(`movie/297762/similar?${API_KEY}&language=en-US&page=1`)
        return res.results
    } catch (error) {
        console.log(error)
    }
}
