import * as requestMovie from '~/utils/httpRequest'

const API_KEY = '8e6ce93930533e9735da28b27d751706'

export const movieDetail = async (id = 297762) => {
    try {
        const res = await requestMovie.get(`movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
        return res
    } catch (error) {
        console.log(error)
    }
}
