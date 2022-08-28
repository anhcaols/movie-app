import * as requestMovie from '~/utils/httpRequest'

const API_KEY = "api_key=8e6ce93930533e9735da28b27d751706"

export const genres = async () => {
    try {
        const res = await requestMovie.get(
            `genre/movie/list?${API_KEY}&language=en-US`,
        )
        return res.genres
    } catch (error) {
        console.log(error)
    }
}
