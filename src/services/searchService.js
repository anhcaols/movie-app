import * as requestMovie from '~/utils/httpRequest'

const API_KEY = '8e6ce93930533e9735da28b27d751706'

export const search = async (query) => {
    try {
        const res = await requestMovie.get(
            `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
        )
        console.log(res.results)
        return res.results
    } catch (error) {
        console.log(error)
    }
}
